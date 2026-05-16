---
layout: post
title: "PowerSource Magazine: Making Their Mark"
date: 2021-03-01
tags: [Publication, Diversity & Inclusion]
image: /static/img/blog/magazine/Making their mark_1.png
emoji: "🏆"
excerpt: "I have been waiting months to share this PowerSource feature I wrote highlighting Terry Stinson and Monique Washington at Santee Cooper..."
description: "A PowerSource Magazine feature spotlighting Terry Stinson and Monique Washington — two leaders making their mark in diversity and inclusion at Santee Cooper."
---

<style>
.slideshow {
  position: relative;
  max-width: 100%;
  margin: 1.5rem auto;
}

.slideshow-img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.slideshow-controls {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
}

.slideshow-arrow {
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  margin: 0 8px;
  transition: background 150ms ease, opacity 150ms ease;
  box-shadow: none;
  text-decoration: none;
  padding: 0;
}

.slideshow-arrow:hover {
  background: rgba(0, 0, 0, 0.65);
  box-shadow: none;
}

.slideshow-arrow:disabled {
  opacity: 0.3;
  cursor: default;
}

.slideshow-arrow:disabled:hover {
  background: rgba(0, 0, 0, 0.45);
}


.slideshow-counter {
  text-align: center;
  font-size: 0.9rem;
  color: var(--secondary-color);
  margin-top: 8px;
}

.article-transcript summary {
  cursor: pointer;
  color: var(--link-color);
  box-shadow: inset 0 -0.45em 0 var(--link-highlight);
  display: inline;
  transition: box-shadow 120ms ease, color 120ms ease;
}

.article-transcript summary:hover,
.article-transcript summary:focus {
  color: var(--font-color);
  box-shadow: inset 0 -0.9em 0 var(--link-highlight);
}

.article-transcript summary::-webkit-details-marker {
  display: none;
}

.article-transcript summary::marker {
  content: "";
}
</style>

<div class="slideshow" id="slideshow">
  <img class="slideshow-img" id="slideshow-img" src="/static/img/blog/magazine/Making their mark_1.png" alt="PowerSource Magazine article page 1 of 3">
  <div class="slideshow-controls">
    <button class="slideshow-arrow" id="prev-btn" aria-label="Previous page" disabled>&#8249;</button>
    <button class="slideshow-arrow" id="next-btn" aria-label="Next page">&#8250;</button>
  </div>
</div>
<div class="slideshow-counter" id="slideshow-counter">1 / 3</div>

<script>
(function() {
  var pages = [
    '/static/img/blog/magazine/Making their mark_1.png',
    '/static/img/blog/magazine/Making their mark_2.png',
    '/static/img/blog/magazine/Making their mark_3.png'
  ];
  var current = 0;
  var img = document.getElementById('slideshow-img');
  var prevBtn = document.getElementById('prev-btn');
  var nextBtn = document.getElementById('next-btn');
  var counter = document.getElementById('slideshow-counter');

  // Preload images
  pages.forEach(function(src) {
    var preload = new Image();
    preload.src = src;
  });

  function update() {
    img.src = pages[current];
    img.alt = 'PowerSource Magazine article page ' + (current + 1) + ' of ' + pages.length;
    counter.textContent = (current + 1) + ' / ' + pages.length;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === pages.length - 1;
  }

  prevBtn.addEventListener('click', function() {
    if (current > 0) { current--; update(); }
  });

  nextBtn.addEventListener('click', function() {
    if (current < pages.length - 1) { current++; update(); }
  });
})();
</script>

I have been waiting months to share this PowerSource feature I wrote highlighting Terry Stinson and Monique Washington at Santee Cooper.

Please take a few minutes to read about these two amazing women's determination for success and the challenges they've had to overcome to get there.

*This story first appeared in The Community Times Magazine in its Dec.-Jan. 2020-2021 issue.*

<details class="article-transcript">
<summary><strong>Read the full article</strong></summary>

<h2>Making Their Mark</h2>

<p><em>By Carrah Lingo | Photos by Paul Zoeller</em></p>

<p>The challenges brought on by the COVID-19 pandemic alongside the increased awareness of violence against Black and Brown people have helped establish 2020 as a year that will live in infamy.</p>

<p>The corporate world has been expected to adjust its business practices in response to the pandemic by creating a "new normal," a term every American is tired of hearing. At the same time, our nation's people are also expected to navigate through a society where police shootings pop up in our social media feeds. What role do companies play in delving into the nationwide discussion of racial injustice? Santee Cooper believes it's a pivotal one.</p>

<p>Change is occurring at Santee Cooper, and at a much-needed time as the past few years racial injustice nationally has spurred young and old alike to organize for Black and Brown lives and fight for positive change. That change at Santee Cooper is coming directly from the executive level in both vocal and written directives regarding diversity, equity and inclusion.</p>

<p>"The biggest change is the commitment from the top and the fact that we have established the new Inclusion, Diversity, and Equity Awareness (IDEA) Council, which has a primary focus on diversity, inclusion and equity," said Monique Washington, Chief Audit Executive and a co-sponsor of the IDEA Council at Santee Cooper. "This tells me we are interested, as an organization, in teaching and encouraging each other to embrace differences and seek out commonalities."</p>

<p>Prior to Santee Cooper, Washington worked at Healthsource as a medical underwriter and analyst for almost five years. In 1997, her company was acquired by Cigna Corp, a Philadelphia-based company with an office in Raleigh, and because she was in the final stages of completing her MBA at The Citadel in Charleston, she applied to Santee Cooper.</p>

<p>Twenty-one years later she's earned an executive-level position as Chief Audit Executive and is the first Black woman to do so at the company.</p>

<p>According to data gathered by McKinsey & Company, in 2019 women of color represented 18% of entry-level positions, 12% of managerial positions and only 4% of C-suite positions. Also, senior-level women are almost twice as likeley as women overall to be considered "onlys." Meaning, they are the only or one of the only women in the room at work. The study explained, "Women who are 'onlys' are more likely than women who work with other women to feel pressure to work more and to experience microaggressions, including having to provide additional evidence of their competence." Black women experience this even more.</p>

<p>When asked about what's motivated her to work as hard as she has, Washington said a tidbit she heard from her grandmother when she was 5 years old always stuck with her.</p>

<p>"One day I was watching her fix her hair while laying across her bed and I asked her why she always dressed up to go out. She turned around, looked me right in the eye and said, 'When I step out of this house, I represent me, your grandfather, our family and our race. Same for you, and don't embarrass me."</p>

<p>The most notable recent step Santee Cooper has made, and the one Washington is most excited about, is the creation of the IDEA Council. The group is comprised of 15 employees from cross-functional work units, and their mission is to explore opportunities to enhance a culture of diversity, equity and inclusion in the workplace. They've conducted an initial review of demographics at Santee Cooper and have pinpointed areas of focus for additional analysis. IDEA Council members are currently establishing a strategic plan for future community relationships for them to foster and grow.</p>

<p>Heading up the IDEA Council is Terry Stinson, Santee Cooper's Director of Human Resources.</p>

<p>"Although Santee Cooper has always honored diversity, equity and inclusion, it is now taking a more vocal and intentional effort to demonstrate its position," said Stinson. "There's a stronger sense of purposeful desire to make a difference internally and externally, and that's new."</p>

<p>Stinson received her bachelor's degree from Charleston Southern University, where she was offered her first full-time job in the Financial Aid Department. She excelled at CSU and worked as the Evening College Director and Minority Affairs Coordinator before leaving to join Santee Cooper. Passionate about learning and driven to succeed, Stinson continued her education at The Citadel, earning her MBA while working full-time.</p>

<p>"At a very early age, my mother said, 'There will only be one Terry Annette Bryan. It's up to you to determine what that name means and how you want it to precede you,' and I've always remembered that," said Stinson. "I have always tried to carry myself in a professional manner and display my ability to get along with anyone."</p>

<p>Being both Black and female in an industry and society where white men dominate, accomplishments and success don't come easy. When discussing the challenges Stinson has faced during her career, she said the most common one of all is being unheard.</p>

<p>"Some will say it's probably because I am quiet," said Stinson. "But I was also told that some have mistaken my meekness for weakness. I only speak when I truly have something to say."</p>

<p>Washington understands that experience and further explained, "It's the equivalent of being invited to a party and no one asking you to dance."</p>

<p>However, Washington shared her experience as being an "only" as the biggest challenge overall.</p>

<p>"Simply navigating race and gender in and out of the workplace is most challenging. Throughout my life, I have been either the only or one of very few Black women or Black or Brown people in the room."</p>

<p>Washington looks forward to the day when that is no longer her reality. To persevere, she pushes forward and works hard to overcome whatever obstacles, known or unknown, she may face.</p>

<p>The IDEA Council is leading that push forward at Santee Cooper, and they hit the ground running in 2020 with two video campaigns recognizing Martin Luther King Jr. Day and Black History Month. Siz employees participated in both video series where they shared their sentiments on the meaning of M.L.K. Jr. Day and described the love and support the Black family provides.</p>

<p>"The Black family serves as that safe place or haven where you can come and feel welcomed despite feeling rejected often in the outside world," said Alex McKoy, Senior Engineer of Distribution Planning. "It's also that place where you can come to find assureance and strength in order to face the outside world with new resolve, more determination, more resilience and even, to an extent, with more purpose."</p>

<p>When asked what advice Stinson would give to young people entering the workforce, she said, "Embrace diversity." </p>

<p> Stinson continued, "Learn to welcome change and learn from it. Listen, watch, and know that everything has various layers from which you can learn and excel. Be true to yourself and choose a career you enjoy regardless of the monetary earning potential."</p>

<p>At Santee Cooper, both Washington and Stinson have been true to themselves and are proudly ushering in a new era of intentional inclusion, diversity and equity awareness at the utility.</p>

</details>
