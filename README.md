# CAHC Website

This is the official website for the **Center for Ancient History and Culture (CAHC)** at Jain University.

## About

The Center for Ancient History and Culture (CAHC) conducts interdisciplinary research on India's ancient cultural and intellectual heritage. We are recognized as an Indian Knowledge System (IKS) center by the Ministry of Education, Government of India.

## Website Structure

- **Home**: Overview of CAHC and latest posts
- **About**: Detailed information about the center
- **Papers**: Academic publications and research papers
- **Books**: Published books and monographs
- **Events**: Active workshops, discussion meetings, and public presentations (interactive tab switcher)
- **Search**: Search functionality for papers and content
- **Contact**: Contact information and location

## Technology Stack

- **Jekyll**: Static site generator
- **Minima Theme**: Clean, responsive design
- **GitHub Pages**: Hosting platform
- **Ruby**: Backend language for Jekyll

## Development

### Prerequisites

- Ruby 2.7+
- Bundler gem
- Jekyll

### Local Development

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Build site
bundle exec jekyll build
```

### Content Management

- **Posts**: Add new posts to `_posts/` directory with format `YYYY-MM-DD-title.markdown`
- **Pages**: Main pages are in root directory with `.markdown` extension
- **Talks & Presentations**: Manage video metadata, HTML slide links, and PDFs in `_data/talks.yml`.
- **Drafts**: Work-in-progress posts go in `_drafts/` directory
- **Assets**: Images, PDFs, and other files go in `assets/` directory

### Navigation

Navigation is controlled by the `header_pages` setting in `_config.yml`. To modify the main menu, edit this list.

## YouTube Video Sync

An automated Python tool is provided to synchronize local `.mp4` video files to YouTube using metadata from `_data/talks.yml`.

### Setup
1. Download your OAuth 2.0 client secrets credentials JSON from your Google Cloud Console.
2. Save it as `_scripts/youtube_uploader/client_secrets.json` (this file path is git-ignored).

### Running Sync
Run the uploader using `uv` (it will dynamically pull necessary libraries like `google-api-python-client` and `pyyaml` using PEP 723 inline dependencies):
```bash
uv run _scripts/youtube_uploader/uploader.py
```

### Profile-Isolated OAuth Authentication
To prevent system-default Chrome profiles from crossing authorization channels (e.g. personal vs. CAHC account):
1. The uploader starts a local server but does **not** auto-open the browser.
2. Copy the authorization URL printed to the terminal.
3. Open a tab inside your **CAHC Chrome profile**, paste the link, and complete login.
4. The token will be cached locally at `_scripts/youtube_uploader/token.json` (git-ignored) for future uploads.

### Idempotency & Corrections
* **Idempotency:** Video uploads are tracked in `state.json` via MD5 checksums. Re-running the script will skip already uploaded files.
* **Corrections:** If you edit titles, descriptions, or tags in `_data/talks.yml`, simply run the script. It detects the difference and updates the video metadata on YouTube via the API without re-uploading the video file itself.

## Sanskrit Translation & Review Workflow

The website features full bilingual support for English and Sanskrit. 

### Bilingual Toggle
* The site uses client-side state tracking to persist the language choice.
* The query parameter `?lang=sa` or `?lang=en` forces the active language. 
* Language choice is stored in `localStorage` so it persists across pages and browser sessions.

### Sanskrit Translation Review (DOCX)
An automated script compiles all Jekyll data files and blog posts into a side-by-side translation table in a Word document (`.docx`), ready for review by non-technical Sanskrit scholars in Google Docs.

#### 1. Generate the Review Document
Run the compiler tool using `uv` (it manages `python-docx` and `PyYAML` automatically):
```bash
uv run _scripts/generate_review_docx.py
```
This generates the Word file at: `tmp/sanskrit_review.docx` (automatically ignored by Git).

#### 2. Sync to Google Drive
Upload the generated document to your shared team folder:
```bash
rclone copy tmp/sanskrit_review.docx cahcgdrive:cahc-portal-stuff/
```

#### 3. Surfacing the Reviewer Portal on the Website
To let reviewers access the Google Drive folder without publicizing it to general users:
1. Have the reviewer visit the staging or production URL with the passcode parameter:
   `https://cahc-ju-preview.netlify.app/?review=cahc2026`
2. This activates **Reviewer Mode** via `localStorage` and injects a private **Sanskrit Reviewer Portal** link into the footer.
3. They can open the synced `.docx` in Google Docs and suggest edits or leave comments inline.

## Maintenance

- Academic papers are organized by category in the search interface
- Large PDF collections are excluded from the repository but linked externally
- Google Analytics is configured for production environment
- Site includes structured data for better SEO

## Contact

For technical issues or content updates:

- Email: rn.iyengar@jainuniversity.ac.in
- Website: https://cahc.jainuniversity.ac.in

## License

Content is owned by the Center for Ancient History and Culture, Jain University.
