---
layout: page
title: Labs
permalink: /labs/
---

<style>
  .labs-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 4rem;
  }
  @media (max-width: 768px) {
    .labs-container {
      grid-template-columns: 1fr;
    }
  }

  .lab-card {
    background: #fff;
    border: 1px solid #e1e4e8;
    border-radius: 8px;
    padding: 0.2rem 1.2rem 1rem 1.2rem; /* Ultra aggressive top cut */
    box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    scroll-margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  /* Subtle theme colors for each lab */
  .lab-card:nth-child(1) { background-color: #f4f8fc; border-color: #d1e1f0; } /* Soft Blue - Jyotisha */
  .lab-card:nth-child(2) { background-color: #fcf4f6; border-color: #f0d1dc; } /* Soft Rose - Vagartha */
  .lab-card:nth-child(3) { background-color: #fbfaf0; border-color: #ede7c5; } /* Soft Sand - Meru */
  .lab-card:nth-child(4) { background-color: #f2fbf6; border-color: #c9ebd8; } /* Soft Mint - Kaavya */
  .lab-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  }
  
  .lab-title {
    margin-top: 0 !important; /* overrides .post-content h2 base theme */
    margin-bottom: 0.2rem !important;
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.2;
    font-weight: 600;
  }
  .lab-subtitle {
    display: block;
    color: #4a5568;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
  }
  .lab-description {
    color: #4a5568;
    line-height: 1.4;
    margin-bottom: 0rem;
    font-size: 0.9rem;
    flex-grow: 1;
  }
  
  .lab-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    padding-top: 0.75rem;
    border-top: 1px solid #edf2f7;
  }

  /* Avatar Stack */
  .lab-authors-cluster {
    display: flex;
    align-items: center;
  }
  .lab-authors-cluster img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #fff;
    margin-left: -10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    background-color: #f7fafc;
    transition: transform 0.2s ease;
  }
  .lab-authors-cluster img:first-child {
    margin-left: 0;
  }
  .lab-authors-cluster img:hover {
    transform: scale(1.2);
    z-index: 10;
    position: relative;
  }

  .btn-lab {
    display: inline-flex;
    align-items: center;
    padding: 0.4rem 0.8rem;
    background-color: #3182ce;
    color: #ffffff !important;
    text-decoration: none;
    border-radius: 4px;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.2s ease;
  }
  .btn-lab:hover {
    background-color: #2b6cb0;
  }

  /* Hero Rail (Text Pills) - Mobile Only */
  .labs-hero-rail {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex;
    gap: 8px;
    padding: 10px 20px;
    margin: 0 -20px 1.5rem -20px;
    border-bottom: 1px solid #e1e4e8;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
  }
  @media (min-width: 768px) {
    .labs-hero-rail {
      display: none;
    }
  }
  .hero-rail-item {
    flex-shrink: 0;
    padding: 0.4rem 0.8rem;
    background: #f7fafc;
    color: #4a5568;
    border: 1px solid #e2e8f0;
    border-radius: 50px;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.2s ease;
    scroll-snap-align: center;
    white-space: nowrap;
  }
  .hero-rail-item:hover, .hero-rail-item.active {
    background: #3182ce;
    color: #fff;
    border-color: #3182ce;
  }
</style>

<nav class="labs-hero-rail">
  {% for lab in site.data.labs %}
    <a href="#{{ lab.title | slugify }}" class="hero-rail-item" title="{{ lab.title }}">
      {{ lab.title }}
    </a>
  {% endfor %}
</nav>

<div class="labs-container">
  {% for lab in site.data.labs %}
    <div id="{{ lab.title | slugify }}" class="lab-card">
      <div>
        <h2 class="lab-title">{{ lab.title }}</h2>
        <span class="lab-subtitle">{{ lab.subtitle }}</span>
        <div class="lab-description">
          {{ lab.description }}
        </div>
      </div>
      
      <div class="lab-footer">
        <div class="lab-authors-cluster">
          {% for author in lab.authors %}
            <img src="{{ author.image | relative_url }}" alt="{{ author.name }}" title="{{ author.name }}" style="object-position: {{ author.image_position | default: 'top' }};">
          {% endfor %}
        </div>
        <a href="{{ lab.url }}" class="btn-lab" target="_blank" rel="noopener noreferrer">
          Launch ↗
        </a>
      </div>
    </div>
  {% endfor %}
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.lab-card');
  const railItems = document.querySelectorAll('.hero-rail-item');
  const rail = document.querySelector('.labs-hero-rail');
  
  const observerOptions = {
    root: null,
    rootMargin: '-80px 0px -60% 0px',
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
