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
