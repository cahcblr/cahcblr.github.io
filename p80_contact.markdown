---
layout: page
title: Contact
permalink: /contact/
---
{% assign content = site.data.pages.contact %}

<div class="lang-block">
  <h2 class="lang-content" lang="en">{{ content.heading.en }}</h2>
  <h2 class="lang-content" lang="sa">{{ content.heading.sa }}</h2>
</div>

<div class="lang-block">
  <h3 class="lang-content" lang="en">{{ content.mailing_address_title.en }}</h3>
  <h3 class="lang-content" lang="sa">{{ content.mailing_address_title.sa }}</h3>
</div>

<p>
  <strong>
    <span class="lang-block">
      <span class="lang-content" lang="en">{{ content.cahc.en }}</span>
      <span class="lang-content" lang="sa">{{ content.cahc.sa }}</span>
    </span>
  </strong><br>
  <span class="lang-block">
    <span class="lang-content" lang="en">{{ content.ju.en }}</span>
    <span class="lang-content" lang="sa">{{ content.ju.sa }}</span>
  </span><br>
  <span class="lang-block">
    <span class="lang-content" lang="en">{{ content.address_lines.en | markdownify }}</span>
    <span class="lang-content" lang="sa">{{ content.address_lines.sa | markdownify }}</span>
  </span>
</p>

<div class="lang-block">
  <h3 class="lang-content" lang="en">{{ content.contact_info_title.en }}</h3>
  <h3 class="lang-content" lang="sa">{{ content.contact_info_title.sa }}</h3>
</div>

<p>
  <strong>
    <span class="lang-block">
      <span class="lang-content" lang="en">{{ content.phone_label.en }}</span>
      <span class="lang-content" lang="sa">{{ content.phone_label.sa }}</span>
    </span>
  </strong> +91 80 43430400 extn 237<br>
  <strong>
    <span class="lang-block">
      <span class="lang-content" lang="en">{{ content.email_label.en }}</span>
      <span class="lang-content" lang="sa">{{ content.email_label.sa }}</span>
    </span>
  </strong> <a href="mailto:{{ site.email }}">{{ site.email }}</a><br>
  <strong>
    <span class="lang-block">
      <span class="lang-content" lang="en">{{ content.website_label.en }}</span>
      <span class="lang-content" lang="sa">{{ content.website_label.sa }}</span>
    </span>
  </strong> <a href="{{ '/' | relative_url }}">{{ site.url | default: 'https://cahc.jainuniversity.ac.in' }}</a>
</p>

<div class="lang-block">
  <h3 class="lang-content" lang="en">{{ content.research_inquiries_title.en }}</h3>
  <h3 class="lang-content" lang="sa">{{ content.research_inquiries_title.sa }}</h3>
</div>

<div class="lang-block">
  <div class="lang-content" lang="en">{{ content.research_inquiries_desc.en | markdownify }}</div>
  <div class="lang-content" lang="sa">{{ content.research_inquiries_desc.sa | markdownify }}</div>
</div>

<div class="lang-block">
  <h3 class="lang-content" lang="en">{{ content.visiting_title.en }}</h3>
  <h3 class="lang-content" lang="sa">{{ content.visiting_title.sa }}</h3>
</div>

<div class="lang-block">
  <div class="lang-content" lang="en">{{ content.visiting_desc.en | markdownify }}</div>
  <div class="lang-content" lang="sa">{{ content.visiting_desc.sa | markdownify }}</div>
</div>

<div class="lang-block">
  <h3 class="lang-content" lang="en">{{ content.map_title.en }}</h3>
  <h3 class="lang-content" lang="sa">{{ content.map_title.sa }}</h3>
</div>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.070465845399!2d77.58319381541126!3d12.90319041986555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b2ba1ead9f%3A0x402ad60315e285b9!2sCenter%20for%20Ancient%20History%20%26%20Culture%20(CAHC)!5e0!3m2!1sen!2sin!4v1632371936850!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
