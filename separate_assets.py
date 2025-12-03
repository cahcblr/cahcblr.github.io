"""
PDF ASSET AUDIT & SEPARATION UTILITY

Purpose:
This script optimizes the Jekyll build and Netlify deployment by separating 
active assets from unused ones.

Logic:
1. Scans all .md, .html, .yml files for links to 'assets/ijhs/'.
2. Identifies "Essential" files (those actually linked/used).
3. Moves all UNUSED files from 'assets/ijhs/' to 'assets/ijhs_potentials/'.

Result:
- 'assets/ijhs/' remains small (only used files) -> Fast Build.
- 'assets/ijhs_potentials/' contains the bulk -> Ignored by Git/Jekyll.
"""
import os
import re
import shutil

# Configuration
SOURCE_DIR = os.path.abspath("assets/ijhs")
POTENTIALS_DIR = os.path.abspath("assets/ijhs_potentials")
PROJECT_ROOT = os.path.abspath(".")

def find_referenced_files(root_dir):
    referenced_files = set()
    # Regex to find links like /assets/ijhs/filename.pdf or assets/ijhs/filename.pdf
    link_pattern = re.compile(r'assets/ijhs/([^ "\'\)]+)')
    
    for dirpath, _, filenames in os.walk(root_dir):
        # Skip the assets directory itself to avoid self-references if any
        if "assets/ijhs" in dirpath:
            continue
            
        for filename in filenames:
            if filename.endswith(('.md', '.html', '.yml', '.yaml')):
                filepath = os.path.join(dirpath, filename)
                try:
                    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                        matches = link_pattern.findall(content)
                        for match in matches:
                            # Clean up the match (remove potential trailing characters)
                            clean_match = match.split('#')[0].split('?')[0]
                            referenced_files.add(clean_match)
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")
    return referenced_files

def main():
    print("Step 1: Scanning for referenced files...")
    referenced_files = find_referenced_files(PROJECT_ROOT)
    print(f"Found {len(referenced_files)} referenced files.")
    for f in referenced_files:
        print(f" - {f}")

    print("\nStep 2: Preparing directories...")
    if not os.path.exists(POTENTIALS_DIR):
        os.makedirs(POTENTIALS_DIR)
        print(f"Created {POTENTIALS_DIR}")

    print("\nStep 3: Moving potential files...")
    moved_count = 0
    kept_count = 0
    
    if os.path.exists(SOURCE_DIR):
        for filename in os.listdir(SOURCE_DIR):
            file_path = os.path.join(SOURCE_DIR, filename)
            
            # Skip directories
            if os.path.isdir(file_path):
                continue
                
            if filename in referenced_files:
                print(f"Keeping ESSENTIAL: {filename}")
                kept_count += 1
            else:
                # Move to potentials
                dest_path = os.path.join(POTENTIALS_DIR, filename)
                shutil.move(file_path, dest_path)
                moved_count += 1
    
    print(f"\nSummary:")
    print(f"Kept {kept_count} essential files in {SOURCE_DIR}")
    print(f"Moved {moved_count} potential files to {POTENTIALS_DIR}")

if __name__ == "__main__":
    main()
