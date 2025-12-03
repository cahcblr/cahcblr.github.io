---
layout: page
title: People
permalink: /people/
---

<style>
  .people-section { margin-bottom: 4rem; }
  .section-title { 
    font-size: 1.8rem; 
    border-bottom: 2px solid #eee; 
    padding-bottom: 0.5rem; 
    margin-bottom: 2rem; 
    color: #333;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  /* Unified Grid Layout */
  .people-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2.5rem;
    align-items: start; /* Ensures cards align at top and grow naturally */
  }
  
  .person-card {
    background: #fff;
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%; /* Makes cards in same row equal height if needed, but align-items: start allows natural height */
  }
  
  .person-card:hover { 
    transform: translateY(-5px); 
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
    border-color: #ddd;
  }
  
  .person-header {
    padding: 2rem 1.5rem;
    text-align: center;
    background: linear-gradient(to bottom, #f9f9f9, #fff);
    border-bottom: 1px solid #f0f0f0;
  }
  
  .person-avatar {
    width: 150px;
    height: 150px;
    margin: 0 auto 1.2rem;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #fff;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .person-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.5s;
  }
  
  .person-card:hover .person-avatar img {
    transform: scale(1.05);
  }
  
  .person-name { 
    margin: 0; 
    font-size: 1.4rem; 
    color: #2c3e50; 
    font-weight: 600;
  }
  
  .person-role { 
    color: #7f8c8d; 
    font-size: 1rem; 
    margin-top: 0.5rem; 
    font-weight: 500;
    line-height: 1.4;
  }
  
  .person-bio { 
    padding: 1.5rem; 
    font-size: 1rem; 
    color: #555; 
    line-height: 1.6; 
  }
</style>

<div class="people-section">
  <!-- <h2 class="section-title">Our People</h2> -->
  <div class="people-grid">
    {% for person in site.data.people %}
      <div class="person-card">
        <div class="person-header">
          <div class="person-avatar">
            <img src="{{ person.image | relative_url }}" alt="{{ person.name }}">
          </div>
          <h3 class="person-name">{{ person.name }}</h3>
          <div class="person-role">{{ person.role }}</div>
        </div>
        <div class="person-bio">
          {{ person.bio | markdownify }}
        </div>
      </div>
    {% endfor %}
  </div>
</div>
