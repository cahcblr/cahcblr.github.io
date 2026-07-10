---
layout: home
title: CAHC
show_posts: true
list_title: "News & Updates"
---
{% assign content = site.data.pages.home %}

<div class="lang-block">
  <div class="lang-content" lang="en">{{ content.intro_p.en | markdownify }}</div>
  <div class="lang-content" lang="sa">{{ content.intro_p.sa | markdownify }}</div>
</div>

<div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin: 30px 0;">
  <div style="flex: 1; min-width: 250px; text-align: center;">
    <a href="{{ '/assets/cahc-iks-cert.jpg' | relative_url }}" target="_blank">
      <img src="{{ '/assets/cahc-iks-cert.jpg' | relative_url }}" alt="IKS Certificate" style="max-height: 250px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
    </a>
    <div class="lang-block">
      <p class="lang-content" lang="en" style="font-size: 0.9em; margin-top: 10px; color: #555;">{{ content.iks_caption.en }}</p>
      <p class="lang-content" lang="sa" style="font-size: 0.9em; margin-top: 10px; color: #555;">{{ content.iks_caption.sa }}</p>
    </div>
  </div>
  <div style="flex: 1; min-width: 250px; text-align: center;">
    <a href="{{ '/assets/iso-certificate-2025-2028.jpg' | relative_url }}" target="_blank">
      <img src="{{ '/assets/iso-certificate-2025-2028.jpg' | relative_url }}" alt="ISO 21001:2018 Certificate" style="max-height: 250px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
    </a>
    <div class="lang-block">
      <p class="lang-content" lang="en" style="font-size: 0.9em; margin-top: 10px; color: #555;">{{ content.iso_caption.en }}</p>
      <p class="lang-content" lang="sa" style="font-size: 0.9em; margin-top: 10px; color: #555;">{{ content.iso_caption.sa }}</p>
    </div>
  </div>
</div>

<div class="lang-block">
  <div class="lang-content" lang="en">{{ content.p2.en | markdownify }}</div>
  <div class="lang-content" lang="sa">{{ content.p2.sa | markdownify }}</div>
</div>

<div class="lang-block">
  <h2 class="lang-content" lang="en">{{ content.research.title.en }}</h2>
  <h2 class="lang-content" lang="sa">{{ content.research.title.sa }}</h2>
</div>

<div class="lang-block">
  <div class="lang-content" lang="en">
    <p>{{ content.research.description.en }}</p>
    <ul>
      {% for bullet in content.research.bullets %}
        <li>{{ bullet.en }}</li>
      {% endfor %}
    </ul>
    <p>{{ content.research.pub_header.en }}</p>
    <ul>
      {% for bullet in content.research.pub_bullets %}
        <li>{{ bullet.en | markdownify }}</li>
      {% endfor %}
    </ul>
  </div>
  <div class="lang-content" lang="sa">
    <p>{{ content.research.description.sa }}</p>
    <ul>
      {% for bullet in content.research.bullets %}
        <li>{{ bullet.sa }}</li>
      {% endfor %}
    </ul>
    <p>{{ content.research.pub_header.sa }}</p>
    <ul>
      {% for bullet in content.research.pub_bullets %}
        <li>{{ bullet.sa | markdownify }}</li>
      {% endfor %}
    </ul>
  </div>
</div>

<div class="lang-block">
  <h2 class="lang-content" lang="en">{{ content.outreach.title.en }}</h2>
  <h2 class="lang-content" lang="sa">{{ content.outreach.title.sa }}</h2>
</div>

<div class="lang-block">
  <div class="lang-content" lang="en">
    <p>{{ content.outreach.description.en }}</p>
    <ul>
      {% for bullet in content.outreach.bullets %}
        <li>{{ bullet.en | markdownify }}</li>
      {% endfor %}
    </ul>
  </div>
  <div class="lang-content" lang="sa">
    <p>{{ content.outreach.description.sa }}</p>
    <ul>
      {% for bullet in content.outreach.bullets %}
        <li>{{ bullet.sa | markdownify }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
