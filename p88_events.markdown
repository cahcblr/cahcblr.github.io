---
layout: page
title: Events
permalink: /events/
redirect_from:
  - /workshops/
---

<style>
  .events-tab-container {
    display: flex;
    justify-content: center;
    margin: 1rem 0 1.5rem 0;
  }
  .events-pill-switcher {
    display: flex;
    background: #f1f5f9;
    padding: 3px;
    border-radius: 9999px;
    border: 1px solid #e2e8f0;
  }
  .switcher-btn {
    background: transparent;
    border: none;
    padding: 6px 16px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #475569;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s ease;
    outline: none;
  }
  .switcher-btn:hover {
    color: #0f172a;
  }
  .switcher-btn.active {
    background: #ffffff;
    color: #0f172a;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  }

  .events-section {
    display: none;
  }
  .events-section.active {
    display: block;
  }

  /* Grid and Card Layout (Sober & Tight) */
  .events-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .event-card {
    border-radius: 8px;
    padding: 12px 16px;
    border: 1px solid #edf2f7;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .event-card:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
  }

  /* Subtle background tints for variety */
  .event-card.c-blue { background-color: #f4f8fc; border-color: #d1e1f0; }
  .event-card.c-sand { background-color: #fbfaf0; border-color: #ede7c5; }
  .event-card.c-mint { background-color: #f2fbf6; border-color: #c9ebd8; }
  .event-card.c-grey { background-color: #f8fafc; border-color: #e2e8f0; }

  .event-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #718096;
    margin-bottom: 2px;
  }
  .event-title {
    margin: 0 0 4px 0 !important;
    font-size: 1.1rem;
    font-weight: 700;
    color: #1a202c;
    line-height: 1.25;
  }
  .event-speaker {
    font-size: 0.8rem;
    font-style: italic;
    color: #4a5568;
    margin: 0 0 6px 0;
  }
  .event-description {
    font-size: 0.88rem;
    color: #4a5568;
    line-height: 1.4;
    margin: 0 0 10px 0;
  }

  /* Card Pills / Buttons */
  .event-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .pill-btn {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 9999px;
    text-decoration: none !important;
    transition: all 0.2s ease;
    border: 1px solid transparent;
  }
  .pill-btn.primary-btn {
    background-color: #ebf8ff;
    color: #2b6cb0 !important;
    border-color: #bee3f8;
  }
  .pill-btn.primary-btn:hover {
    background-color: #2b6cb0;
    color: #ffffff !important;
    border-color: #2b6cb0;
  }
  .pill-btn.secondary-btn {
    background-color: #f7fafc;
    color: #4a5568 !important;
    border-color: #cbd5e0;
  }
  .pill-btn.secondary-btn:hover {
    background-color: #4a5568;
    color: #ffffff !important;
    border-color: #4a5568;
  }
  .pill-btn.yellow-btn {
    background-color: #fefcbf;
    color: #b7791f !important;
    border-color: #fef08a;
  }
  .pill-btn.yellow-btn:hover {
    background-color: #b7791f;
    color: #ffffff !important;
    border-color: #b7791f;
  }
  .pill-btn.green-btn {
    background-color: #f0fff4;
    color: #2f855a !important;
    border-color: #c6f6d5;
  }
  .pill-btn.green-btn:hover {
    background-color: #2f855a;
    color: #ffffff !important;
    border-color: #2f855a;
  }

  .event-videos {
    border-top: 1px dashed #e2e8f0;
    padding-top: 6px;
    margin-top: 8px;
  }
  .videos-label {
    font-size: 0.7rem;
    font-weight: bold;
    color: #718096;
    text-transform: uppercase;
    display: block;
    margin-bottom: 3px;
  }
  .video-links {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  .video-pill {
    font-size: 0.7rem;
    color: #4a5568 !important;
    background-color: #edf2f7;
    padding: 2px 6px;
    border-radius: 9999px;
    text-decoration: none !important;
    border: 1px solid #cbd5e0;
    transition: all 0.2s ease;
  }
  .video-pill:hover {
    background-color: #cbd5e0;
    color: #1a202c !important;
  }
</style>

<div class="events-tab-container">
  <div class="events-pill-switcher">
    <button id="tab-workshops" class="switcher-btn active" onclick="switchEventsTab('workshops')">Workshops & Meetings</button>
    <button id="tab-talks" class="switcher-btn" onclick="switchEventsTab('talks')">Talks & Presentations</button>
  </div>
</div>

<!-- Section: Workshops & Meetings -->
<div id="section-workshops" class="events-section active">
  <p>The Center for Ancient History and Culture (CAHC) hosts academic workshops, discussion meetings, and seminars bringing together traditional scholars, modern researchers, and scientists to explore ancient Indian scientific traditions.</p>
  
  <div class="events-grid">
    <!-- Workshop 1 -->
    <div class="event-card c-blue">
      <div class="event-header">
        <span>March 23–27, 2026</span>
        <span>National Workshop</span>
      </div>
      <h3 class="event-title">National Workshop on Indian Astronomy Before Common Era (IABCE)</h3>
      <p class="event-speaker">Supported by IKS Division, Ministry of Education, Govt. of India</p>
      <p class="event-description">A week-long national workshop bringing together scholars of astronomy, mathematics, Sanskrit, and history to explore India's pre-Common-Era scientific heritage. Features recorded lectures, outlines, and discussion sessions.</p>
      <div class="event-actions">
        <a href="{{ '/iabce-workshop/' | relative_url }}" class="pill-btn primary-btn">Materials & Videos &rarr;</a>
      </div>
    </div>

    <!-- Workshop 2 -->
    <div class="event-card c-sand">
      <div class="event-header">
        <span>December 5–6, 2023</span>
        <span>Discussion Meeting</span>
      </div>
      <h3 class="event-title">Interdisciplinary Discussion Meeting on Indian Astronomy Before Common Era</h3>
      <p class="event-speaker">Co-organized with IKS Division, MoE, Govt. of India</p>
      <p class="event-description">A two-day panel discussion featuring eminent scholars representing Vedic, Sanskrit, and modern scientific institutions across India and Nepal. Includes session outlines, panelist details, and published research papers.</p>
      <div class="event-actions">
        <a href="{{ '/discussion-meeting-2023/' | relative_url }}" class="pill-btn primary-btn">Details & Materials &rarr;</a>
      </div>
    </div>
  </div>
</div>

<!-- Section: Talks & Presentations -->
<div id="section-talks" class="events-section">
  <p>Academic lectures, presentations, and interactive tutorials delivered by CAHC researchers and collaborators on ancient Indian sciences, astronomy, and chronology.</p>

  <div class="events-grid">
    {% for talk in site.data.talks %}
      <div class="event-card {% cycle 'c-blue', 'c-sand', 'c-mint', 'c-grey' %}">
        <div class="event-header">
          <span>{{ talk.date | date: "%B %d, %Y" }}</span>
          <span>{{ talk.venue }}</span>
        </div>
        <h3 class="event-title">{{ talk.title }}</h3>
        <p class="event-speaker">Presented by: {{ talk.speaker }}</p>
        <p class="event-description">{{ talk.description }}</p>
        
        <div class="event-actions">
          {% if talk.html_slides %}
            <a href="{{ talk.html_slides | relative_url }}" class="pill-btn primary-btn" target="_blank">
              {% if talk.html_slides_2 %}Session 1 Slides ↗{% else %}Slides ↗{% endif %}
            </a>
          {% endif %}
          {% if talk.html_slides_2 %}
            <a href="{{ talk.html_slides_2 | relative_url }}" class="pill-btn primary-btn" target="_blank">Session 2 Slides ↗</a>
          {% endif %}
          {% if talk.pdf %}
            <a href="{{ talk.pdf | relative_url }}" class="pill-btn secondary-btn" target="_blank">
              {% if talk.pdf_label %}{{ talk.pdf_label }}{% else %}PDF ↓{% endif %}
            </a>
          {% endif %}
          {% if talk.pdf_2 %}
            <a href="{{ talk.pdf_2 | relative_url }}" class="pill-btn secondary-btn" target="_blank">
              {% if talk.pdf_2_label %}{{ talk.pdf_2_label }}{% else %}PDF 2 ↓{% endif %}
            </a>
          {% endif %}
          {% if talk.pdf_3 %}
            <a href="{{ talk.pdf_3 | relative_url }}" class="pill-btn secondary-btn" target="_blank">
              {{ talk.pdf_3_label }} ↓
            </a>
          {% endif %}
          {% if talk.pdf_4 %}
            <a href="{{ talk.pdf_4 | relative_url }}" class="pill-btn secondary-btn" target="_blank">
              {{ talk.pdf_4_label }} ↓
            </a>
          {% endif %}
          {% if talk.pdf_5 %}
            <a href="{{ talk.pdf_5 | relative_url }}" class="pill-btn secondary-btn" target="_blank">
              {{ talk.pdf_5_label }} ↓
            </a>
          {% endif %}
          {% if talk.quiz_url %}
            <a href="{{ talk.quiz_url | relative_url }}" class="pill-btn yellow-btn" target="_blank">Quiz 📝</a>
          {% endif %}
          {% if talk.gif_demo %}
            <a href="{{ talk.gif_demo | relative_url }}" class="pill-btn green-btn" target="_blank">Demo GIF 🎬</a>
          {% endif %}
        </div>
        
        {% if talk.videos %}
          <div class="event-videos">
            <span class="videos-label">Demonstration Videos:</span>
            <div class="video-links">
              {% for video in talk.videos %}
                <a href="{{ video.url | relative_url }}" class="video-pill" target="_blank">🎬 {{ video.name }}</a>
              {% endfor %}
            </div>
          </div>
        {% endif %}
      </div>
    {% endfor %}
  </div>
</div>

<script>
  function switchEventsTab(tabName) {
    // Hide all sections
    document.querySelectorAll('.events-section').forEach(sec => {
      sec.classList.remove('active');
    });
    // Deactivate all buttons
    document.querySelectorAll('.switcher-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    // Show selected section & activate button
    const activeSection = document.getElementById('section-' + tabName);
    const activeButton = document.getElementById('tab-' + tabName);
    
    if (activeSection && activeButton) {
      activeSection.classList.add('active');
      activeButton.classList.add('active');
    }
    
    // Save state to localStorage to persist across navigation
    localStorage.setItem('activeEventsTab', tabName);
  }

  // Restore active tab on load
  document.addEventListener("DOMContentLoaded", function() {
    const savedTab = localStorage.getItem('activeEventsTab');
    if (savedTab === 'talks') {
      switchEventsTab('talks');
    } else {
      switchEventsTab('workshops');
    }
  });
</script>
