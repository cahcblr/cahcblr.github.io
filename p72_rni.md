---
layout: page
title: People
permalink: /people/
---

<style>
  .people-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 4rem;
  }
  .person-card {
    background: #fff;
    border: 1px solid #e1e4e8;
    border-radius: 12px;
    padding: 2.5rem;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    scroll-margin-top: 90px;
  }
  .person-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.12);
  }
  
  .person-image-float {
    float: left;
    margin-right: 2.5rem;
    margin-bottom: 1.5rem;
    max-width: 200px;
    width: 100%;
    text-align: center;
  }
  .person-image-float img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: top;
  }

  @media (min-width: 768px) {
    .person-image-float {
      width: auto;
      max-width: 180px;
    }
  }

  .person-name {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #1a202c;
    font-size: 1.75rem;
    line-height: 1.3;
    font-weight: 700;
  }
  .person-role {
    display: block;
    color: #4a5568;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  .person-bio {
    color: #2d3748;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-size: 1.05rem;
  }
  .person-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1.5rem;
    clear: both;
  }

  .btn-person {
    display: inline-flex;
    align-items: center;
    padding: 0.6rem 1.2rem;
    background-color: transparent;
    color: #4a5568 !important;
    text-decoration: none;
    border-radius: 6px;
    font-size: 0.95rem;
    font-weight: 600;
    border: 1px solid #cbd5e0;
    transition: all 0.2s ease;
  }
  .btn-person:hover {
    background-color: #f7fafc;
    border-color: #a0aec0;
    color: #1a202c !important;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }
  .btn-person.primary {
    background-color: #e8f5e9;
    color: #1b5e20 !important;
    border-color: #c8e6c9;
  }
  .btn-person.primary:hover {
    background-color: #c8e6c9;
  }

  /* Hero Rail (Floating Mini-Nav) */
  .people-hero-rail {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex;
    gap: 16px;
    padding: 10px 20px;
    margin: 0 -20px 2rem -20px;
    border-bottom: 1px solid #e1e4e8;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
  .hero-rail-item {
    flex-shrink: 0;
    transition: all 0.3s ease;
    scroll-snap-align: center;
    opacity: 0.6;
    filter: grayscale(40%);
  }
  .hero-rail-item:hover, .hero-rail-item.active {
    transform: scale(1.15);
    opacity: 1;
    filter: grayscale(0%);
  }
  .hero-rail-item img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.15);
  }
  .hero-rail-item.active img {
    border: 2px solid #3182ce;
    padding: 2px;
  }
  
  .group-header {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: #2d3748;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 0.5rem;
  }
</style>

<nav class="people-hero-rail">
  {% for person in site.data.people %}
    <a href="#{{ person.name.en | slugify }}" class="hero-rail-item" title="{{ person.name.en }}">
      <img src="{{ person.image | relative_url }}" alt="{{ person.name.en }}" style="object-position: {{ person.image_position | default: 'top' }};">
    </a>
  {% endfor %}
</nav>

<div class="people-container">
  {% assign leadership = site.data.people | where: "group", "leadership" %}
  {% assign team = site.data.people | where: "group", "team" %}

  <h2 class="group-header">
    <span class="lang-block">
      <span class="lang-content" lang="en">Leadership</span>
      <span class="lang-content" lang="sa">नेतृत्ववर्गः</span>
    </span>
  </h2>
  {% for person in leadership %}
    <div id="{{ person.name.en | slugify }}" class="person-card">
      <div class="person-image-float">
        <img src="{{ person.image | relative_url }}" alt="{{ person.name.en }}" style="object-position: {{ person.image_position | default: 'top' }};">
      </div>
      
      <h2 class="person-name">
        <span class="lang-block">
          <span class="lang-content" lang="en">{{ person.name.en }}</span>
          <span class="lang-content" lang="sa">{{ person.name.sa }}</span>
        </span>
      </h2>
      <span class="person-role">
        <span class="lang-block">
          <span class="lang-content" lang="en">{{ person.role.en }}</span>
          <span class="lang-content" lang="sa">{{ person.role.sa }}</span>
        </span>
      </span>
      
      <div class="person-bio">
        <div class="lang-block">
          <div class="lang-content" lang="en">{{ person.bio.en | markdownify }}</div>
          <div class="lang-content" lang="sa">{{ person.bio.sa | markdownify }}</div>
        </div>
      </div>
      
      {% if person.links %}
        <div class="person-actions">
          {% for link in person.links %}
            <a href="{{ link.url }}" class="btn-person {% if link.is_primary %}primary{% endif %}" target="_blank" rel="noopener noreferrer">
              <span class="lang-block">
                <span class="lang-content" lang="en">{{ link.text.en }}</span>
                <span class="lang-content" lang="sa">{{ link.text.sa }}</span>
              </span>
            </a>
          {% endfor %}
        </div>
      {% endif %}
    </div>
  {% endfor %}

  <h2 class="group-header">
    <span class="lang-block">
      <span class="lang-content" lang="en">Team</span>
      <span class="lang-content" lang="sa">शोधकर्तारः</span>
    </span>
  </h2>
  {% for person in team %}
    <div id="{{ person.name.en | slugify }}" class="person-card">
      <div class="person-image-float">
        <img src="{{ person.image | relative_url }}" alt="{{ person.name.en }}" style="object-position: {{ person.image_position | default: 'top' }};">
      </div>
      
      <h2 class="person-name">
        <span class="lang-block">
          <span class="lang-content" lang="en">{{ person.name.en }}</span>
          <span class="lang-content" lang="sa">{{ person.name.sa }}</span>
        </span>
      </h2>
      <span class="person-role">
        <span class="lang-block">
          <span class="lang-content" lang="en">{{ person.role.en }}</span>
          <span class="lang-content" lang="sa">{{ person.role.sa }}</span>
        </span>
      </span>
      
      <div class="person-bio">
        <div class="lang-block">
          <div class="lang-content" lang="en">{{ person.bio.en | markdownify }}</div>
          <div class="lang-content" lang="sa">{{ person.bio.sa | markdownify }}</div>
        </div>
      </div>
      
      {% if person.links %}
        <div class="person-actions">
          {% for link in person.links %}
            <a href="{{ link.url }}" class="btn-person {% if link.is_primary %}primary{% endif %}" target="_blank" rel="noopener noreferrer">
              <span class="lang-block">
                <span class="lang-content" lang="en">{{ link.text.en }}</span>
                <span class="lang-content" lang="sa">{{ link.text.sa }}</span>
              </span>
            </a>
          {% endfor %}
        </div>
      {% endif %}
    </div>
  {% endfor %}
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.person-card');
  const railItems = document.querySelectorAll('.hero-rail-item');
  const rail = document.querySelector('.people-hero-rail');
  
  const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        railItems.forEach(item => item.classList.remove('active'));
        const activeItem = document.querySelector(`.hero-rail-item[href="#${id}"]`);
        
        if (activeItem) {
          activeItem.classList.add('active');
          const scrollLeft = activeItem.offsetLeft - (rail.clientWidth / 2) + (activeItem.clientWidth / 2);
          rail.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
      }
    });
  }, observerOptions);

  cards.forEach(card => observer.observe(card));
});
</script>
