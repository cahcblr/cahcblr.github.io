source "https://rubygems.org"

# --- Core Dependencies ---

# This gem is the "Manager". It automatically installs the correct versions
# of Jekyll, Minima, Feed, Sitemap, and SEO Tag to match GitHub.com.
gem "github-pages", group: :jekyll_plugins

# --- Plugins ---

group :jekyll_plugins do
  # We commented these out because "github-pages" above already includes them.
  # Keeping them active causes the "Conflicting Dependencies" crash.
  # gem "jekyll-feed", "~> 0.12"
  # gem "jekyll-sitemap", "~> 1.4"
end

# --- System Compatibility ---

# Windows/JRuby compatibility (Safe to keep)
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# REQUIRED for your M1 Mac (Ruby 3.0+) to run Jekyll 3.9
gem "webrick", "~> 1.7"
