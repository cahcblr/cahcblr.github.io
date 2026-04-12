---
description: Domain knowledge and conventions for the CAHC GitHub Pages repo
applyTo: '**/*.{md,markdown,html,yml,yaml}'
---

# CAHC Repo — Agent Instructions

## Vocabulary (enforce strictly)
- **CAHC** — Centre for Ancient History and Culture. Never "CHC".
- `assets/cached_papers/rni/` — the CAHC durable mirror set for PDF papers. "rni/" is a legacy directory name; it now holds all CAHC-mirrored PDFs, not just RNI-authored ones.
- **Patra Darpan** — the external Netlify app (`patra-darpan.netlify.app`) that is the source of truth for paper metadata. CAHC consumes projections from it; it does not maintain its own master list.
- `cahc_authored=true` — the Patra Darpan inclusion flag for P60 rows.

## Architecture
- **P60** (`p60_papers.markdown`) — CAHC's curated papers page. Static table is the fallback. Patra Darpan's `p60.js` progressively enhances it at runtime.
- **P85** (`p85_search.markdown`) — Search entry point. The 2000-row inline IJHS table was removed Apr 2026. Patra Darpan is now the sole search entry point via `search-widget.html`.
- **`_data/build.yml`** — placeholder (`sha: dev`, `date: local`) committed to repo. The GitHub Actions deploy workflow overwrites it with real values before Jekyll builds. Do not hand-edit for production purposes.
- **`deploy-main.yml`** — the GitHub Actions workflow that builds and deploys main. Requires Settings → Pages → Source = "GitHub Actions". Rolling back to branch deploy is instant via that same dropdown.

## File layout gotchas
- `assets/talks/`, `assets/cached_papers/` — untracked (not in git). Large; not duplicated in worktrees.
- `assets/ijhs_potentials/` — untracked, moved to Archive Apr 2026. Not used by the site.
- `_site/` — local Jekyll build output only. GitHub Pages ignores it. Safe to delete with `bundle exec jekyll clean` anytime; `jekyll serve` rebuilds it.
- `.git/` object store is shared across all worktrees — PDFs/binaries committed in history bloat it. Run `git gc --aggressive` periodically.

## Worktree workflow
- Main repo lives at `/Users/sunder/projects/cahcblr.github.io` (branch: `main`).
- Agent work happens in `/Users/sunder/projects/cahcblr.github.io.worktrees/agents-<name>`.
- Merge pattern: `cd` to main repo → `git merge --ff-only agents/<name>` → `git push`. Always hand these commands to the user explicitly — do not chain them silently.
- `git checkout main` inside a worktree will fail safely (branch locked to main repo). That's correct behaviour.

## GitHub Actions
- `bundler-cache: true` on `ruby/setup-ruby` fails on the hosted runner with exit code 16. Use `bundler-cache: false` + an explicit `bundle install` step.
- Always use `fetch-depth: 0` on `actions/checkout` when the build stamp step needs `git rev-parse`.
- Pushing a workflow file requires the `workflow` OAuth scope: `gh auth refresh -s workflow`.

## Scope discipline
- User may override a "do not touch X yet" instruction mid-session explicitly. When they do, that is a deliberate decision — capture it, don't second-guess it.
- Agent should **ask before expanding scope** beyond the stated task. P85 cleanup and build-stamp were good outcomes but were agent-initiated without explicit approval. The correct pattern: "I see an opportunity to also do X — want me to proceed?"

## Learnings
- Apr 2026: P85 table removal was user-approved mid-session after seeing P60 work. The base instruction said "defer P85" — the user explicitly overrode it. Future agents: do not re-add the table or treat its removal as unintentional.
- Apr 2026: `deploy-preview.yml` existed before `deploy-main.yml` was written. Always check existing workflow files for patterns before writing new ones — would have caught the bundler-cache issue immediately.
