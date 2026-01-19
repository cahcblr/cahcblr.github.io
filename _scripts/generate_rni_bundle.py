
import os
import re
import shutil
import zipfile
import tempfile
from datetime import datetime

# Configuration
MARKDOWN_FILE = "p60_papers.markdown"
PDF_SOURCE_DIR = "assets/cached_papers/rni"
OUTPUT_ZIP_DIR = "assets/cached_papers/rni"
OUTPUT_ZIP_NAME = "cahc-rni-papers.zip"

def parse_markdown_table(file_path):
    """
    Parses the markdown table from p60_papers.markdown.
    Returns a list of dictionaries: {id, year, category, title, author, source, pdf_path}
    """
    papers = []
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Find table start
    table_started = False
    for line in lines:
        if line.strip().startswith("| # | Year |"):
            table_started = True
            continue
        if not table_started:
            continue
        if line.strip().startswith("|---"):
            continue
        if not line.strip().startswith("|"):
            continue # End of table usually

        # Parse Row
        # | 1 | 2023 | Jyotihsa | [**Title**](path) | Author | Source |
        parts = [p.strip() for p in line.split('|')]
        if len(parts) < 7: continue

        # parts[0] is empty, parts[1] is ID, etc.
        p_id = parts[1]
        year = parts[2]
        category = parts[3]
        title_blobs = parts[4]
        author = parts[5]
        source = parts[6]

        # Extract Title and Link
        # [**Title**](../assets/cached_papers/rni/file.pdf)
        pdf_path = None
        title = title_blobs
        
        match = re.search(r'\[\*\*(.*?)\*\*\]\((.*?)\)', title_blobs)
        if match:
            title = match.group(1)
            pdf_path_raw = match.group(2)
            # Normalize path: ../assets/cached_papers/rni/file.pdf -> file.pdf
            if "assets/cached_papers/rni/" in pdf_path_raw:
                pdf_path = os.path.basename(pdf_path_raw)
        else:
             # Try simple link [Title](link)
             match = re.search(r'\[(.*?)\]\((.*?)\)', title_blobs)
             if match:
                title = match.group(1).replace('**', '')
                pdf_path_raw = match.group(2)
                if "assets/cached_papers/rni/" in pdf_path_raw:
                    pdf_path = os.path.basename(pdf_path_raw)
        
        papers.append({
            "id": p_id,
            "year": year,
            "category": category,
            "title": title,
            "author": author,
            "source": source,
            "pdf_link": pdf_path
        })
        
    return papers

def generate_index_html(papers):
    """Generates a simple HTML index for the zip bundle."""
    # Use f-string. Note: CSS braces { } inside f-string must be escaped as {{ }}
    current_date = datetime.now().strftime("%Y-%m-%d")
    count = len(papers)
    
    html = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CAHC - R.N. Iyengar Papers</title>
    <style>
        body {{ font-family: sans-serif; padding: 20px; max-width: 1200px; margin: 0 auto; }}
        h1 {{ color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px; }}
        table {{ border-collapse: collapse; width: 100%; margin-top: 20px; }}
        th, td {{ border: 1px solid #ddd; padding: 8px; text-align: left; }}
        th {{ background-color: #f2f2f2; }}
        tr:nth-child(even) {{ background-color: #f9f9f9; }}
        a {{ color: #0066cc; text-decoration: none; font-weight: bold; }}
        a:hover {{ text-decoration: underline; }}
        .meta {{ color: #666; font-size: 0.9em; margin-bottom: 20px; }}
    </style>
</head>
<body>
    <h1>Collected Papers of Prof. R.N. Iyengar</h1>
    <div class="meta">
        <p><strong>Source:</strong> Center for Ancient History and Culture (CAHC)</p>
        <p><strong>Generated:</strong> {current_date}</p>
        <p><strong>Total Papers:</strong> {count}</p>
    </div>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Year</th>
                <th>Category</th>
                <th>Title (Click to Open PDF)</th>
                <th>Author</th>
                <th>Source</th>
            </tr>
        </thead>
        <tbody>
"""

    for p in papers:
        link = p['pdf_link'] if p['pdf_link'] else "#"
        target = 'target="_blank"' if p['pdf_link'] else ''
        html += f"""
            <tr>
                <td>{p['id']}</td>
                <td>{p['year']}</td>
                <td>{p['category']}</td>
                <td><a href="{link}" {target}>{p['title']}</a></td>
                <td>{p['author']}</td>
                <td>{p['source']}</td>
            </tr>
"""
    html += """
        </tbody>
    </table>
</body>
</html>
"""
    return html

def generate_index_md(papers):
    """Generates a text-based Markdown index."""
    md = f"# Collected Papers of Prof. R.N. Iyengar\n\n"
    md += f"**Generated:** {datetime.now().strftime('%Y-%m-%d')}\n"
    md += f"**Total Papers:** {len(papers)}\n\n"
    md += "---\n\n"
    
    for p in papers:
        md += f"## {p['id']}. {p['title']} ({p['year']})\n"
        md += f"- **Author:** {p['author']}\n"
        md += f"- **Category:** {p['category']}\n"
        md += f"- **Source:** {p['source']}\n"
        if p['pdf_link']:
            md += f"- **File:** {p['pdf_link']}\n"
        else:
            md += f"- **File:** (Not available in this bundle)\n"
        md += "\n"
        
    return md

def create_bundle():
    print(f"Parsing {MARKDOWN_FILE}...")
    papers = parse_markdown_table(MARKDOWN_FILE)
    print(f"Found {len(papers)} papers.")
    
    with tempfile.TemporaryDirectory() as temp_dir:
        # 1. Copy PDFs
        print("Copying PDFs...")
        copied_count = 0
        missing_count = 0
        
        for p in papers:
            if not p['pdf_link']:
                continue
                
            src = os.path.join(PDF_SOURCE_DIR, p['pdf_link'])
            dst = os.path.join(temp_dir, p['pdf_link'])
            
            if os.path.exists(src):
                shutil.copy2(src, dst)
                copied_count += 1
            else:
                print(f"Warning: PDF not found - {src}")
                missing_count += 1
                
        print(f"Copied {copied_count} PDFs. Missing: {missing_count}")
        
        # 2. Generate Indexes
        print("Generating indexes...")
        with open(os.path.join(temp_dir, "index.html"), "w", encoding='utf-8') as f:
            f.write(generate_index_html(papers))
            
        with open(os.path.join(temp_dir, "index.md"), "w", encoding='utf-8') as f:
            f.write(generate_index_md(papers))
            
        # 3. Create Zip
        zip_path = os.path.join(OUTPUT_ZIP_DIR, OUTPUT_ZIP_NAME)
        print(f"Creating zip archive at {zip_path}...")
        
        # We want the zip to contain files at root, not inside a folder
        with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zf:
            for root, dirs, files in os.walk(temp_dir):
                for file in files:
                    file_path = os.path.join(root, file)
                    arcname = os.path.relpath(file_path, temp_dir)
                    zf.write(file_path, arcname)
                    
        # 4. Stats
        size_mb = os.path.getsize(zip_path) / (1024 * 1024)
        print(f"Success! Bundle created.")
        print(f"Path: {zip_path}")
        print(f"Size: {size_mb:.2f} MB")

if __name__ == "__main__":
    create_bundle()
