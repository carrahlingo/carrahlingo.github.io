---
layout: post
title: "My First Week as an App Founder"
date: 2026-10-20
tags: [AI, App Development, Social Media, User Research]
image: /static/img/blog/closer-week-one/founder-slide-1.jpg
emoji: "🧪"
excerpt: "Last Thursday, Closer went into beta. Thirteen people downloaded an app I built with AI, with no engineering background, and started using it to show up for their friends."
description: "What my first week as an app founder looked like: launching Closer's beta to 13 testers, fixing a crash the same night, and what the early data says."
published: true
---
<div class="screenshot-carousel" id="founderCarousel">
  <button type="button" class="carousel-arrow carousel-arrow-left" aria-label="Previous slides">&#10094;</button>
  <div class="carousel-track">
    <div class="carousel-page active">
      <a class="carousel-link" href="https://www.instagram.com/p/DesAFSroM6u/?img_index=1" target="_blank" rel="noopener"><img src="/static/img/blog/closer-week-one/founder-slide-1.jpg" alt="Slide 1: Meet the Founder: Carrah. I've spent 12 years building communities. Now I'm building a system to help you strengthen yours."></a>
      <a class="carousel-link" href="https://www.instagram.com/p/DesAFSroM6u/?img_index=2" target="_blank" rel="noopener"><img src="/static/img/blog/closer-week-one/founder-slide-2.jpg" alt="Slide 2: What I Believe. My people come first, and we need a system to make showing up easier, next to photos of Carrah with friends."></a>
    </div>
    <div class="carousel-page">
      <a class="carousel-link" href="https://www.instagram.com/p/DesAFSroM6u/?img_index=3" target="_blank" rel="noopener"><img src="/static/img/blog/closer-week-one/founder-slide-3.jpg" alt="Slide 3: I started Closer to help people show up for old friends and new ones."></a>
      <a class="carousel-link" href="https://www.instagram.com/p/DesAFSroM6u/?img_index=4" target="_blank" rel="noopener"><img src="/static/img/blog/closer-week-one/founder-slide-4.jpg" alt="Slide 4: Why I Started. As we get older, the details slip. Closer remembers the little (and big) things and nudges you to check in, so you can show up for your people."></a>
    </div>
    <div class="carousel-page" style="justify-content: center;">
      <a class="carousel-link" style="flex: 0 1 calc(50% - 10px);" href="https://www.instagram.com/p/DesAFSroM6u/?img_index=5" target="_blank" rel="noopener"><img src="/static/img/blog/closer-week-one/founder-slide-5.jpg" alt="Slide 5: DM us your email to join the waitlist, and share this post with a friend."></a>
    </div>
  </div>
  <button type="button" class="carousel-arrow carousel-arrow-right" aria-label="Next slides">&#10095;</button>
  <div class="carousel-dots">
    <button type="button" class="carousel-dot active" aria-label="Go to slides 1 and 2"></button>
    <button type="button" class="carousel-dot" aria-label="Go to slides 3 and 4"></button>
    <button type="button" class="carousel-dot" aria-label="Go to slide 5"></button>
  </div>
</div>
<script>
(function () {
  var root = document.getElementById("founderCarousel");
  if (!root) return;
  var pages = root.querySelectorAll(".carousel-page");
  var dots = root.querySelectorAll(".carousel-dot");
  var index = 0;

  function show(i) {
    index = (i + pages.length) % pages.length;
    pages.forEach(function (p, idx) { p.classList.toggle("active", idx === index); });
    dots.forEach(function (d, idx) { d.classList.toggle("active", idx === index); });
  }

  root.querySelector(".carousel-arrow-left").addEventListener("click", function () { show(index - 1); });
  root.querySelector(".carousel-arrow-right").addEventListener("click", function () { show(index + 1); });
  dots.forEach(function (d, idx) { d.addEventListener("click", function () { show(idx); }); });

  // Swipe on phones
  var startX = null;
  root.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
  root.addEventListener("touchend", function (e) {
    if (startX === null) return;
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
    startX = null;
  });
})();
</script>

Last Thursday, Closer went into beta. Thirteen people downloaded [an app I designed and built with AI](/closer-app-friendships-needed.html), with no engineering background, and started using it to show up for their friends. 💜

I've spent 12 years in comms and community, building ambassador programs, workforce development groups, and more, so I knew launch week would be busy. Here's what it looked like.

## Every tester, in the loop

A beta runs on communication. Before anyone opened the app on TestFlight, Apple's beta platform, I wrote a kickoff email so testers knew what to expect, built Google feedback forms, and scheduled weekly check-in emails through early November. Testers can also send feedback straight from the app. Every channel leads back to one question: what would make this better for you?

## The night iOS 27 broke everything

A few hours after launch, I found out the app crashed the second it opened on iOS 27, Apple's newest update. Not quite the debut I pictured. 😅 I tracked down the cause, shipped a fixed version that same night, and emailed every tester clear steps to update.

## What the data says

I set up product analytics in PostHog to track the moments that matter, not just downloads. Five days in:

- Testers have added 56 friends.
- They've caught up with friends 11 times.
- Every tester who finished setup turned on Weekly Connections.

That last one means the most to me. Weekly Connections is one notification every Sunday evening that previews your week ahead: the friends worth a hello, plus the occasions coming up. Closer is about building new habits, and this is my favorite one. It takes the Sunday scaries and turns them into something to look forward to: a quick look at the week ahead and the people you get to connect with.

The data also raised a question I can't answer yet. Almost half of testers skipped adding friends during setup. That's first on my list for tester conversations: why did you skip it? Once I understand the why, I'll design the fix.

## Built on 7 conversations

Before I built anything, I did user research: 7 interviews about people's closest friendships. Five of the 7 people brought up guilt about not keeping in touch. So Closer's reminders are gentle by design. They nudge, and they never scold.

## 9x reach & 12% engagement

This month I launched Closer on [Instagram](https://www.instagram.com/closerfriendship/) and [TikTok](https://www.tiktok.com/@closerfriendship). Our first Instagram post reached 1,973 people, about 9 times our follower count, with a 12% engagement rate. For a new account, that told me the idea resonates far beyond the people who already know me.

## The balancing act

The hardest part right now is building the app and building the excitement at the same time. New people join the waitlist every day, and they're ready for it. Meanwhile, I'm reading every piece of tester feedback and turning it into the next version. It takes patience, but I can't wait for Thursday's first check-in to see what testers want next.

## Week one, by the numbers

Testers: 13. Waitlist: 33. Full-time roles I'm looking for: 1. 😉

Comms strategist, community builder, and Claude-powered app builder. If that's who you want on your team, or you know someone hiring, [let's talk](mailto:carrahlingo@gmail.com).

And if you want to try Closer, [join the waitlist](https://docs.google.com/forms/d/e/1FAIpQLSepRnMRdMLHrE34xx1HE6IRxUAZJIcRVmMLNudnH4H-XDwSpw/viewform?usp=header). 💜
