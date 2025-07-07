# CAHC Website

This is the official website for the **Center for Ancient History and Culture (CAHC)** at Jain University.

## About

The Center for Ancient History and Culture (CAHC) conducts interdisciplinary research on India's ancient cultural and intellectual heritage. We are recognized as an Indian Knowledge System (IKS) center by the Ministry of Education, Government of India.

## Website Structure

- **Home**: Overview of CAHC and latest posts
- **About**: Detailed information about the center
- **Papers**: Academic publications and research papers
- **Books**: Published books and monographs
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
- **Drafts**: Work-in-progress posts go in `_drafts/` directory
- **Assets**: Images, PDFs, and other files go in `assets/` directory

### Navigation

Navigation is controlled by the `header_pages` setting in `_config.yml`. To modify the main menu, edit this list.

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