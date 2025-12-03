---
layout: page
title: Books
permalink: /books/
---


<style>
  .books-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 4rem;
  }
  .book-card {
    background: #fff;
    border: 1px solid #e1e4e8;
    border-radius: 12px;
    padding: 2.5rem;
    overflow: hidden; /* Clears floats */
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .book-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.12);
  }
  
  /* Float Layout for Image */
  .book-cover-float {
    float: left;
    margin-right: 2.5rem;
    margin-bottom: 1.5rem;
    max-width: 100%;
    width: 100%; /* Full width on mobile */
    text-align: center;
  }
  .book-cover-float img {
    max-width: 100%;
    height: auto;
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
    border-radius: 4px;
    max-height: 400px; /* Increased max-height */
  }

  @media (min-width: 768px) {
    .book-cover-float {
      width: auto; /* Natural width on desktop */
      max-width: 320px; /* Limit width to prevent taking over */
    }
  }

  .book-title {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #1a202c;
    font-size: 1.75rem;
    line-height: 1.3;
    font-weight: 700;
    clear: none;
  }
  .book-subtitle {
    display: block;
    color: #4a5568;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  .book-author {
    color: #d35400; /* Darker orange for better contrast */
    font-weight: 600;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
  .book-description {
    color: #2d3748;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-size: 1.05rem;
  }
  .book-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1.5rem;
    clear: both; /* Ensure buttons are below everything if needed */
  }

  .btn-book {
    display: inline-flex;
    align-items: center;
    padding: 0.6rem 1.2rem;
    background-color: #e8f5e9; /* Pale Green */
    color: #1b5e20 !important; /* Dark Green */
    text-decoration: none;
    border-radius: 50px; /* Pill shape for Buy */
    font-size: 0.95rem;
    font-weight: 700;
    transition: all 0.2s ease;
    border: 1px solid #c8e6c9;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }
  .btn-book:hover {
    background-color: #c8e6c9;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.08);
    color: #1b5e20 !important;
  }
  
  .btn-book.secondary {
    background-color: transparent;
    color: #4a5568 !important;
    border: 1px solid #cbd5e0;
    border-radius: 6px; /* Square-ish for Info */
    box-shadow: none;
    font-weight: 600;
  }
  .btn-book.secondary:hover {
    background-color: #f7fafc;
    border-color: #a0aec0;
    color: #1a202c !important;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }
</style>

<div class="books-container">
  {% for book in site.data.books %}
    <div class="book-card">
      <div class="book-cover-float">
        <img src="{{ book.cover_image | relative_url }}" alt="{{ book.title }} Cover">
      </div>
      
      <h2 class="book-title">{{ book.title }}</h2>
      {% if book.subtitle %}
        <span class="book-subtitle">{{ book.subtitle }}</span>
      {% endif %}
      {% if book.author %}
        <div class="book-author">{{ book.author }}</div>
      {% endif %}
      
      <div class="book-description">
        {{ book.description | markdownify }}
      </div>
      
      {% if book.links %}
        <div class="book-actions">
          {% for link in book.links %}
            <a href="{{ link.url }}" class="btn-book {% if link.is_buy != true %}secondary{% endif %}" target="_blank" rel="noopener noreferrer">
              {% if link.is_buy %}
                <span style="margin-right: 0.5rem; font-size: 1.1rem;">🛒</span>
                {{ link.text }}
              {% else %}
                {{ link.text }}
              {% endif %}
            </a>
          {% endfor %}
        </div>
      {% endif %}
    </div>
  {% endfor %}
</div>