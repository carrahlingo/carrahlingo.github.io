---
layout: post
title: "PowerSource Magazine: Eclectic Local History, Locally Available"
date: 2022-12-05
tags: [Publication]
image: /static/img/blog/magazine/berkeley 1.png
---

<style>
.panel, .panel-body { background-color: #faf8f5 !important; }
[data-theme="dark"] .panel, [data-theme="dark"] .panel-body { background-color: #0f0f0f !important; }

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

[data-theme="dark"] .slideshow-arrow {
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
}

[data-theme="dark"] .slideshow-arrow:hover {
  background: rgba(255, 255, 255, 0.4);
}

[data-theme="dark"] .slideshow-arrow:disabled:hover {
  background: rgba(255, 255, 255, 0.25);
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
  <img class="slideshow-img" id="slideshow-img" src="/static/img/blog/magazine/berkeley 1.png" alt="PowerSource Magazine article page 1 of 4">
  <div class="slideshow-controls">
    <button class="slideshow-arrow" id="prev-btn" aria-label="Previous page" disabled>&#8249;</button>
    <button class="slideshow-arrow" id="next-btn" aria-label="Next page">&#8250;</button>
  </div>
</div>
<div class="slideshow-counter" id="slideshow-counter">1 / 4</div>

<script>
(function() {
  var pages = [
    '/static/img/blog/magazine/berkeley 1.png',
    '/static/img/blog/magazine/Berkeley 2.png',
    '/static/img/blog/magazine/Berkeley 3.png',
    '/static/img/blog/magazine/Berkeley 4.png'
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

History buffs and Lowcountry locals might find my latest PowerSource feature interesting!

I spent a day at the Berkeley County Museum & Heritage Center to check out their new "The Revolution Comes South" exhibit, learn about nurse-midwife Maude Callen, and visit with Museum Director Chelsy Proper.

<details class="article-transcript">
<summary><strong>Read the full article</strong></summary>

<h2>Eclectic Local History, Locally Available</h2>

<p><em>By Carrah Lingo | Photography by Paul Zoeller</em></p>

<p>Walking up the steps and into the museum feels familiar if you've spent a significant amount of your life in the South: the wide wooden porch, the noisy opening of the front door, and the sound of your shoes sliding across the hardwood floor as you take your first steps into the history-filled building. It's warm, inviting, and reminiscent of exploring the old artifacts at your grandparents' house as a child. The building that houses the Berkeley County Museum and Heritage Center was brand new when it opened almost 30 years ago but was designed to resemble an old, traditional home.</p>

<p>Museum visitors don't get any of the stuffy or more tourist-pleasing vibes like they might from some of the museums sprinkled throughout the state. The fear of breaking something doesn't cross your mind as you navigate your way through the numerous exhibits around the museum.</p>

<p>Its location within Old Santee Canal Park might cause one to think the museum is operated by Santee Cooper, but it's not. It's a nonprofit governed by a board of directors and operates with its own staff and volunteers, including Shanda Phillips, who is the museum's Chairwoman of the Board and also a Senior Associate of Major Assets and Liabilities with Santee Cooper.</p>

<p>"I've been volunteering at the Berkeley County Museum for almost 15 years," said Phillips. "I've always been really fascinated by history, and I think it's incredibly valuable to educate our community on what's happened right here where we live."</p>

<p>As you take your first steps into the museum, you will probably be greeted by the friendly Museum Director, Chelsy Proper. Proper has served in her role since spring of 2019, about a year before the COVID-19 pandemic upheaved the world.</p>

<p>"When the pandemic hit, we had to close our doors," said Proper. "It was rough having to put a stop to our educational programs, but it gave us time to focus on some improvements at the museum. One big project we were able to complete was our new 'The Revolution Comes South' exhibit highlighting the Revolutionary War's impacts on Berkeley County."</p>

<p>The exhibit is impressive and immediately sets the scene for 1780-1782, the brief length of time when Berkeley County was involved in the American Revolution. Visitors will learn about the major players in the county like Francis Marion, Henry Lee III and Thomas Sumter, to name a few. It boasts locally discovered cannons, a British gunboat replica, and other Revolutionary War-era artifacts found in Berkeley County. Fort Fair Lawn, a British fort built during the Revolutionary War, is also right around the corner from the museum, and is one of the only two forts from the American Revolutionary War that exists in South Carolina.</p>

<p>As you stroll through the building, you'll see exhibits and artifacts featuring the evolution of ancient animals, Native Americans and the tools they used, Colonial Berkeley County, 20th century medicine, rural electrification and more.</p>

<p>One unique exhibit is dedicated to Berkeley County's Maude Callen.</p>

<p>Callen moved to Pineville, Berkeley County, as a missionary nurse-teacher for the Protestant Episcopal Church in 1923. She turned two rooms in her home into a clinic where she treated the poor. Later, she became a midwife, and in 1936 the Berkeley County Health Department appointed Callen as a public health nurse.</p>

<p>In December 1951, LIFE Magazine published a photo essay about her tireless work in rural South Carolina. More than $20,000 was donated as a results of the LIFE Magazine feature and, with that money, the Maude Callen Clinic was built in her honor. It was where she would work until she retired in 1971. After her retirement, Callen continued to be recognized and celebrated. She was invited by President Reagan to the White House (which she declined because she felt she was needed at the Senior Citizens where she volunteered), she received an honorary degree from the Medical University of South Carolina, and she was elected to the South Carolina Hall of Fame.</p>

<p>Rounding the corner of Callen's exhibit, the next stop on your time-traveling journey is the display featuring the history of Santee Cooper. There, visitors can learn the South Carolina Public Service Authority (also known as Santee Cooper) was established when then-Governor Blackwood signed a bill in 1943 to dam the Santee River, clear land for two large reservoirs, and construct a dam for a hydroelectric plant. The goal was to electrify rural South Carolina and help spark prosperity in the Depression-ravaged state, where life for many South Carolinians looked bleak. In 1941, President Roosevelt named Santee Cooper's Pinopolis Power Plant a national defense project, and construction accelerated when America joined World War II so Santee Cooper could generate electricity to support the Allied war effort. In February 1942, electricity started flowing and the utility began "pushing back the darkness."</p>

<p>The museum operates with two part-time staff members and six volunteers. Their mission is straightforward: "To collect, preserve, research, exhibit, and interpret the diverse cultural and natural history of Berkeley County, South Carolina. Through rotating and permanent exhibits, we hope to inform and inspire visitors for years to come."</p>

<p>"It takes a lot of time and work to put together these exhibits," said Proper. "From researching, writing and editing, to collecting artifacts, it's absolutely one of my favorite parts of the job."</p>

<p>What does a day in the life of the Berkeley County Museum Director look like? Well, being a director of a small museum means wearing a lot of different hats. With two employees, all museum duties are shared between the director and the assistant. Check out Proper's schedule below, in her own words, to get an idea of what it takes to run the museum.</p>

<p><strong>8:45 a.m. Arrive.</strong> I usually do a quick walkthrough of the museum to make sure there aren't any messes, etc. I also check the mail on my way in. Not museum-related, but I have a long commute, so I've listened to a lot of audiobooks the past 2 1/2 years.</p>

<p><strong>9 a.m. Turn on all the lights,</strong> unlock the front door, and prepare for the day. The museum is officially open! Sometime before the first customer arrives, I open the gift shop (do daily money, etc.), turn on video displays, make sure the visitor sign-in sheet has space, and check bathrooms.</p>

<p><strong>12:30 p.m. Lunch.</strong> If I'm here alone, I usually close the museum for about 30 minutes so I can eat without having customers come in. It's still a working lunch, though; I usually continue whatever computer-related thing I was doing as I eat.</p>

<p><strong>3:45 p.m. The last visitors</strong> for the day can begin their visit at this time. If no one is here, I start doing end-of-day procedures like counting the cash drawer and turning off the electronics.</p>

<p><strong>4 p.m. The museum closes.</strong> I finish the end-of-day procedures and then head home.</p>

<p>Then there are other things that happen less frequently, but are just as important like conducting presentations at schools or for groups, researching, writing, and establishing new exhibits and signage, and accepting artifacts and processing them into the collection.</p>

<p>Running a museum isn't easy, of course. It requires volunteers and visitors to keep everything running smoothly.</p>

<p>"More funding would allow us to make some much-needed updates to the museum's overall design so we can apply a sense of community to exhibits," said Proper. "It also allows us to hire staff, better equip our volunteers, and of course continue new projects."</p>

<p>The next project in the works is a trail that starts at the museum, winds through the park, and ends at Fort Fair Lawn. Once it's complete in early 2023, it'll be an easy-to-walk, 1.5-mile path.</p>

<p>"We want both longtime locals and new residents to feel proud and represented in their community," said Proper. "On average, we'll see around 200 to 300 visitors a month, but our dream would be to double that and get to 1,000."</p>

<p>Whether your family has been in Berkeley County for generations, or you just relocated to the area for a new job or to retire, there's a rich history for you to explore, and you can gain a lot of that knowledge at Berkeley County Museum and Heritage Center.</p>

<p>If you are interested in volunteering at the museum, please contact Chelsy Proper at info@berkeleymuseum.org. You can learn more about the museum and how to support it at berkeleymuseum.org.</p>

</details>
