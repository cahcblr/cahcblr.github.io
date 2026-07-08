# /// script
# dependencies = [
#   "google-api-python-client",
#   "google-auth-oauthlib",
#   "google-auth-httplib2",
#   "pyyaml"
# ]
# ///

import os
import sys
import json
import hashlib
import yaml
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

# Directory configuration
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
WORKSPACE_DIR = os.path.dirname(os.path.dirname(SCRIPT_DIR))
TALKS_DATA_PATH = os.path.join(WORKSPACE_DIR, "_data", "talks.yml")
STATE_FILE_PATH = os.path.join(SCRIPT_DIR, "state.json")
CLIENT_SECRETS_PATH = os.path.join(SCRIPT_DIR, "client_secrets.json")
TOKEN_PATH = os.path.join(SCRIPT_DIR, "token.json")

# OAuth Scopes
SCOPES = ["https://www.googleapis.com/auth/youtube.upload", "https://www.googleapis.com/auth/youtube.force-ssl"]

def get_md5(filepath):
    """Calculate MD5 checksum of a file."""
    hasher = hashlib.md5()
    with open(filepath, 'rb') as f:
        for chunk in iter(lambda: f.read(65536), b''):
            hasher.update(chunk)
    return hasher.hexdigest()

def get_authenticated_service():
    """Authenticate and return the YouTube service object."""
    credentials = None
    
    # Load cached token if it exists
    if os.path.exists(TOKEN_PATH):
        try:
            credentials = Credentials.from_authorized_user_file(TOKEN_PATH, SCOPES)
        except Exception as e:
            print(f"[-] Error loading cached token: {e}")
            credentials = None

    # Authenticate if credentials are not valid
    if not credentials or not credentials.valid:
        if credentials and credentials.expired and credentials.refresh_token:
            print("[*] Refreshing expired authentication token...")
            try:
                credentials.refresh(Request())
            except Exception as e:
                print(f"[-] Token refresh failed: {e}. Re-authenticating...")
                credentials = None
                
        if not credentials:
            if not os.path.exists(CLIENT_SECRETS_PATH):
                print(f"[-] ERROR: Missing client secrets file at: {CLIENT_SECRETS_PATH}")
                print("    Please download your OAuth 2.0 client secrets JSON from the Google Cloud Console,")
                print("    rename it to 'client_secrets.json', and place it in the '_scripts/youtube_uploader/' folder.")
                sys.exit(1)
                
            print("[*] Initiating OAuth flow...")
            # Solution 1: We start a local server but do NOT open the browser automatically.
            # This allows the user to copy-paste the link into their specific Chrome Profile.
            flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRETS_PATH, SCOPES)
            credentials = flow.run_local_server(
                port=8080,
                open_browser=False,
                authorization_prompt_message="Please visit the authorization link in your CAHC Chrome profile:\n{url}"
            )
            
        # Save credentials for the next run
        with open(TOKEN_PATH, 'w') as f:
            f.write(credentials.to_json())
            print("[*] Saved authentication token to cache.")

    return build("youtube", "v3", credentials=credentials)

def load_state():
    """Load upload state from state.json."""
    if os.path.exists(STATE_FILE_PATH):
        try:
            with open(STATE_FILE_PATH, 'r') as f:
                return json.load(f)
        except Exception as e:
            print(f"[-] Error loading state.json: {e}. Starting fresh.")
    return {}

def save_state(state):
    """Save upload state to state.json."""
    try:
        with open(STATE_FILE_PATH, 'w') as f:
            json.dump(state, f, indent=2)
    except Exception as e:
        print(f"[-] Error saving state.json: {e}")

def upload_video(youtube, filepath, title, description, tags=None):
    """Uploads a video file to YouTube."""
    if tags is None:
        tags = ["Indian Astronomy", "CAHC", "Jain University"]
        
    print(f"[*] Uploading video file: {os.path.basename(filepath)}")
    print(f"    Title: {title}")
    
    body = {
        "snippet": {
            "title": title[:100],  # YouTube titles have a 100 character limit
            "description": description[:5000],  # Description limit is 5000 chars
            "tags": tags,
            "categoryId": "27"  # Education category
        },
        "status": {
            "privacyStatus": "unlisted"  # Defaulting to unlisted for review
        }
    }
    
    media = MediaFileUpload(
        filepath,
        chunksize=1024*1024,
        mimetype="video/mp4",
        resumable=True
    )
    
    request = youtube.videos().insert(
        part="snippet,status",
        body=body,
        media_body=media
    )
    
    response = None
    while response is None:
        status, response = request.next_chunk()
        if status:
            print(f"    Progress: {int(status.progress() * 100)}%")
            
    youtube_id = response.get("id")
    print(f"[+] Successfully uploaded! YouTube Video ID: {youtube_id}")
    return youtube_id

def update_metadata(youtube, youtube_id, title, description, tags=None):
    """Updates the metadata (title, description, tags) of an existing video."""
    if tags is None:
        tags = ["Indian Astronomy", "CAHC", "Jain University"]
        
    print(f"[*] Syncing corrected metadata for YouTube Video: {youtube_id}")
    print(f"    Updated Title: {title}")
    
    body = {
        "id": youtube_id,
        "snippet": {
            "title": title[:100],
            "description": description[:5000],
            "tags": tags,
            "categoryId": "27"
        }
    }
    
    try:
        request = youtube.videos().update(
            part="snippet",
            body=body
        )
        request.execute()
        print(f"[+] Metadata successfully updated.")
        return True
    except Exception as e:
        print(f"[-] Error updating metadata on YouTube: {e}")
        return False

def build_video_metadata(talk, video):
    """Generate appropriate Title, Description and Tags for a video based on talk metadata."""
    talk_title = talk.get("title", "")
    talk_desc = talk.get("description", "")
    talk_speaker = talk.get("speaker", "Center for Ancient History and Culture")
    talk_venue = talk.get("venue", "CAHC Lecture")
    talk_date = talk.get("date", "")
    video_name = video.get("name", "Demonstration")
    
    # 100-character safe Title limit
    full_title = f"{talk_title} - {video_name} | CAHC"
    if len(full_title) > 100:
        # Truncate talk title slightly if it exceeds limit
        max_talk_len = 100 - len(f" - {video_name} | CAHC")
        full_title = f"{talk_title[:max_talk_len-3]}... - {video_name} | CAHC"
        
    description = (
        f"Visual demonstration of \"{video_name}\" for the academic lecture:\n"
        f"\"{talk_title}\"\n\n"
        f"Presented by: {talk_speaker}\n"
        f"Occasion: {talk_venue} ({talk_date})\n\n"
        f"About this talk:\n"
        f"{talk_desc}\n\n"
        f"For interactive slides, printable PDFs, and more Indian Astronomy resources, visit:\n"
        f"https://cahc.jainuniversity.ac.in/events/\n\n"
        f"Center for Ancient History and Culture (CAHC), Jain University, Bengaluru."
    )
    
    tags = ["Indian Astronomy", "CAHC", "Jain University", "Ancient Science", talk_venue, video_name]
    if "Sunder" in talk_speaker:
        tags.append("Sunder Chakravarty")
    if "Iyengar" in talk_speaker:
        tags.append("R N Iyengar")
        
    return full_title, description, tags

def main():
    print("=== CAHC YouTube Presentation Uploader ===")
    
    if not os.path.exists(TALKS_DATA_PATH):
        print(f"[-] ERROR: Talks data file not found at: {TALKS_DATA_PATH}")
        sys.exit(1)
        
    with open(TALKS_DATA_PATH, 'r') as f:
        talks = yaml.safe_load(f)
        
    if not talks:
        print("[*] No talks found in talks.yml.")
        sys.exit(0)
        
    # Load state
    state = load_state()
    
    # Authenticate service
    youtube = get_authenticated_service()
    
    state_changed = False
    
    # Loop through talks and find videos
    for talk in talks:
        videos = talk.get("videos", [])
        if not videos:
            continue
            
        for video in videos:
            relative_url = video.get("url", "")
            if not relative_url:
                continue
                
            # Convert URL path to absolute local path
            # remove leading slash to prevent absolute path joining conflicts
            clean_url = relative_url.lstrip('/')
            filepath = os.path.join(WORKSPACE_DIR, clean_url)
            
            if not os.path.exists(filepath):
                print(f"[-] WARNING: Local video file not found: {filepath}. Skipping.")
                continue
                
            # Calculate file hash
            file_hash = get_md5(filepath)
            
            # Generate target metadata
            title, description, tags = build_video_metadata(talk, video)
            
            video_state = state.get(relative_url)
            
            if video_state and video_state.get("youtube_id"):
                youtube_id = video_state["youtube_id"]
                # Video already uploaded. Check for metadata correction/sync.
                last_metadata = video_state.get("last_metadata", {})
                
                # Check hash to see if the file itself changed
                if video_state.get("md5_hash") != file_hash:
                    print(f"[*] Detected file content changes for {os.path.basename(filepath)}.")
                    # Re-upload the file
                    try:
                        new_id = upload_video(youtube, filepath, title, description, tags)
                        video_state["youtube_id"] = new_id
                        video_state["md5_hash"] = file_hash
                        video_state["last_metadata"] = {
                            "title": title,
                            "description": description,
                            "tags": tags
                        }
                        state[relative_url] = video_state
                        state_changed = True
                    except Exception as e:
                        print(f"[-] Error re-uploading file: {e}")
                else:
                    # File is identical, check if metadata needs corrections
                    meta_changed = (
                        last_metadata.get("title") != title or
                        last_metadata.get("description") != description or
                        last_metadata.get("tags") != tags
                    )
                    
                    if meta_changed:
                        # Sync corrections using videos.update()
                        success = update_metadata(youtube, youtube_id, title, description, tags)
                        if success:
                            video_state["last_metadata"] = {
                                "title": title,
                                "description": description,
                                "tags": tags
                            }
                            state[relative_url] = video_state
                            state_changed = True
                    else:
                        print(f"[~] {os.path.basename(filepath)} is up-to-date. Skipping.")
            else:
                # Video not uploaded yet
                try:
                    youtube_id = upload_video(youtube, filepath, title, description, tags)
                    state[relative_url] = {
                        "youtube_id": youtube_id,
                        "md5_hash": file_hash,
                        "uploaded_at": Credentials.to_json,  # dummy placeholder
                        "last_metadata": {
                            "title": title,
                            "description": description,
                            "tags": tags
                        }
                    }
                    # Grab accurate timestamp
                    import datetime
                    state[relative_url]["uploaded_at"] = datetime.datetime.utcnow().isoformat() + "Z"
                    state_changed = True
                except Exception as e:
                    print(f"[-] Error uploading {os.path.basename(filepath)}: {e}")
                    
            if state_changed:
                save_state(state)
                state_changed = False # reset flag
                
    print("[*] Synchronization check completed.")

if __name__ == "__main__":
    main()
