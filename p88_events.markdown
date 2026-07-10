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

{% assign content = site.data.pages.events %}

<div class="events-tab-container">
  <div class="events-pill-switcher">
    <button id="tab-workshops" class="switcher-btn active" onclick="switchEventsTab('workshops')">
      <span class="lang-block">
        <span class="lang-content" lang="en">{{ content.tab_workshops.en }}</span>
        <span class="lang-content" lang="sa">{{ content.tab_workshops.sa }}</span>
      </span>
    </button>
    <button id="tab-talks" class="switcher-btn" onclick="switchEventsTab('talks')">
      <span class="lang-block">
        <span class="lang-content" lang="en">{{ content.tab_talks.en }}</span>
        <span class="lang-content" lang="sa">{{ content.tab_talks.sa }}</span>
      </span>
    </button>
  </div>
</div>

<!-- Section: Workshops & Meetings -->
<div id="section-workshops" class="events-section active">
  <div class="lang-block">
    <p class="lang-content" lang="en">{{ content.workshops_intro.en }}</p>
    <p class="lang-content" lang="sa">{{ content.workshops_intro.sa }}</p>
  </div>
  
  <div class="events-grid">
    <!-- Workshop 1 -->
    <div class="event-card c-blue">
      <div class="event-header">
        <span class="lang-block">
          <span class="lang-content" lang="en">{{ content.w1_date.en }}</span>
          <span class="lang-content" lang="sa">{{ content.w1_date.sa }}</span>
        </span>
        <span class="lang-block">
          <span class="lang-content" lang="en">{{ content.w1_type.en }}</span>
          <span class="lang-content" lang="sa">{{ content.w1_type.sa }}</span>
        </span>
      </div>
      <h3 class="event-title">
        <span class="lang-block">
          <span class="lang-content" lang="en">{{ content.w1_title.en }}</span>
          <span class="lang-content" lang="sa">{{ content.w1_title.sa }}</span>
        </span>
      </h3>
      <p class="event-speaker">
        <span class="lang-block">
          <span class="lang-content" lang="en">{{ content.w1_speaker.en }}</span>
          <span class="lang-content" lang="sa">{{ content.w1_speaker.sa }}</span>
        </span>
      </p>
      <div class="event-description">
        <div class="lang-block">
          <div class="lang-content" lang="en">{{ content.w1_desc.en | markdownify }}</div>
          <div class="lang-content" lang="sa">{{ content.w1_desc.sa | markdownify }}</div>
        </div>
      </div>
      <div class="event-actions">
        <a href="{{ '/iabce-workshop/' | relative_url }}" class="pill-btn primary-btn">
          <span class="lang-block">
            <span class="lang-content" lang="en">{{ content.w1_btn.en }}</span>
            <span class="lang-content" lang="sa">{{ content.w1_btn.sa }}</span>
          </span>
        </a>
      </div>
    </div>

    <!-- Workshop 2 -->
    <div class="event-card c-sand">
      <div class="event-header">
        <span class="lang-block">
          <span class="lang-content" lang="en">{{ content.w2_date.en }}</span>
          <span class="lang-content" lang="sa">{{ content.w2_date.sa }}</span>
        </span>
        <span class="lang-block">
          <span class="lang-content" lang="en">{{ content.w2_type.en }}</span>
          <span class="lang-content" lang="sa">{{ content.w2_type.sa }}</span>
        </span>
      </div>
      <h3 class="event-title">
        <span class="lang-block">
          <span class="lang-content" lang="en">{{ content.w2_title.en }}</span>
          <span class="lang-content" lang="sa">{{ content.w2_title.sa }}</span>
        </span>
      </h3>
      <p class="event-speaker">
        <span class="lang-block">
          <span class="lang-content" lang="en">{{ content.w2_speaker.en }}</span>
          <span class="lang-content" lang="sa">{{ content.w2_speaker.sa }}</span>
        </span>
      </p>
      <div class="event-description">
        <div class="lang-block">
          <div class="lang-content" lang="en">{{ content.w2_desc.en | markdownify }}</div>
          <div class="lang-content" lang="sa">{{ content.w2_desc.sa | markdownify }}</div>
        </div>
      </div>
      <div class="event-actions">
        <a href="{{ '/discussion-meeting-2023/' | relative_url }}" class="pill-btn primary-btn">
          <span class="lang-block">
            <span class="lang-content" lang="en">{{ content.w2_btn.en }}</span>
            <span class="lang-content" lang="sa">{{ content.w2_btn.sa }}</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Section: Talks & Presentations -->
<div id="section-talks" class="events-section">
  <div class="lang-block">
    <p class="lang-content" lang="en">{{ content.talks_intro.en }}</p>
    <p class="lang-content" lang="sa">{{ content.talks_intro.sa }}</p>
  </div>

  <div class="events-grid">
    {% for talk in site.data.talks %}
      <div class="event-card {% cycle 'c-blue', 'c-sand', 'c-mint', 'c-grey' %}">
        <div class="event-header">
          <span>{{ talk.date | date: "%B %d, %Y" }}</span>
          <span class="lang-block">
            <span class="lang-content" lang="en">{{ talk.venue.en }}</span>
            <span class="lang-content" lang="sa">{{ talk.venue.sa }}</span>
          </span>
        </div>
        <h3 class="event-title">
          <span class="lang-block">
            <span class="lang-content" lang="en">{{ talk.title.en }}</span>
            <span class="lang-content" lang="sa">{{ talk.title.sa }}</span>
          </span>
        </h3>
        <p class="event-speaker">
          <span class="lang-block">
            <span class="lang-content" lang="en">Presented by: {{ talk.speaker.en }}</span>
            <span class="lang-content" lang="sa">उपस्थापकः: {{ talk.speaker.sa }}</span>
          </span>
        </p>
        <div class="event-description">
          <div class="lang-block">
            <div class="lang-content" lang="en">{{ talk.description.en }}</div>
            <div class="lang-content" lang="sa">{{ talk.description.sa }}</div>
          </div>
        </div>
        
        <div class="event-actions">
          {% if talk.html_slides %}
            <a href="{{ talk.html_slides | relative_url }}" class="pill-btn primary-btn" target="_blank">
              <span class="lang-block">
                <span class="lang-content" lang="en">{% if talk.html_slides_2 %}Session 1 Slides ↗{% else %}Slides ↗{% endif %}</span>
                <span class="lang-content" lang="sa">{% if talk.html_slides_2 %}प्रथमसत्रस्य उपस्थापनालेखाः ↗{% else %}उपस्थापनालेखाः ↗{% endif %}</span>
              </span>
            </a>
          {% endif %}
          {% if talk.html_slides_2 %}
            <a href="{{ talk.html_slides_2 | relative_url }}" class="pill-btn primary-btn" target="_blank">
              <span class="lang-block">
                <span class="lang-content" lang="en">Session 2 Slides ↗</span>
                <span class="lang-content" lang="sa">द्वितीयसत्रस्य उपस्थापनालेखाः ↗</span>
              </span>
            </a>
          {% endif %}
          {% if talk.pdf %}
            <a href="{{ talk.pdf | relative_url }}" class="pill-btn secondary-btn" target="_blank">
              <span class="lang-block">
                <span class="lang-content" lang="en">{% if talk.pdf_label.en %}{{ talk.pdf_label.en }}{% else %}PDF ↓{% endif %}</span>
                <span class="lang-content" lang="sa">{% if talk.pdf_label.sa %}{{ talk.pdf_label.sa }}{% else %}पीडीएफ् ↓{% endif %}</span>
              </span>
            </a>
          {% endif %}
          {% if talk.pdf_2 %}
            <a href="{{ talk.pdf_2 | relative_url }}" class="pill-btn secondary-btn" target="_blank">
              <span class="lang-block">
                <span class="lang-content" lang="en">{% if talk.pdf_2_label.en %}{{ talk.pdf_2_label.en }}{% else %}PDF 2 ↓{% endif %}</span>
                <span class="lang-content" lang="sa">{% if talk.pdf_2_label.sa %}{{ talk.pdf_2_label.sa }}{% else %}पीडीएफ् २ ↓{% endif %}</span>
              </span>
            </a>
          {% endif %}
          {% if talk.pdf_3 %}
            <a href="{{ talk.pdf_3 | relative_url }}" class="pill-btn secondary-btn" target="_blank">
              <span class="lang-block">
                <span class="lang-content" lang="en">{{ talk.pdf_3_label.en }} ↓</span>
                <span class="lang-content" lang="sa">{{ talk.pdf_3_label.sa }} ↓</span>
              </span>
            </a>
          {% endif %}
          {% if talk.pdf_4 %}
            <a href="{{ talk.pdf_4 | relative_url }}" class="pill-btn secondary-btn" target="_blank">
              <span class="lang-block">
                <span class="lang-content" lang="en">{{ talk.pdf_4_label.en }} ↓</span>
                <span class="lang-content" lang="sa">{{ talk.pdf_4_label.sa }} ↓</span>
              </span>
            </a>
          {% endif %}
          {% if talk.pdf_5 %}
            <a href="{{ talk.pdf_5 | relative_url }}" class="pill-btn secondary-btn" target="_blank">
              <span class="lang-block">
                <span class="lang-content" lang="en">{{ talk.pdf_5_label.en }} ↓</span>
                <span class="lang-content" lang="sa">{{ talk.pdf_5_label.sa }} ↓</span>
              </span>
            </a>
          {% endif %}
          {% if talk.quiz_url %}
            <a href="{{ talk.quiz_url | relative_url }}" class="pill-btn yellow-btn" target="_blank">
              <span class="lang-block">
                <span class="lang-content" lang="en">Quiz 📝</span>
                <span class="lang-content" lang="sa">प्रश्नोत्तरी 📝</span>
              </span>
            </a>
          {% endif %}
          {% if talk.gif_demo %}
            <a href="{{ talk.gif_demo | relative_url }}" class="pill-btn green-btn" target="_blank">
              <span class="lang-block">
                <span class="lang-content" lang="en">Demo GIF 🎬</span>
                <span class="lang-content" lang="sa">प्रदर्शनम् 🎬</span>
              </span>
            </a>
          {% endif %}
        </div>
        
        {% if talk.videos %}
          <div class="event-videos">
            <span class="videos-label">
              <span class="lang-block">
                <span class="lang-content" lang="en">Demonstration Videos:</span>
                <span class="lang-content" lang="sa">प्रदर्शनचलच्चित्राणि:</span>
              </span>
            </span>
            <div class="video-links">
              {% for video in talk.videos %}
                <a href="{{ video.url | relative_url }}" class="video-pill" target="_blank">
                  <span class="lang-block">
                    <span class="lang-content" lang="en">🎬 {{ video.name.en }}</span>
                    <span class="lang-content" lang="sa">🎬 {{ video.name.sa }}</span>
                  </span>
                </a>
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
