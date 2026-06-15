---
layout: post
title: "National Workshop on Indian Astronomy Before Common Era (IABCE)"
subtitle: "Official Lecture Notes, Schedule, and 10-Part Video Series"
date: 2026-03-28 10:00:00 +0530
categories: workshop astronomy history outreach
permalink: /iabce-workshop/
---

<style>
:root {
  --primary-hsl: 210, 80%, 40%;
  --primary-color: hsl(var(--primary-hsl));
  --primary-light: hsl(210, 80%, 96%);
  --primary-dark: hsl(210, 80%, 25%);
  --secondary-hsl: 230, 80%, 15%;
  --secondary-color: hsl(var(--secondary-hsl));
  
  --bg-color: #ffffff;
  --text-main: hsl(210, 15%, 20%);
  --text-muted: hsl(210, 10%, 45%);
  --border-color: hsl(210, 20%, 90%);
  --shadow-light: 0 4px 12px rgba(0, 0, 0, 0.05);
  --shadow-hover: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.iabce-container {
  color: var(--text-main);
  line-height: 1.6;
  margin-top: 1.5rem;
}

.iabce-hero {
  background: linear-gradient(135deg, var(--primary-dark), var(--secondary-color));
  color: #ffffff;
  padding: 2.2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
.iabce-hero h1 {
  color: #ffffff !important;
  margin-top: 0 !important;
  margin-bottom: 0.5rem !important;
  font-size: 1.9rem;
  font-weight: 800;
  line-height: 1.25;
}
.iabce-hero-subtitle {
  font-size: 1.15rem;
  opacity: 0.95;
  font-weight: 500;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding-bottom: 0.8rem;
}
.iabce-hero-details {
  font-size: 0.95rem;
  opacity: 0.85;
  margin: 0;
  line-height: 1.5;
}

.iabce-intro-text {
  font-size: 1.05rem;
  line-height: 1.65;
  margin-bottom: 1.5rem;
}

.iabce-materials-downloads {
  margin-bottom: 2.5rem;
  padding: 0.8rem 1.2rem;
  background: hsl(210, 80%, 98%);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 0.95rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
}
.iabce-materials-downloads span {
  font-weight: 700;
  color: var(--primary-dark);
}
.iabce-download-inline {
  color: var(--primary-color) !important;
  text-decoration: underline !important;
  font-weight: 600;
}
.iabce-download-inline:hover {
  color: var(--primary-dark) !important;
}
.iabce-separator {
  color: var(--border-color);
  user-select: none;
}

.iabce-section-title {
  font-size: 1.4rem;
  font-weight: 700;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 0.4rem;
  margin-top: 2.5rem;
  margin-bottom: 1.2rem;
  color: var(--primary-dark);
}

.iabce-schedule-details {
  border: 1px solid var(--border-color);
  background: var(--primary-light);
  border-radius: 8px;
  margin-bottom: 2rem;
  overflow: hidden;
  box-shadow: var(--shadow-light);
}
.iabce-schedule-summary {
  padding: 0.8rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  user-select: none;
  color: var(--primary-dark);
  font-size: 0.95rem;
  transition: background 0.2s ease;
}
.iabce-schedule-summary:hover {
  background: hsl(210, 80%, 93%);
}
.iabce-schedule-content {
  padding: 1.2rem;
  background: #ffffff;
  border-top: 1px solid var(--border-color);
  text-align: center;
}
.iabce-schedule-img {
  max-width: 100%;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.iabce-cross-link {
  background: hsl(140, 30%, 96%);
  border: 1px solid hsl(140, 30%, 88%);
  border-radius: 10px;
  padding: 1.2rem;
  margin: 2rem 0;
  box-shadow: var(--shadow-light);
}
.iabce-cross-link h3 {
  margin-top: 0 !important;
  margin-bottom: 0.4rem !important;
  font-size: 1.1rem;
  color: hsl(140, 50%, 20%);
}
.iabce-cross-link p {
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
  color: hsl(140, 30%, 25%);
}
.iabce-link-btn {
  display: inline-block;
  padding: 0.45rem 0.9rem;
  background: hsl(140, 50%, 30%);
  color: #ffffff !important;
  text-decoration: none !important;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.85rem;
  transition: background 0.2s ease;
}
.iabce-link-btn:hover {
  background: hsl(140, 50%, 25%);
}

.iabce-playlist-intro {
  font-size: 1.02rem;
  margin-top: -0.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-main);
}
.iabce-playlist-link {
  color: var(--primary-color) !important;
  font-weight: 700;
  text-decoration: underline !important;
}
.iabce-playlist-link:hover {
  color: var(--primary-dark) !important;
}

.iabce-lectures-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.iabce-lecture-card {
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
}

.iabce-lecture-details {
  border: 1px solid var(--border-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow-light);
  background: #ffffff;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}
.iabce-lecture-details:hover {
  box-shadow: var(--shadow-hover);
  border-color: hsl(210, 80%, 75%);
}

.iabce-lecture-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--primary-light);
  padding: 1rem 1.4rem;
  cursor: pointer;
  user-select: none;
  border-left: 5px solid var(--primary-color);
  list-style: none;
}
.iabce-lecture-summary::-webkit-details-marker {
  display: none;
}

.iabce-lecture-summary-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  flex-grow: 1;
}

.iabce-lecture-num {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  color: var(--primary-color);
}
.iabce-lecture-title {
  margin: 0 !important;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--primary-dark);
  line-height: 1.35;
}
.iabce-lecture-speakers {
  font-size: 0.82rem;
  color: var(--text-muted);
  font-style: italic;
  margin-top: 0.15rem;
}

.iabce-lecture-summary-toggle {
  font-size: 1.6rem;
  color: var(--primary-color);
  line-height: 1;
  font-weight: 300;
  transition: transform 0.2s ease;
  margin-left: 1rem;
  user-select: none;
}

details[open] .iabce-lecture-summary-toggle {
  transform: rotate(45deg);
}

.iabce-lecture-body {
  padding: 1.4rem;
  border-top: 1px solid var(--border-color);
  background: #ffffff;
}

.iabce-lecture-desc {
  font-size: 0.95rem;
  color: var(--text-main);
  margin-bottom: 1.2rem;
  line-height: 1.55;
}

.iabce-video-wrapper {
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 1.2rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
}
.iabce-video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.iabce-timestamps-title {
  font-size: 0.85rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 0.6rem;
  border-top: 1px solid var(--border-color);
  padding-top: 0.8rem;
}
.iabce-timestamps-grid {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.iabce-timestamp-row {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
}
.iabce-timestamp-pill {
  flex-shrink: 0;
  background: var(--primary-light);
  color: var(--primary-color) !important;
  border: 1px solid hsl(210, 80%, 90%);
  padding: 0.2rem 0.5rem;
  border-radius: 15px;
  font-weight: 700;
  font-size: 0.75rem;
  text-decoration: none !important;
  transition: all 0.2s ease;
  min-width: 55px;
  text-align: center;
  line-height: 1.2;
}
.iabce-timestamp-pill:hover {
  background: var(--primary-color);
  color: #ffffff !important;
  border-color: var(--primary-color);
  transform: translateY(-1px);
}
.iabce-timestamp-text {
  font-size: 0.88rem;
  color: var(--text-main);
  line-height: 1.35;
  margin-top: 0.05rem;
}

.iabce-gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 2.2rem;
}
.iabce-gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: var(--shadow-light);
  aspect-ratio: 4 / 3;
  border: 1px solid var(--border-color);
  background: hsl(210, 10%, 98%);
  display: block;
}
.iabce-gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;
  cursor: zoom-in;
  display: block;
}
.iabce-gallery-item:hover img {
  transform: scale(1.05);
}
</style>

<div class="iabce-container">
<!-- Hero Card -->
<div class="iabce-hero">
<h1>National Workshop on Indian Astronomy Before Common Era</h1>
<p class="iabce-hero-subtitle">March 23–27, 2026</p>
<p class="iabce-hero-details">Organized by the Centre for Ancient History and Culture (CAHC), Jain (Deemed-to-be) University, Bengaluru. Sponsored by the Indian Knowledge Systems (IKS) Division of the Ministry of Education, Government of India.</p>
</div>

<p class="iabce-intro-text">
This week-long national workshop brought together scholars of astronomy, mathematics, Sanskrit, and history to explore India's rich pre-Common-Era scientific heritage. Guided by the pioneering research of <strong>Prof. R. N. Iyengar</strong> alongside keynote presentations and addresses from <strong>Prof. M. D. Srinivas</strong>, Chancellor <strong>Dr. Chenraj Roychand</strong>, Registrar <strong>Dr. Jitendra Kumar Mishra</strong>, <strong>Dr. Shankar Rajaraman</strong>, <strong>Dr. R. S. Hariharan</strong>, <strong>Prof. Vīranārāyaṇa Pāṇḍuraṅgī</strong>, and <strong>Dr. Ganti S. Murthy</strong>, the workshop covered topics ranging from Vedic cosmography and precession to the Vedāṅga Jyotiṣa, astronomical tools (Stellarium/Astropy), and ancient rainfall forecasting.
</p>

<div class="iabce-materials-downloads">
<span>Workshop Materials:</span>
<a href="{{ '/assets/talks/2026-03-23-iabce/iabce-lecture-notes.pdf' | relative_url }}" target="_blank" class="iabce-download-inline">Lecture Notes Book (131 Pages) &darr;</a>
<span class="iabce-separator">|</span>
<a href="{{ '/assets/talks/2026-03-23-iabce/iabce-timestamps.pdf' | relative_url }}" target="_blank" class="iabce-download-inline">Timestamps & Outlines &darr;</a>
</div>

<!-- Interactive Schedule Toggle -->
<details class="iabce-schedule-details">
<summary class="iabce-schedule-summary">View Workshop Weekly Schedule Image</summary>
<div class="iabce-schedule-content">
<img src="{{ '/assets/talks/2026-03-23-iabce/iabce-schedule.jpg' | relative_url }}" alt="National Workshop Schedule March 2026" class="iabce-schedule-img" />
</div>
</details>

<!-- Event Gallery -->
<h2 class="iabce-section-title">Event Gallery</h2>
<div class="iabce-gallery-grid">
<a href="{{ '/assets/talks/2026-03-23-iabce/iabce-event-05.jpg' | relative_url }}" target="_blank" class="iabce-gallery-item">
  <img src="{{ '/assets/talks/2026-03-23-iabce/iabce-event-05.jpg' | relative_url }}" alt="National Workshop Event 5" loading="lazy" />
</a>
<a href="{{ '/assets/talks/2026-03-23-iabce/iabce-event-06.jpg' | relative_url }}" target="_blank" class="iabce-gallery-item">
  <img src="{{ '/assets/talks/2026-03-23-iabce/iabce-event-06.jpg' | relative_url }}" alt="National Workshop Event 6" loading="lazy" />
</a>
<a href="{{ '/assets/talks/2026-03-23-iabce/iabce-event-01.jpg' | relative_url }}" target="_blank" class="iabce-gallery-item">
  <img src="{{ '/assets/talks/2026-03-23-iabce/iabce-event-01.jpg' | relative_url }}" alt="National Workshop Event 1" loading="lazy" />
</a>
<a href="{{ '/assets/talks/2026-03-23-iabce/iabce-event-02.jpg' | relative_url }}" target="_blank" class="iabce-gallery-item">
  <img src="{{ '/assets/talks/2026-03-23-iabce/iabce-event-02.jpg' | relative_url }}" alt="National Workshop Event 2" loading="lazy" />
</a>
<a href="{{ '/assets/talks/2026-03-23-iabce/iabce-event-03.jpg' | relative_url }}" target="_blank" class="iabce-gallery-item">
  <img src="{{ '/assets/talks/2026-03-23-iabce/iabce-event-03.jpg' | relative_url }}" alt="National Workshop Event 3" loading="lazy" />
</a>
<a href="{{ '/assets/talks/2026-03-23-iabce/iabce-event-04.jpg' | relative_url }}" target="_blank" class="iabce-gallery-item">
  <img src="{{ '/assets/talks/2026-03-23-iabce/iabce-event-04.jpg' | relative_url }}" alt="National Workshop Event 4" loading="lazy" />
</a>
</div>

<!-- Cross-link Box -->
<div class="iabce-cross-link">
<h3>Stellarium Tutorials & Interactive Quiz</h3>
<p>Looking for the hands-on Stellarium scripts, demonstration videos, or the 50-question quiz from this workshop? Visit the dedicated tutorial page:</p>
<a href="{{ '/tutorial/astronomy/cosmography/2026/03/23/iabc-tutorial.html' | relative_url }}" class="iabce-link-btn">Go to Stellarium Tutorials & Quiz &rarr;</a>
</div>

<h2 class="iabce-section-title">Video Lectures & Timestamps</h2>
<div class="iabce-playlist-intro">
The complete recordings of all sessions are available in the official <a href="https://www.youtube.com/playlist?list=PLnRbqoRbGaa0aeflLaYt0NssoKfMM8rW-" target="_blank" class="iabce-playlist-link">YouTube Video Playlist &nearrow;</a>. The individual lectures and their timestamps can be expanded below:
</div>

<div class="iabce-lectures-list">
<!-- Lecture 1 -->
<div class="iabce-lecture-card">
<details class="iabce-lecture-details">
<summary class="iabce-lecture-summary">
<div class="iabce-lecture-summary-info">
<span class="iabce-lecture-num">Lecture 1</span>
<h3 class="iabce-lecture-title">Inaugural session + Prof. M.D. Srinivas's special lecture</h3>
<span class="iabce-lecture-speakers">Presented by: Dr. Shankar Rajaraman, Prof. M. D. Srinivas, Dr. Jitendra Kumar Mishra, Prof. R. N. Iyengar</span>
</div>
<span class="iabce-lecture-summary-toggle">&plus;</span>
</summary>
<div class="iabce-lecture-body">
<p class="iabce-lecture-desc">The opening day. The first hour is the inaugural function; the rest is Prof. M.D. Srinivas's keynote, "Indigenous Development of Scientific Astronomy in India," which lays the historiographical groundwork — how India's pre ‑ Common ‑ Era astronomy was long misread as borrowed from Mesopotamia/Greece, and what the texts actually show. ▸ Part A — Inaugural function</p>

<!-- Embedded Video -->
<div class="iabce-video-wrapper">
<iframe src="https://www.youtube.com/embed/qiigufghIHk" title="Inaugural session + Prof. M.D. Srinivas's special lecture" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iabce-timestamps-title">Lecture Timestamps</div>
<div class="iabce-timestamps-grid">
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=qiigufghIHk&t=3m53s" target="_blank" class="iabce-timestamp-pill">3:53</a>
<span class="iabce-timestamp-text">Opening; ceremonial lamp ‑ lighting and invocation</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=qiigufghIHk&t=8m09s" target="_blank" class="iabce-timestamp-pill">8:09</a>
<span class="iabce-timestamp-text">Dr. Shankar Rajaraman (Director, CAHC) welcome address; on CAHC and its work; introduction of the guests</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=qiigufghIHk&t=15m48s" target="_blank" class="iabce-timestamp-pill">15:48</a>
<span class="iabce-timestamp-text">Inaugural address by Prof. M.D. Srinivas: how Indian pre ‑ CE astronomy was studied and misread as "borrowed from the West"</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=qiigufghIHk&t=34m26s" target="_blank" class="iabce-timestamp-pill">34:26</a>
<span class="iabce-timestamp-text">Presidential address by Dr. Jitendra Kumar Mishra (acting VC): learning at the centre of IKS; the multi ‑ millennial arc of Indian astronomy</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=qiigufghIHk&t=48m16s" target="_blank" class="iabce-timestamp-pill">48:16</a>
<span class="iabce-timestamp-text">Prof. R.N. Iyengar on the workshop's origins: CAHC from 2011, the 2018 paid weekend course, the manuscript ‑ access struggles, the 2023 Vedic ‑ scholars meeting, and this national workshop</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=qiigufghIHk&t=1h06m05s" target="_blank" class="iabce-timestamp-pill">1:06:05</a>
<span class="iabce-timestamp-text">Vote of thanks; tea break ▸ Part B — Special lecture, Prof. M.D. Srinivas: "Indigenous Development of Scientific Astronomy in India" (~1:08 – end)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=qiigufghIHk&t=1h08m29s" target="_blank" class="iabce-timestamp-pill">1:08:29</a>
<span class="iabce-timestamp-text">The lecture's frame; historiography and the Western ‑ borrowing thesis (Neugebauer, Pingree's "five intrusions")</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=qiigufghIHk&t=1h18m00s" target="_blank" class="iabce-timestamp-pill">1:18:00</a>
<span class="iabce-timestamp-text">Pre ‑ CE content: Vedic mathematics & observational astronomy; the pole star Abhaya ‑ Dhruva / Alpha Draconis (~2850 BCE) in Śiśumāra; Maitrāyaṇīya & Mahāsalilam placing summer solstice at Maghā (~1600 BCE)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=qiigufghIHk&t=1h23m47s" target="_blank" class="iabce-timestamp-pill">1:23:47</a>
<span class="iabce-timestamp-text">Jacobi vs Whitney/Keith on whether the Veda knows Dhruva; Iyengar's 30–40 Ṛgvedic instances</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=qiigufghIHk&t=1h26m18s" target="_blank" class="iabce-timestamp-pill">1:26:18</a>
<span class="iabce-timestamp-text">Parāśaratantra & Mahāsalila: solstices/equinoxes ~1300 BCE; ṛtus named by nakṣatra; comets as ketu</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=qiigufghIHk&t=1h33m56s" target="_blank" class="iabce-timestamp-pill">1:33:56</a>
<span class="iabce-timestamp-text">Lagadha's Vedāṅga‑Jyotiṣa: the 5 ‑ year yuga, the rule of three, and the daylight ‑ length formula whose 35° fit was misused to claim Mesopotamian origin (the debunk)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=qiigufghIHk&t=1h40m00s" target="_blank" class="iabce-timestamp-pill">1:40:00</a>
<span class="iabce-timestamp-text">The Indian calendar: solar/tropical year, lunar month, adhika‑māsa; the Uttarāyaṇa vs Makara‑Saṅkramaṇa confusion</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=qiigufghIHk&t=1h47m14s" target="_blank" class="iabce-timestamp-pill">1:47:14</a>
<span class="iabce-timestamp-text">Siddhāntic development: Varāhamihira's Pañcasiddhāntikā , Āryabhaṭa, Brahmagupta; transmission westward (al‑Khwārizmī → "algebra," "algorithm")</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=qiigufghIHk&t=1h52m49s" target="_blank" class="iabce-timestamp-pill">1:52:49</a>
<span class="iabce-timestamp-text">Nīlakaṇṭha's latitude insight: the Śīghroccas of Budha & Śukra are the planets themselves (their heliocentric periods) — the major indigenous discovery</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=qiigufghIHk&t=1h57m44s" target="_blank" class="iabce-timestamp-pill">1:57:44</a>
<span class="iabce-timestamp-text">Q&A: Romaka/Pauliśa siddhāntas; rāśi‑based astrology as the genuinely foreign import; the Pingree / Yavanajātaka critique</span>
</div>
</div>
</div>
</details>
</div>

<!-- Lecture 2 -->
<div class="iabce-lecture-card">
<details class="iabce-lecture-details">
<summary class="iabce-lecture-summary">
<div class="iabce-lecture-summary-info">
<span class="iabce-lecture-num">Lecture 2</span>
<h3 class="iabce-lecture-title">Inauguration (afternoon) + first lecture</h3>
<span class="iabce-lecture-speakers">Presented by: Dr. Chenraj Roychand, Prof. R. N. Iyengar</span>
</div>
<span class="iabce-lecture-summary-toggle">&plus;</span>
</summary>
<div class="iabce-lecture-body">
<p class="iabce-lecture-desc">The opening afternoon. After lunch and logistics, Iyengar frames the workshop as interactive (questions expected, not a lecture course); participants introduce themselves; the Chairman addresses the participants on reviving Indian intellectual tradition and IKS. Iyengar then opens the course proper — how to approach "before Common Era" astronomy through the Vedic source texts — covering the tripartite universe, the Nirukta's "three devas suffice" argument, the classification of the Vedas and Vedāṅgas, the Ṛgveda 10.72 cosmogony, and the first key numbers (15, 30, 360, 3339).</p>

<!-- Embedded Video -->
<div class="iabce-video-wrapper">
<iframe src="https://www.youtube.com/embed/s7clz9Em6Bg" title="Inauguration (afternoon) + first lecture" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iabce-timestamps-title">Lecture Timestamps</div>
<div class="iabce-timestamps-grid">
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=s7clz9Em6Bg&t=0m06s" target="_blank" class="iabce-timestamp-pill">0:06</a>
<span class="iabce-timestamp-text">Logistics; "this is an interactive workshop" (Iyengar)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=s7clz9Em6Bg&t=6m00s" target="_blank" class="iabce-timestamp-pill">6:00</a>
<span class="iabce-timestamp-text">Participant self ‑ introductions begin (~30 people, 14 states)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=s7clz9Em6Bg&t=23m55s" target="_blank" class="iabce-timestamp-pill">23:55</a>
<span class="iabce-timestamp-text">Founder ‑ chairman Dr. Chenraj Roychand's address (IKS, tradition, values)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=s7clz9Em6Bg&t=38m00s" target="_blank" class="iabce-timestamp-pill">38:00</a>
<span class="iabce-timestamp-text">Iyengar resumes; course framing</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=s7clz9Em6Bg&t=41m00s" target="_blank" class="iabce-timestamp-pill">41:00</a>
<span class="iabce-timestamp-text">Tripartite universe: dyauḥ / antarikṣa / pṛthivī ; the oral tradition</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=s7clz9Em6Bg&t=45m00s" target="_blank" class="iabce-timestamp-pill">45:00</a>
<span class="iabce-timestamp-text">Nirukta (Yāska): "three devas are sufficient"; numbers underlie devatās</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=s7clz9Em6Bg&t=57m20s" target="_blank" class="iabce-timestamp-pill">57:20</a>
<span class="iabce-timestamp-text">Timeline of the Vedic + intellectual traditions; NEP motivation; Sāyaṇa's commentary</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=s7clz9Em6Bg&t=1h06m00s" target="_blank" class="iabce-timestamp-pill">1:06:00</a>
<span class="iabce-timestamp-text">Classifying the Vedas (Saṃhitā / Brāhmaṇa / Āraṇyaka / Upaniṣad) and the śākhās</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=s7clz9Em6Bg&t=1h12m00s" target="_blank" class="iabce-timestamp-pill">1:12:00</a>
<span class="iabce-timestamp-text">(after tea) The six Vedāṅgas; Jyotiṣa; Lagadha, Parāśara, Mahāsalila</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=s7clz9Em6Bg&t=1h51m50s" target="_blank" class="iabce-timestamp-pill">1:51:50</a>
<span class="iabce-timestamp-text">Ṛgveda 10.72 cosmogony: Uttānapāda, Aditi, Dakṣa (Griffith vs Dīkṣit readings)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=s7clz9Em6Bg&t=2h22m30s" target="_blank" class="iabce-timestamp-pill">2:22:30</a>
<span class="iabce-timestamp-text">Numbers 15 / 30 / 360; the Prajāpati legend; 3339 foreshadowed</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=s7clz9Em6Bg&t=2h30m00s" target="_blank" class="iabce-timestamp-pill">2:30:00</a>
<span class="iabce-timestamp-text">Closing Q&A (Bhṛgu = Śukra, etc.); Stellarium announced for the next day</span>
</div>
</div>
</div>
</details>
</div>

<!-- Lecture 3 -->
<div class="iabce-lecture-card">
<details class="iabce-lecture-details">
<summary class="iabce-lecture-summary">
<div class="iabce-lecture-summary-info">
<span class="iabce-lecture-num">Lecture 3</span>
<h3 class="iabce-lecture-title">Indra, soma, 3339 & the Saros cycle</h3>
<span class="iabce-lecture-speakers">Presented by: Prof. R. N. Iyengar</span>
</div>
<span class="iabce-lecture-summary-toggle">&plus;</span>
</summary>
<div class="iabce-lecture-body">
<p class="iabce-lecture-desc">A dense methods lecture on extracting astronomy from Vedic texts. Iyengar reads Indra's soma ‑ drinking three ways (herb / moon / mind) and uses the principle that a devatāis fixed by location + number + action to decode the number 3339 of the Viśvedevas as an eclipse (Saros) count. He ties this to the dārśa‑paurṇamāsa ritual and its dārvīfigure, derives that figure from the Śulba Sūtras (squaring the circle, √2, Baudhāyaṇa's theorem), and links the 18 ‑ year and 5 ‑ year cycles to calendar intercalation and the Rāhu period.</p>

<!-- Embedded Video -->
<div class="iabce-video-wrapper">
<iframe src="https://www.youtube.com/embed/RALgyeo79xg" title="Indra, soma, 3339 & the Saros cycle" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iabce-timestamps-title">Lecture Timestamps</div>
<div class="iabce-timestamps-grid">
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=RALgyeo79xg&t=1m00s" target="_blank" class="iabce-timestamp-pill">1:00</a>
<span class="iabce-timestamp-text">Recap: earth = mother, dyaus = father; numbers + devatās as the key</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=RALgyeo79xg&t=5m21s" target="_blank" class="iabce-timestamp-pill">5:21</a>
<span class="iabce-timestamp-text">Indra and soma; "who is Indra?"</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=RALgyeo79xg&t=8m07s" target="_blank" class="iabce-timestamp-pill">8:07</a>
<span class="iabce-timestamp-text">Three readings of soma: herb / moon / manas; the "intoxicant" reading rejected</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=RALgyeo79xg&t=17m31s" target="_blank" class="iabce-timestamp-pill">17:31</a>
<span class="iabce-timestamp-text">Rūpasamṛddhi (the correspondence principle), from the Aitareya Brāhmaṇa</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=RALgyeo79xg&t=21m55s" target="_blank" class="iabce-timestamp-pill">21:55</a>
<span class="iabce-timestamp-text">Soma legend; Indra "drinks 30 measures" = 15 + 15 of the dark fortnight</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=RALgyeo79xg&t=35m55s" target="_blank" class="iabce-timestamp-pill">35:55</a>
<span class="iabce-timestamp-text">The number 3339 of the Viśvedevas ( Ṛgveda 10.52); Bṛhaddevatā</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=RALgyeo79xg&t=1h03m00s" target="_blank" class="iabce-timestamp-pill">1:03:00</a>
<span class="iabce-timestamp-text">6678 = 371 × 18 → 223 synodic months = the Saros (18 ‑ yr eclipse) cycle</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=RALgyeo79xg&t=1h09m18s" target="_blank" class="iabce-timestamp-pill">1:09:18</a>
<span class="iabce-timestamp-text">Connecting it to ritual: dārśa‑paurṇamāsa and the dārvī (vedi) figure</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=RALgyeo79xg&t=1h17m18s" target="_blank" class="iabce-timestamp-pill">1:17:18</a>
<span class="iabce-timestamp-text">Śulba Sūtra construction of the dārvī ; area ≈ 3339; squaring the circle ( π ≈ 3)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=RALgyeo79xg&t=1h28m00s" target="_blank" class="iabce-timestamp-pill">1:28:00</a>
<span class="iabce-timestamp-text">Moon's standstill / ayana plotted → the "snake/doll" figure; archaeoastronomy</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=RALgyeo79xg&t=1h48m00s" target="_blank" class="iabce-timestamp-pill">1:48:00</a>
<span class="iabce-timestamp-text">Calendar: intercalation, 15 ‑ /30 ‑ year satras, lunar 360 vs solar 371 tithis</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=RALgyeo79xg&t=1h53m46s" target="_blank" class="iabce-timestamp-pill">1:53:46</a>
<span class="iabce-timestamp-text">Rāhu's 18 ‑ year daśā ; the 5 ‑ year pañcavatsara calendar</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=RALgyeo79xg&t=1h59m43s" target="_blank" class="iabce-timestamp-pill">1:59:43</a>
<span class="iabce-timestamp-text">Baudhāyana theorem; √2 approximation; the Purāṇic "critical edition" plea</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=RALgyeo79xg&t=2h07m24s" target="_blank" class="iabce-timestamp-pill">2:07:24</a>
<span class="iabce-timestamp-text">Closing: a Taittirīya Brāhmaṇa mantra read as a sun–moon eclipse; Q&A to lunch</span>
</div>
</div>
</div>
</details>
</div>

<!-- Lecture 4 -->
<div class="iabce-lecture-card">
<details class="iabce-lecture-details">
<summary class="iabce-lecture-summary">
<div class="iabce-lecture-summary-info">
<span class="iabce-lecture-num">Lecture 4</span>
<h3 class="iabce-lecture-title">Dhruva, Śiśumāra & precession + first Stellarium tutorial</h3>
<span class="iabce-lecture-speakers">Presented by: Prof. R. N. Iyengar, Sunder Chakravarty</span>
</div>
<span class="iabce-lecture-summary-toggle">&plus;</span>
</summary>
<div class="iabce-lecture-body">
<p class="iabce-lecture-desc">Prof. R.N. Iyengar's pole ‑ star lecture, then Sunder Chakravarty's first Stellarium tutorial. ▸ Session A — Prof. R.N. Iyengar: Dhruva, Śiśumāra & precession (0:05 – ~1:13:40) Iyengar turns to the pole star. He tells the Purāṇic Dhruva legend, then poses the real puzzle — today's pole star isn't the one the Purāṇas describe, and for roughly 3,000 years there was no true pole star — and uses precession to date the Śiśumāra (Draco) figure and its star Dhruva to ~2830 BC. He then traces the idea forward through the Maitrāyaṇī , the Mahābhārata, Śa ṅkara, Alberuni and Kamalākara, showing how Meru–Dhruva cosmology and the marriage ‑ time Dhruva ‑ darśana survived even after the star itself drifted off the pole.</p>

<!-- Embedded Video -->
<div class="iabce-video-wrapper">
<iframe src="https://www.youtube.com/embed/CurVfe5hzmw" title="Dhruva, Śiśumāra & precession + first Stellarium tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iabce-timestamps-title">Lecture Timestamps</div>
<div class="iabce-timestamps-grid">
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=1m19s" target="_blank" class="iabce-timestamp-pill">1:19</a>
<span class="iabce-timestamp-text">The Purāṇic legend of Dhruva (Uttānapāda, the two queens, tapas, Viṣṇu, becomes the pole star)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=5m22s" target="_blank" class="iabce-timestamp-pill">5:22</a>
<span class="iabce-timestamp-text">The real question: today's pole star ≠ the ancient one; no true pole star ~1500 BC–1500 AD</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=7m45s" target="_blank" class="iabce-timestamp-pill">7:45</a>
<span class="iabce-timestamp-text">Why this matters for chronology/dating (caution on unscientific Mahabharata "anchor dates")</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=8m58s" target="_blank" class="iabce-timestamp-pill">8:58</a>
<span class="iabce-timestamp-text">Precession video: earth's three motions; the ~26,000 ‑ year pole circle</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=12m06s" target="_blank" class="iabce-timestamp-pill">12:06</a>
<span class="iabce-timestamp-text">Thuban ( α Draconis) as pole star ~3000 BC = the Śiśumāra / Draco "dragon," Dhruva its 14th star</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=15m03s" target="_blank" class="iabce-timestamp-pill">15:03</a>
<span class="iabce-timestamp-text">The TaittirīyaĀraṇyaka mantra describing the Śiśumāra figure (still recited in the south)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=23m46s" target="_blank" class="iabce-timestamp-pill">23:46</a>
<span class="iabce-timestamp-text">Dating the figure (14 stars, dragon shape) to ~2830 BC — the earliest datable star ‑ group</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=32m14s" target="_blank" class="iabce-timestamp-pill">32:14</a>
<span class="iabce-timestamp-text">Brahmāṇḍa Purāṇa's Meru ‑ centric model (oil ‑ mill / potter's ‑ wheel analogies); the fixed Nābhi</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=35m08s" target="_blank" class="iabce-timestamp-pill">35:08</a>
<span class="iabce-timestamp-text">"Dhruva fixed yet rotating" → a possible source of Āryabhaṭa's earth ‑ rotation idea</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=43m34s" target="_blank" class="iabce-timestamp-pill">43:34</a>
<span class="iabce-timestamp-text">(after tea) Maitrāyaṇī : King Bṛhadratha's vairāgya; "even Dhruva moves"; precession felt</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=49m02s" target="_blank" class="iabce-timestamp-pill">49:02</a>
<span class="iabce-timestamp-text">Mahābhārata'sŚiśumāra ‑ town and Arjuna's rotating ‑ fish target as precession memory</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=54m53s" target="_blank" class="iabce-timestamp-pill">54:53</a>
<span class="iabce-timestamp-text">Later witnesses: Śa ṅkara's Viṣṇusahasranāma gloss (8th c.), Alberuni (11th c.), Kamalākara (17th c.)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=1h05m34s" target="_blank" class="iabce-timestamp-pill">1:05:34</a>
<span class="iabce-timestamp-text">Summary: 5,000 years of Dhruva; Kālidāsa's Kumārasambhava; closing Q&A ▸ Session B — Sunder Chakravarty: Stellarium tutorial (Meru, Dhruva, precession) (~1:13:46 – 2:42) Sunder gives the first hands ‑ on demo, visualising what Iyengar described. He runs an animation that builds the cosmos step by step (Mahāsalilam → earth → four dvīpas → Meru → 27 nakṣatras → sun), then walks through Stellarium on phone, web and desktop — sky cultures, finding stars and planets, and especially precession. He closes on the nakṣatra ‑ vs ‑ sector ambiguity and the nakṣatra–season fitting method the group uses to date texts.</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=1h13m46s" target="_blank" class="iabce-timestamp-pill">1:13:46</a>
<span class="iabce-timestamp-text">Sunder takes over; plan for the demo sessions</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=1h15m06s" target="_blank" class="iabce-timestamp-pill">1:15:06</a>
<span class="iabce-timestamp-text">Meru animation: Mahāsalilam → Pṛthivī → 4 dvīpas (Jambu, Prāgjyotiṣa, Uttarakuru, Ketumāla) → Dhruva → Meru → 27 nakṣatras → Sun</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=1h16m38s" target="_blank" class="iabce-timestamp-pill">1:16:38</a>
<span class="iabce-timestamp-text">Sun makes day/night; moves ~1 nakṣatra per 13 days (~360 ‑ day circuit)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=1h20m47s" target="_blank" class="iabce-timestamp-pill">1:20:47</a>
<span class="iabce-timestamp-text">Sun's annual path: the two ayanas + two equinoxes; the "pulsing" up–down orbit</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=1h28m09s" target="_blank" class="iabce-timestamp-pill">1:28:09</a>
<span class="iabce-timestamp-text">Stellarium tour: phone / web / desktop versions</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=1h32m35s" target="_blank" class="iabce-timestamp-pill">1:32:35</a>
<span class="iabce-timestamp-text">Precession & frozen conventions: equinox now at Bhādrapada but we still say A śvinī (frozen ~285 AD); the Jan ‑ 14 Uttarāyaṇa drift</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=1h38m43s" target="_blank" class="iabce-timestamp-pill">1:38:43</a>
<span class="iabce-timestamp-text">Dhruva gives your latitude (13° Bangalore, 28° Delhi); Śiśumāra clearer up north</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=1h40m03s" target="_blank" class="iabce-timestamp-pill">1:40:03</a>
<span class="iabce-timestamp-text">Desktop Stellarium: grids, sky cultures, his AI ‑ built "Vedic Codex"; precession circles; orthographic view</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=1h46m29s" target="_blank" class="iabce-timestamp-pill">1:46:29</a>
<span class="iabce-timestamp-text">Indian nakṣatra terms inside the Mongolian sky culture (eastward spread)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=1h48m55s" target="_blank" class="iabce-timestamp-pill">1:48:55</a>
<span class="iabce-timestamp-text">Scripted Dhruva ‑ shift movie (2850 BC pole vs Polaris); long Q&A on precession geometry (1°/72 yrs, obliquity)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=2h10m41s" target="_blank" class="iabce-timestamp-pill">2:10:41</a>
<span class="iabce-timestamp-text">Nakṣatra as visible star ‑ group vs 13°20 ′ sector; Maghā 's six stars; Abhijit</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=2h26m14s" target="_blank" class="iabce-timestamp-pill">2:26:14</a>
<span class="iabce-timestamp-text">Dating texts by nakṣatra–season fit (the core method); Abhijit's elision; equal vs unequal nakṣatras</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=CurVfe5hzmw&t=2h35m22s" target="_blank" class="iabce-timestamp-pill">2:35:22</a>
<span class="iabce-timestamp-text">Wrap + Q&A: sixṛtus, Uttarāyaṇa Dec 21 vs Jan 14, Makara</span>
</div>
</div>
</div>
</details>
</div>

<!-- Lecture 5 -->
<div class="iabce-lecture-card">
<details class="iabce-lecture-details">
<summary class="iabce-lecture-summary">
<div class="iabce-lecture-summary-info">
<span class="iabce-lecture-num">Lecture 5</span>
<h3 class="iabce-lecture-title">The nakṣatra system, calendar & ṛtus; intro to the VGJ</h3>
<span class="iabce-lecture-speakers">Presented by: Prof. R. N. Iyengar</span>
</div>
<span class="iabce-lecture-summary-toggle">&plus;</span>
</summary>
<div class="iabce-lecture-body">
<p class="iabce-lecture-desc">Iyengar builds the nakṣatra system: why the moon needs star ‑ asterisms as a fixed coordinate background, the two lunar cycles (sidereal 27/28 and synodic ~29.5), and how the seasons and intercalation forced a move from pakṣa ‑ reckoning to a solar ‑ anchored calendar. He covers heliacal rising and the "morning nakṣatra," then the equinoctial full ‑ moon dating method (Kṛttikā ¼ opposite Viśākhā ¾ → the ~1800 BC "Maghādi" epoch), and finally introduces the Vṛddha ‑ Gārgīya ‑ Jyotiṣa (VGJ) as a primary Vedāṅga‑Jyotiṣa text.</p>

<!-- Embedded Video -->
<div class="iabce-video-wrapper">
<iframe src="https://www.youtube.com/embed/zPj1cDxoUFU" title="The nakṣatra system, calendar & ṛtus; intro to the VGJ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iabce-timestamps-title">Lecture Timestamps</div>
<div class="iabce-timestamps-grid">
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=zPj1cDxoUFU&t=0m06s" target="_blank" class="iabce-timestamp-pill">0:06</a>
<span class="iabce-timestamp-text">Recap: Saptarṣi (Ursa Major), the sevenṛṣi names; ṛkṣa = bear/star</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=zPj1cDxoUFU&t=4m11s" target="_blank" class="iabce-timestamp-pill">4:11</a>
<span class="iabce-timestamp-text">Nakṣatras as asterisms along the ecliptic; why a fixed "coordinate" background is needed</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=zPj1cDxoUFU&t=8m48s" target="_blank" class="iabce-timestamp-pill">8:48</a>
<span class="iabce-timestamp-text">Watching the moon: the two cycles (sidereal 27/28, synodic ~29.5); pañcadaśī = amāvāsyā /pūrṇimā</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=zPj1cDxoUFU&t=15m24s" target="_blank" class="iabce-timestamp-pill">15:24</a>
<span class="iabce-timestamp-text">Seasons drive the calendar; the sixṛtus; "social determination" of seasons</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=zPj1cDxoUFU&t=18m41s" target="_blank" class="iabce-timestamp-pill">18:41</a>
<span class="iabce-timestamp-text">Intercalation; the Śatapatha deva–asura story; ṛtu ‑ yajña</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=zPj1cDxoUFU&t=26m09s" target="_blank" class="iabce-timestamp-pill">26:09</a>
<span class="iabce-timestamp-text">Nakṣatra names in the Ṛgveda (Maghā , Phalgunī = Arjunī , Tiṣya); 28 in the Atharvaveda</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=zPj1cDxoUFU&t=43m04s" target="_blank" class="iabce-timestamp-pill">43:04</a>
<span class="iabce-timestamp-text">Heliacal rising; the "morning nakṣatra"; brāhma ‑ muhūrta; why "lunar mansions" is wrong</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=zPj1cDxoUFU&t=56m49s" target="_blank" class="iabce-timestamp-pill">56:49</a>
<span class="iabce-timestamp-text">(after coffee) Months arrive only after ~1800 BC; pūrṇimānta vs amānta calendars</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=zPj1cDxoUFU&t=1h32m12s" target="_blank" class="iabce-timestamp-pill">1:32:12</a>
<span class="iabce-timestamp-text">Maitrāyaṇī 's magha– śraviṣṭha; 27 ÷ 12 = 2¼ nakṣatra per rāśi (the seed of the rāśi system)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=zPj1cDxoUFU&t=1h36m43s" target="_blank" class="iabce-timestamp-pill">1:36:43</a>
<span class="iabce-timestamp-text">Equinoctial full ‑ moon method: Kṛttikā ¼ opposite Viśākhā ¾ → ~1800 BC "Maghādi" epoch (Brahmāṇḍa Purāṇa)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=zPj1cDxoUFU&t=2h00m23s" target="_blank" class="iabce-timestamp-pill">2:00:23</a>
<span class="iabce-timestamp-text">Introducing the Vṛddha ‑ Gārgīya ‑ Jyotiṣa (VGJ); "continue after lunch"</span>
</div>
</div>
</div>
</details>
</div>

<!-- Lecture 6 -->
<div class="iabce-lecture-card">
<details class="iabce-lecture-details">
<summary class="iabce-lecture-summary">
<div class="iabce-lecture-summary-info">
<span class="iabce-lecture-num">Lecture 6</span>
<h3 class="iabce-lecture-title">VGJ & Parāśaratantra + second Stellarium tutorial</h3>
<span class="iabce-lecture-speakers">Presented by: Prof. R. N. Iyengar, Sunder Chakravarty</span>
</div>
<span class="iabce-lecture-summary-toggle">&plus;</span>
</summary>
<div class="iabce-lecture-body">
<p class="iabce-lecture-desc">This continues straight from Lecture 5's lunch break: Iyengar finishes the VGJ/Parāśara material, then hands over to Sunder (~2:04) for the second Stellarium tutorial. ▸ Session A — Prof. R.N. Iyengar: VGJ & Parāśaratantra (0:00 – ~2:03) A detailed look at the two main pre ‑ CE Vedāṅga‑Jyotiṣa texts Iyengar has edited. He explains how VGJ is dated by nakṣatra–season fitting ( Ādityacāra ~1300 BC, Ṛtusvabhāva ~500 BC) and the Śraviṣṭhā ‑ vs ‑ Dhaniṣṭhāidentification dispute, recounts the manuscript ‑ hunting saga, walks the text's structure, then turns to Parāśaratantra and its ~1300 BC date.</p>

<!-- Embedded Video -->
<div class="iabce-video-wrapper">
<iframe src="https://www.youtube.com/embed/sWPRYk1Ja4w" title="VGJ & Parāśaratantra + second Stellarium tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iabce-timestamps-title">Lecture Timestamps</div>
<div class="iabce-timestamps-grid">
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=0m04s" target="_blank" class="iabce-timestamp-pill">0:04</a>
<span class="iabce-timestamp-text">Resuming after lunch; scope: VGJ + Parāśaratantra</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=0m40s" target="_blank" class="iabce-timestamp-pill">0:40</a>
<span class="iabce-timestamp-text">VGJ's chronology; 125+ chapters, ~5000 verses, ~10% edited; the three key chapters</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=8m08s" target="_blank" class="iabce-timestamp-pill">8:08</a>
<span class="iabce-timestamp-text">Dating VGJ via nakṣatra positions in the sixṛtus → ~1300 BC; Śraviṣṭhāvs Dhaniṣṭhā</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=24m43s" target="_blank" class="iabce-timestamp-pill">24:43</a>
<span class="iabce-timestamp-text">The manuscript saga (Paris, Cambridge, Nepal, NLI Kolkata); editing a layered text</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=42m22s" target="_blank" class="iabce-timestamp-pill">42:22</a>
<span class="iabce-timestamp-text">First a ṅga = nakṣatra ‑ karmaguṇa (quality of action per nakṣatra); Kṛttikā = agni</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=46m25s" target="_blank" class="iabce-timestamp-pill">46:25</a>
<span class="iabce-timestamp-text">Kanyā (girls' education/marriage) in the older kalpa; ācāryāvsācāryāṇī</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=52m11s" target="_blank" class="iabce-timestamp-pill">52:11</a>
<span class="iabce-timestamp-text">Tithi & karaṇa: karaṇa is older; the four pañcāṅga parameters</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=1h03m28s" target="_blank" class="iabce-timestamp-pill">1:03:28</a>
<span class="iabce-timestamp-text">Maximizing the four time ‑ parameters = the philosophy of muhūrta astrology</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=1h29m23s" target="_blank" class="iabce-timestamp-pill">1:29:23</a>
<span class="iabce-timestamp-text">Parāśaratantra: prompted by the 1993 Killari earthquake; dated ~1350–1130 BC (William Jones, Utpala)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=1h47m24s" target="_blank" class="iabce-timestamp-pill">1:47:24</a>
<span class="iabce-timestamp-text">Comets (26 ketus), ten eclipse types, six ‑ monthly & penumbral (nirodha) eclipses; hands over to Sunder ▸ Session B — Sunder Chakravarty: Stellarium 2 (moon & eclipses) (~2:04 – 3:06) The second demo focuses on the moon and on the analytical toolchain. Sunder visualises the moon's faster swing and the Brahmāṇḍa Purāṇa equinoctial full ‑ moon condition, shows how astropy scans millennia for matching full moons (converging on ~1800 BCE), and demonstrates eclipse tools for Parāśara's six ‑ monthly windows.</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=2h04m14s" target="_blank" class="iabce-timestamp-pill">2:04:14</a>
<span class="iabce-timestamp-text">Sunder resumes; recap of yesterday (Meru, Dhruva, precession, nakṣatras, dating)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=2h08m23s" target="_blank" class="iabce-timestamp-pill">2:08:23</a>
<span class="iabce-timestamp-text">The moon's swing (larger and faster than the sun) and why it's numerically harder</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=2h14m31s" target="_blank" class="iabce-timestamp-pill">2:14:31</a>
<span class="iabce-timestamp-text">Brahmāṇḍa Purāṇa full ‑ moon verses; scanning epochs → best fit ~1800 BCE</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=2h19m59s" target="_blank" class="iabce-timestamp-pill">2:19:59</a>
<span class="iabce-timestamp-text">Astropy method: all full moons → filter to equinox ±1 day → the ¼/¾ sector + visible ‑ band test</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=2h26m14s" target="_blank" class="iabce-timestamp-pill">2:26:14</a>
<span class="iabce-timestamp-text">Maitrāyaṇīya "magadi" cross ‑ check; orthogonal evidence converges on 1800 BCE</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=2h33m39s" target="_blank" class="iabce-timestamp-pill">2:33:39</a>
<span class="iabce-timestamp-text">Stellarium (visual) vs astropy (scanning); reliability limits (~3000 BC for sun/moon)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=2h37m02s" target="_blank" class="iabce-timestamp-pill">2:37:02</a>
<span class="iabce-timestamp-text">Eclipse tools for Parāśara's six consecutive eclipses (1496 & 1442 BC windows)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=sWPRYk1Ja4w&t=2h52m04s" target="_blank" class="iabce-timestamp-pill">2:52:04</a>
<span class="iabce-timestamp-text">A 1980 total ‑ solar ‑ eclipse tribute; then the CAHC website, papers and AI ‑ tool caveats</span>
</div>
</div>
</div>
</details>
</div>

<!-- Lecture 7 -->
<div class="iabce-lecture-card">
<details class="iabce-lecture-details">
<summary class="iabce-lecture-summary">
<div class="iabce-lecture-summary-info">
<span class="iabce-lecture-num">Lecture 7</span>
<h3 class="iabce-lecture-title">The Mahāsalilam book; Rohiṇī –Soma as the origin of Indian</h3>
<span class="iabce-lecture-speakers">Presented by: Prof. R. N. Iyengar</span>
</div>
<span class="iabce-lecture-summary-toggle">&plus;</span>
</summary>
<div class="iabce-lecture-body">
<p class="iabce-lecture-desc">astrology Centred on Iyengar's Mahāsalila . He defends the Vedic roots of Vedāṅga‑Jyotiṣa against the "tithi is Babylonian" argument, distinguishes pre ‑ siddhāntic / pre ‑ horāastronomy, and walks the text — the grahas, the Mahāsalilam cosmogony, the moon's phases — building to the Rohiṇī –Soma legend, which he reads as the origin of Indian astrology : Soma's curse and his promise to move equally with all the nakṣatras turns single stars into the equal ‑ sector nakṣatra system, after which nakṣatra ‑ karma, devatāproperties and graha disturbances yield mundane and natal astrology.</p>

<!-- Embedded Video -->
<div class="iabce-video-wrapper">
<iframe src="https://www.youtube.com/embed/z_YAcqrHWh0" title="The Mahāsalilam book; Rohiṇī –Soma as the origin of Indian" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iabce-timestamps-title">Lecture Timestamps</div>
<div class="iabce-timestamps-grid">
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=z_YAcqrHWh0&t=0m05s" target="_blank" class="iabce-timestamp-pill">0:05</a>
<span class="iabce-timestamp-text">The Mahāsalilam book; "this is the fourth day"; why linking Veda to Vedāṅga is hard</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=z_YAcqrHWh0&t=2m28s" target="_blank" class="iabce-timestamp-pill">2:28</a>
<span class="iabce-timestamp-text">How Lagadha's Jyotiṣa was retrieved (forgottenślokas recited before meals); the Śraviṣṭhāquestion</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=z_YAcqrHWh0&t=13m01s" target="_blank" class="iabce-timestamp-pill">13:01</a>
<span class="iabce-timestamp-text">The "tithi is Babylonian" argument (Pingree, Neugebauer); Eggeling omitting "tithi" in translation</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=z_YAcqrHWh0&t=25m38s" target="_blank" class="iabce-timestamp-pill">25:38</a>
<span class="iabce-timestamp-text">Pre ‑ siddhāntic vs siddhāntic; pre ‑ horā (Vedic) vs horāastrology; jyotiṣa's three streams</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=z_YAcqrHWh0&t=31m55s" target="_blank" class="iabce-timestamp-pill">31:55</a>
<span class="iabce-timestamp-text">Tithi & karaṇa again; "tithi" first used as a limiter in Mahāsalilam (pūrṇa ‑ tithi)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=z_YAcqrHWh0&t=36m50s" target="_blank" class="iabce-timestamp-pill">36:50</a>
<span class="iabce-timestamp-text">The grahas: five tārā ‑ grahas by brightness (rays vs modern magnitude); Budha = "Pañcama"</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=z_YAcqrHWh0&t=37m33s" target="_blank" class="iabce-timestamp-pill">37:33</a>
<span class="iabce-timestamp-text">Dhruva ‑ graha: the northern soma ‑ cup; abhicāra to "turn" a king out of power</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=z_YAcqrHWh0&t=55m58s" target="_blank" class="iabce-timestamp-pill">55:58</a>
<span class="iabce-timestamp-text">Mahāsalilam cosmogony: the cosmic egg, primordial waters (salila), onomatopoeic sounds, geography</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=z_YAcqrHWh0&t=1h01m00s" target="_blank" class="iabce-timestamp-pill">1:01:00</a>
<span class="iabce-timestamp-text">Moon's nonlinear phases; the five ‑ colour tithi mantra; the 16th kalā ; sānāya, daśā , parva</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=z_YAcqrHWh0&t=1h14m32s" target="_blank" class="iabce-timestamp-pill">1:14:32</a>
<span class="iabce-timestamp-text">Graha count (108: five tārā + sun/moon/Rāhu + 101 ketus/comets); Rāhu as the eclipse shadow</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=z_YAcqrHWh0&t=1h30m30s" target="_blank" class="iabce-timestamp-pill">1:30:30</a>
<span class="iabce-timestamp-text">The Rohiṇī –Soma legend = origin of astrology: Dakṣa's daughters, Soma's curse, "move equally" → equal ‑ sector nakṣatras</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=z_YAcqrHWh0&t=2h13m54s" target="_blank" class="iabce-timestamp-pill">2:13:54</a>
<span class="iabce-timestamp-text">Above sun or moon? high/low = the north/Meru direction; the four dvīpas; obliquity</span>
</div>
</div>
</div>
</details>
</div>

<!-- Lecture 8 -->
<div class="iabce-lecture-card">
<details class="iabce-lecture-details">
<summary class="iabce-lecture-summary">
<div class="iabce-lecture-summary-info">
<span class="iabce-lecture-num">Lecture 8</span>
<h3 class="iabce-lecture-title">Time ‑ measurement in ancient India + Rainfall in ancient</h3>
<span class="iabce-lecture-speakers">Presented by: Prof. R. N. Iyengar, Dr. R. S. Hariharan</span>
</div>
<span class="iabce-lecture-summary-toggle">&plus;</span>
</summary>
<div class="iabce-lecture-body">
<p class="iabce-lecture-desc">India The first ~hour finishes Iyengar's astrology thread and his time ‑ measurement talk; the afternoon ("a very good afternoon to everyone," ~1:01:48) is the Rainfall in ancient India talk by R.S. Hariharan, with Iyengar fielding questions. ▸ Session A — Prof. R.N. Iyengar: closing the astrology thread + "How time was measured in ancient India" (0:05 – ~1:01:48) Iyengar first finishes the Rohiṇī –Soma / nakṣatra ‑ karma discussion (a devatāis a fixed "property," not an icon), then gives a self ‑ contained quantitative talk on pre ‑ siddhāntic timekeeping. He traces the day's division into muhūrtas, the problem of measuring the night, and the remarkable solution — Vedic recitation as a chronograph (the bṛhatī ‑ sahasra) and later water ‑ clocks calibrated by reciting a 60 ‑ syllable verse — all under the idea that jyotiṣa is kāla‑vidhāna ‑śāstra.</p>

<!-- Embedded Video -->
<div class="iabce-video-wrapper">
<iframe src="https://www.youtube.com/embed/7FrWQbX_lBc" title="Time ‑ measurement in ancient India + Rainfall in ancient" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iabce-timestamps-title">Lecture Timestamps</div>
<div class="iabce-timestamps-grid">
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=0m05s" target="_blank" class="iabce-timestamp-pill">0:05</a>
<span class="iabce-timestamp-text">Closing the astrology thread: devatā = a fixed property (Kṛttikā = agni), not an icon; why properties persist as the equinox shifts</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=11m23s" target="_blank" class="iabce-timestamp-pill">11:23</a>
<span class="iabce-timestamp-text">New talk: "How was time measured in ancient India?" — the quantitative turn</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=17m02s" target="_blank" class="iabce-timestamp-pill">17:02</a>
<span class="iabce-timestamp-text">Ahorātra = 30 muhūrtas (mirroring the 15 ‑ day pakṣa); rūpasamṛddhi made quantitative</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=19m39s" target="_blank" class="iabce-timestamp-pill">19:39</a>
<span class="iabce-timestamp-text">The five day ‑ parts (prātaḥ , saṅgava, madhyāhna, aparāhna, sāyam)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=24m01s" target="_blank" class="iabce-timestamp-pill">24:01</a>
<span class="iabce-timestamp-text">Measuring the night: the Atirātra yajña; Indra "crossing the night" with the chandas (metres)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=31m57s" target="_blank" class="iabce-timestamp-pill">31:57</a>
<span class="iabce-timestamp-text">The bṛhatī ‑ sahasra (1000 verses = 36,000 syllables) as a chronograph; recitation = timing</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=36m42s" target="_blank" class="iabce-timestamp-pill">36:42</a>
<span class="iabce-timestamp-text">Field recordings of Ṛgvedic recitation speed (Kashi & Mysore); ~3,650 akṣaras/ghaṭikā ; the ratio matters</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=43m59s" target="_blank" class="iabce-timestamp-pill">43:59</a>
<span class="iabce-timestamp-text">Siddhāntic units: nimeṣa, prāṇa, guru ‑ akṣara; Āryabhaṭa's 21,600</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=48m09s" target="_blank" class="iabce-timestamp-pill">48:09</a>
<span class="iabce-timestamp-text">Water clocks (nāḍikā /ghaṭikā ); the non ‑ linear outflow problem; the dāḍima ‑ puṣpa (logarithmic ‑ weir) shape</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=53m02s" target="_blank" class="iabce-timestamp-pill">53:02</a>
<span class="iabce-timestamp-text">The Līlā ‑ metre verse (60 gurvakṣaras = 1 vighaṭikā ≈ 24 s) for calibration; tested (~23.94 s)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=57m55s" target="_blank" class="iabce-timestamp-pill">57:55</a>
<span class="iabce-timestamp-text">Marriage gaṭikā‑yantra; gaṭikāsthāna inscriptions; recap (Indra, chandas, kāla → jyotiṣa as kāla‑vidhāna) ▸ Session B — Dr. R.S. Hariharan: "Rainfall in ancient India" (~1:01:48 – 2:40) R.S. Hariharan argues that ancient India ran a systematic, ~3,000 ‑ year ‑ old "monsoon science," not just folk weather ‑ lore — drawing on Mahāsalilam (cloud ‑ formation physics), Parāśaratantra (seasonal behaviour, a standardized rain ‑ gauge, a 27 ‑ nakṣatra forecast table) and Kauṭilya's Arthaśāstra (state rainfall data). He shows, via Iyengar's Current Science papers, that the ancient variability statistics broadly match a century of IMD data for central India.</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=1h01m48s" target="_blank" class="iabce-timestamp-pill">1:01:48</a>
<span class="iabce-timestamp-text">Folk weather ‑ signs (ants, damp salt) → the claim of a systematic 3,000 ‑ year monsoon science</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=1h04m01s" target="_blank" class="iabce-timestamp-pill">1:04:01</a>
<span class="iabce-timestamp-text">The four sources: Mahāsalila , Parāśaratantra, MaitrāyaṇīyaĀraṇyaka, Iyengar's Current Science papers</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=1h08m39s" target="_blank" class="iabce-timestamp-pill">1:08:39</a>
<span class="iabce-timestamp-text">Why it mattered: ~75% of India's water in four months; monsoon failure as civilizational emergency</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=1h13m30s" target="_blank" class="iabce-timestamp-pill">1:13:30</a>
<span class="iabce-timestamp-text">Mahāsalila 's cloud physics: convection + windshear → cumulonimbus; "where wind stops, it rains"</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=1h21m08s" target="_blank" class="iabce-timestamp-pill">1:21:08</a>
<span class="iabce-timestamp-text">Kālidāsa's Meghadūta verse catches the same physics (smoke, fire, water, wind)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=1h23m48s" target="_blank" class="iabce-timestamp-pill">1:23:48</a>
<span class="iabce-timestamp-text">Parāśara's six ‑ month precursor model (winter sets up the monsoon) ≈ the ENSO lag</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=1h26m35s" target="_blank" class="iabce-timestamp-pill">1:26:35</a>
<span class="iabce-timestamp-text">The defining statement: the southwest wind brings the rain (matches the real monsoon)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=1h30m07s" target="_blank" class="iabce-timestamp-pill">1:30:07</a>
<span class="iabce-timestamp-text">The standardized rain ‑ gauge ( āḍhaka/droṇa); Kauṭilya's regional rainfall figures as state data</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=1h32m38s" target="_blank" class="iabce-timestamp-pill">1:32:38</a>
<span class="iabce-timestamp-text">The 27 ‑ nakṣatra forecast table read as a probability distribution (drought → bumper years)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=1h37m52s" target="_blank" class="iabce-timestamp-pill">1:37:52</a>
<span class="iabce-timestamp-text">Iyengar's test: ancient table vs 1901–2002 IMD data (Indore); CV ≈ 37% matches modern ~31–42%</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=7FrWQbX_lBc&t=1h53m10s" target="_blank" class="iabce-timestamp-pill">1:53:10</a>
<span class="iabce-timestamp-text">Multi ‑ year cycles (5/7/18/60 ‑ yr); the Venus ‑ visibility omen as an ENSO proxy; Sarasvatī ‑ drought Q&A</span>
</div>
</div>
</div>
</details>
</div>

<!-- Lecture 9 -->
<div class="iabce-lecture-card">
<details class="iabce-lecture-details">
<summary class="iabce-lecture-summary">
<div class="iabce-lecture-summary-info">
<span class="iabce-lecture-num">Lecture 9</span>
<h3 class="iabce-lecture-title">"Religious astronomy" (Prof. R.N. Iyengar)</h3>
<span class="iabce-lecture-speakers">Presented by: Prof. R. N. Iyengar</span>
</div>
<span class="iabce-lecture-summary-toggle">&plus;</span>
</summary>
<div class="iabce-lecture-body">
<p class="iabce-lecture-desc">Opening with a salute to Vālmīki, Iyengar turns to how Vedic/pre ‑ siddhāntic astronomy underpins everyday Hindu practice. He explains the purāṇic billions ‑ of ‑ years (kāla must start from Sūrya), reframes navagraha worship (a graha is a "holder" of soma/kāla, not a planet to be worshipped), gives the indigenous graha order and the planets' real visibility geometry (Venus's pentagon, Mercury's bow), and closes on comets as disaster ‑ omens in the Mahābhārata and the Sarasvatī 's drying. The video ends with Vedic chanting.</p>

<!-- Embedded Video -->
<div class="iabce-video-wrapper">
<iframe src="https://www.youtube.com/embed/4Et9xOQ7sA4" title="&quot;Religious astronomy&quot; (Prof. R.N. Iyengar)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iabce-timestamps-title">Lecture Timestamps</div>
<div class="iabce-timestamps-grid">
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=4Et9xOQ7sA4&t=0m05s" target="_blank" class="iabce-timestamp-pill">0:05</a>
<span class="iabce-timestamp-text">Salute to Vālmīki & the Rāmāyaṇa; framing "religious astronomy"</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=4Et9xOQ7sA4&t=3m17s" target="_blank" class="iabce-timestamp-pill">3:17</a>
<span class="iabce-timestamp-text">Why the purāṇas reach billions of years: kāla must start from Sūrya's "birth"; sanātana = an effectively infinite past</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=4Et9xOQ7sA4&t=5m03s" target="_blank" class="iabce-timestamp-pill">5:03</a>
<span class="iabce-timestamp-text">Maitrāyaṇīya anchor (Sūrya in Maghā ~1800 BC); Sūrya as the door to akāla (para‑vidyā )</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=4Et9xOQ7sA4&t=10m14s" target="_blank" class="iabce-timestamp-pill">10:14</a>
<span class="iabce-timestamp-text">Navagraha worship reframed: a graha is a "holder" of soma/kāla, not "planet worship"; Vedic vs tantric vsāgamika</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=4Et9xOQ7sA4&t=11m47s" target="_blank" class="iabce-timestamp-pill">11:47</a>
<span class="iabce-timestamp-text">Where planets appear in the Veda; the lost Kāṭhaka (Kashmir) tradition; the grahā‑brāhmaṇa</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=4Et9xOQ7sA4&t=16m22s" target="_blank" class="iabce-timestamp-pill">16:22</a>
<span class="iabce-timestamp-text">The Vedic graha order: Āditya, thenŚukra (foremost, Bhārgava), Bṛhaspati, Budha, Mars, Śani, Chandra, Rāhu, Ketu + Agastya & Dhruva</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=4Et9xOQ7sA4&t=21m05s" target="_blank" class="iabce-timestamp-pill">21:05</a>
<span class="iabce-timestamp-text">The weekday order is foreign ‑ induced; the indigenous order putsŚukra right afterĀditya</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=4Et9xOQ7sA4&t=23m43s" target="_blank" class="iabce-timestamp-pill">23:43</a>
<span class="iabce-timestamp-text">Śukra's five ‑ fold (pañcakoṇa/pentagon) visibility; Parāśara's Venus rise/set day ‑ counts (55/65/70/81/90…)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=4Et9xOQ7sA4&t=30m56s" target="_blank" class="iabce-timestamp-pill">30:56</a>
<span class="iabce-timestamp-text">Budha's bow ‑ shaped (cāpākāra) visibility pattern (plotted by Sunder)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=4Et9xOQ7sA4&t=32m15s" target="_blank" class="iabce-timestamp-pill">32:15</a>
<span class="iabce-timestamp-text">Aśvalāyana ‑ pariśiṣṭa worship details vs the commercially ‑ sold "yantra" with wrong shapes (sun = circle, Mars = triangle, Rāhu = winnowing ‑ fan, Ketu = flag)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=4Et9xOQ7sA4&t=35m41s" target="_blank" class="iabce-timestamp-pill">35:41</a>
<span class="iabce-timestamp-text">Graha ‑ utpatti (birth of planets by nakṣatra) → matches the magādi / ~1800 BC equinoctial ‑ full ‑ moon period</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=4Et9xOQ7sA4&t=38m11s" target="_blank" class="iabce-timestamp-pill">38:11</a>
<span class="iabce-timestamp-text">Mahābhārata Rāhu–Ketu: Nīlakaṇṭha's error (Ketu as 180° from Rāhu); comets as the real disaster ‑ indicators</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=4Et9xOQ7sA4&t=43m23s" target="_blank" class="iabce-timestamp-pill">43:23</a>
<span class="iabce-timestamp-text">Comet imagery & disaster (Mausala parva, Skanda Purāṇa): Sarasvatīdrying, famine, migration; Kārttikeya/Muruga as a Vedic Agni ‑ form</span>
</div>
</div>
</div>
</details>
</div>

<!-- Lecture 10 -->
<div class="iabce-lecture-card">
<details class="iabce-lecture-details">
<summary class="iabce-lecture-summary">
<div class="iabce-lecture-summary-info">
<span class="iabce-lecture-num">Lecture 10</span>
<h3 class="iabce-lecture-title">Valedictory session</h3>
<span class="iabce-lecture-speakers">Presented by: Prof. R. N. Iyengar, Prof. Vīranārāyaṇa Pāṇḍuraṅgī, Dr. Ganti S. Murthy, Dr. R. S. Hariharan</span>
</div>
<span class="iabce-lecture-summary-toggle">&plus;</span>
</summary>
<div class="iabce-lecture-body">
<p class="iabce-lecture-desc">The closing session — not a lecture but the workshop's valedictory. After Iyengar frames it and introduces the dignitaries, participant feedback (backgrounds spanning physics, Sanskrit, Ayurveda, Himalayan archaeology, UX design, farming, school ‑ teaching and IT), followed by two formal addresses — Prof. Vīranārāyaṇa Pāṇḍuraṅgī (a Vedānta scholar) on the neglect of Vedic studies, and chief guest Dr. Ganti Murthy (IKS national coordinator) on the division's outreach and the call to carry the paramparāforward. It ends with a formal vote of thanks.</p>

<!-- Embedded Video -->
<div class="iabce-video-wrapper">
<iframe src="https://www.youtube.com/embed/PCT5TH69QEI" title="Valedictory session" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iabce-timestamps-title">Lecture Timestamps</div>
<div class="iabce-timestamps-grid">
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=PCT5TH69QEI&t=0m07s" target="_blank" class="iabce-timestamp-pill">0:07</a>
<span class="iabce-timestamp-text">Iyengar opens the valedictory; an invocation/song by a participant</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=PCT5TH69QEI&t=3m20s" target="_blank" class="iabce-timestamp-pill">3:20</a>
<span class="iabce-timestamp-text">Iyengar introduces Dr. Ganti Murthy (IKS national coordinator); on CAHC, the research centre, and the need for young manpower</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=PCT5TH69QEI&t=11m04s" target="_blank" class="iabce-timestamp-pill">11:04</a>
<span class="iabce-timestamp-text">Feedback session begins: participants speak one by one</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=PCT5TH69QEI&t=15m45s" target="_blank" class="iabce-timestamp-pill">15:45</a>
<span class="iabce-timestamp-text">Iyengar introduces Prof. Vīranārāyaṇa Pāṇḍuraṅgī (Vedānta scholar, Pūrṇaprajña Research Institute)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=PCT5TH69QEI&t=25m42s" target="_blank" class="iabce-timestamp-pill">25:42</a>
<span class="iabce-timestamp-text">A designer's feedback frames Iyengar's evidence ‑ first, "let ‑ you ‑ decide" approach (a recurring theme)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=PCT5TH69QEI&t=51m05s" target="_blank" class="iabce-timestamp-pill">51:05</a>
<span class="iabce-timestamp-text">Iyengar on why this was a "workshop," not a "course": teaching pre ‑ siddhāntic astronomy through stories</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=PCT5TH69QEI&t=1h43m48s" target="_blank" class="iabce-timestamp-pill">1:43:48</a>
<span class="iabce-timestamp-text">Iyengar on bringing in more experts next time + an assignment to participants (compile a reference list)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=PCT5TH69QEI&t=2h08m56s" target="_blank" class="iabce-timestamp-pill">2:08:56</a>
<span class="iabce-timestamp-text">Prof. Pāṇḍuraṅgī's address: the vastness of the śāstras vs neglected Vedic studies; why arthavāda/stories are essential to reading the Veda; praise for Iyengar</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=PCT5TH69QEI&t=2h30m30s" target="_blank" class="iabce-timestamp-pill">2:30:30</a>
<span class="iabce-timestamp-text">"Iyengar is a history ‑ maker, not a historian"; the punarutthāna (revival) theme</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=PCT5TH69QEI&t=2h34m42s" target="_blank" class="iabce-timestamp-pill">2:34:42</a>
<span class="iabce-timestamp-text">Chief guest Dr. Ganti Murthy's address: IKS outreach (Panchatantra in 10 art ‑ forms/12 languages → 1500 schools; the Mahākāla conference & national astronomical ‑ instrument competition; observational astronomy, rigor; carrying the paramparāforward)</span>
</div>
<div class="iabce-timestamp-row">
<a href="https://www.youtube.com/watch?v=PCT5TH69QEI&t=2h53m35s" target="_blank" class="iabce-timestamp-pill">2:53:35</a>
<span class="iabce-timestamp-text">Formal vote of thanks by Dr. R. S. Hariharan: Prof. M. D. Srinivas, Prof. Ganti S. Murthy, Prof. Vīranārāyaṇa N. K. Pāṇḍuraṅgī, Dr. Chenraj Roychand, Prof. R. N. Iyengar, Dr. Shankar Rajaraman, Sunder Chakravarty, the organising team (Roopa Ramesh, Smitha Bhatta, Vani S, Warija Adiga) and participants; workshop declared concluded</span>
</div>
</div>
</div>
</details>
</div>

</div>
</div>
