---
layout: page
title: About
permalink: /about/
---
{% assign content = site.data.pages.about %}

<div class="lang-block">
  <h2 class="lang-content" lang="en">{{ content.title.en }}</h2>
  <h2 class="lang-content" lang="sa">{{ content.title.sa }}</h2>
</div>

<div class="lang-block">
  <div class="lang-content" lang="en">{{ content.intro_p.en | markdownify }}</div>
  <div class="lang-content" lang="sa">{{ content.intro_p.sa | markdownify }}</div>
</div>

<p class="iks-cert-wrapper">
  <img src="{{ '/assets/cahc-iks-cert.jpg' | relative_url }}" alt="IKS Certificate">
</p>

<div class="lang-block">
  <h3 class="lang-content" lang="en">{{ content.mission.title.en }}</h3>
  <h3 class="lang-content" lang="sa">{{ content.mission.title.sa }}</h3>
</div>

<div class="lang-block">
  <div class="lang-content" lang="en">
    <p>{{ content.mission.description.en }}</p>
    <ul>
      {% for bullet in content.mission.bullets %}
        <li>{{ bullet.en }}</li>
      {% endfor %}
    </ul>
  </div>
  <div class="lang-content" lang="sa">
    <p>{{ content.mission.description.sa }}</p>
    <ul>
      {% for bullet in content.mission.bullets %}
        <li>{{ bullet.sa }}</li>
      {% endfor %}
    </ul>
  </div>
</div>

<div class="lang-block">
  <h3 class="lang-content" lang="en">{{ content.research_areas.title.en }}</h3>
  <h3 class="lang-content" lang="sa">{{ content.research_areas.title.sa }}</h3>
</div>

<div class="lang-block">
  <div class="lang-content" lang="en">
    <p>{{ content.research_areas.description.en }}</p>
    <ul>
      {% for bullet in content.research_areas.bullets %}
        <li>{{ bullet.en | markdownify }}</li>
      {% endfor %}
    </ul>
  </div>
  <div class="lang-content" lang="sa">
    <p>{{ content.research_areas.description.sa }}</p>
    <ul>
      {% for bullet in content.research_areas.bullets %}
        <li>{{ bullet.sa | markdownify }}</li>
      {% endfor %}
    </ul>
  </div>
</div>

<div class="lang-block">
  <h3 class="lang-content" lang="en">{{ content.publications.title.en }}</h3>
  <h3 class="lang-content" lang="sa">{{ content.publications.title.sa }}</h3>
</div>

<div class="lang-block">
  <div class="lang-content" lang="en">
    <ul>
      {% for bullet in content.publications.bullets %}
        <li>{{ bullet.en | markdownify }}</li>
      {% endfor %}
    </ul>
  </div>
  <div class="lang-content" lang="sa">
    <ul>
      {% for bullet in content.publications.bullets %}
        <li>{{ bullet.sa | markdownify }}</li>
      {% endfor %}
    </ul>
  </div>
</div>

<div class="lang-block">
  <h3 class="lang-content" lang="en">{{ content.leadership.title.en }}</h3>
  <h3 class="lang-content" lang="sa">{{ content.leadership.title.sa }}</h3>
</div>

<div class="lang-block">
  <div class="lang-content" lang="en">
    {{ content.leadership.p1.en | markdownify }}
    {{ content.leadership.p2.en | markdownify }}
  </div>
  <div class="lang-content" lang="sa">
    {{ content.leadership.p1.sa | markdownify }}
    {{ content.leadership.p2.sa | markdownify }}
  </div>
</div>

<div class="lang-block">
  <h3 class="lang-content" lang="en">{{ content.contact.title.en }}</h3>
  <h3 class="lang-content" lang="sa">{{ content.contact.title.sa }}</h3>
</div>

<div class="lang-block">
  <div class="lang-content" lang="en">
    <p><strong>{{ content.contact.description.en }}</strong></p>
    <p><strong>{{ content.contact.address_title.en }}</strong><br>
    {{ content.contact.address.en | markdownify }}</p>
    <p><strong>{{ content.contact.contact_title.en }}</strong><br>
    {{ content.contact.phone.en }}<br>
    {{ content.contact.email.en | markdownify }}</p>
  </div>
  <div class="lang-content" lang="sa">
    <p><strong>{{ content.contact.description.sa }}</strong></p>
    <p><strong>{{ content.contact.address_title.sa }}</strong><br>
    {{ content.contact.address.sa | markdownify }}</p>
    <p><strong>{{ content.contact.contact_title.sa }}</strong><br>
    {{ content.contact.phone.sa }}<br>
    {{ content.contact.email.sa | markdownify }}</p>
  </div>
</div>
