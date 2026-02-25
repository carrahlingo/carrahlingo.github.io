---
layout: post
title: "The National Tigers for Tigers Coalition Resource Guide"
date: 2016-02-06
tags: [Leadership Development, Publication]
image: /static/img/blog/t4t/page-01.png
excerpt: "I had the opportunity to contribute to the writing, editing, and design of the National Tigers for Tigers Coalition Resource Guide — a handbook we shipped out to our student organizations across the country."
---

<style>
.panel, .panel-body { background-color: #faf8f5 !important; }

.slideshow {
  position: relative;
  max-width: 100%;
  margin: 1.5rem auto;
}

.slideshow-spread {
  display: flex;
  gap: 4px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.slideshow-spread img {
  display: block;
  width: 50%;
  height: auto;
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

.slideshow-pdf-link {
  text-align: left;
  margin-top: 12px;
}
</style>

<div class="slideshow" id="slideshow">
  <div class="slideshow-spread" id="slideshow-spread">
    <img id="slideshow-left" src="/static/img/blog/t4t/page-01.png" alt="T4T Student Resource Guide page 1">
    <img id="slideshow-right" src="/static/img/blog/t4t/page-02.png" alt="T4T Student Resource Guide page 2">
  </div>
  <div class="slideshow-controls">
    <button class="slideshow-arrow" id="prev-btn" aria-label="Previous spread" disabled>&#8249;</button>
    <button class="slideshow-arrow" id="next-btn" aria-label="Next spread">&#8250;</button>
  </div>
</div>
<div class="slideshow-counter" id="slideshow-counter">Pages 1–2 (preview · 98 pages total)</div>
<script>
(function() {
  var spreads = [
    ['/static/img/blog/t4t/page-01.png', '/static/img/blog/t4t/page-02.png'],
    ['/static/img/blog/t4t/page-03.png', '/static/img/blog/t4t/page-04.png'],
    ['/static/img/blog/t4t/page-05.png', '/static/img/blog/t4t/page-06.png'],
    ['/static/img/blog/t4t/page-07.png', '/static/img/blog/t4t/page-08.png'],
    ['/static/img/blog/t4t/page-09.png', '/static/img/blog/t4t/page-10.png'],
    ['/static/img/blog/t4t/page-11.png', '/static/img/blog/t4t/page-12.png']
  ];
  var current = 0;
  var leftImg = document.getElementById('slideshow-left');
  var rightImg = document.getElementById('slideshow-right');
  var prevBtn = document.getElementById('prev-btn');
  var nextBtn = document.getElementById('next-btn');
  var counter = document.getElementById('slideshow-counter');

  function preload(index) {
    for (var j = Math.max(0, index - 1); j <= Math.min(spreads.length - 1, index + 1); j++) {
      var p1 = new Image(); p1.src = spreads[j][0];
      var p2 = new Image(); p2.src = spreads[j][1];
    }
  }

  function update() {
    leftImg.src = spreads[current][0];
    rightImg.src = spreads[current][1];
    var start = current * 2 + 1;
    var end = start + 1;
    leftImg.alt = 'T4T Student Resource Guide page ' + start;
    rightImg.alt = 'T4T Student Resource Guide page ' + end;
    counter.textContent = 'Pages ' + start + '\u2013' + end + ' (preview \u00b7 98 pages total)';
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === spreads.length - 1;
    preload(current);
  }

  prevBtn.addEventListener('click', function() {
    if (current > 0) { current--; update(); }
  });

  nextBtn.addEventListener('click', function() {
    if (current < spreads.length - 1) { current++; update(); }
  });

  preload(0);
})();
</script>

I had the opportunity to contribute to the writing, editing, and design of the National Tigers for Tigers Coalition Resource Guide — a handbook we shipped out to our student organizations across the country. It covers everything from managing finances and recruiting members to advocating to Congress and fundraising, all with the goal of helping campus clubs grow and thrive. It was a true team effort and one of those projects I'm really proud to have been a part of.
