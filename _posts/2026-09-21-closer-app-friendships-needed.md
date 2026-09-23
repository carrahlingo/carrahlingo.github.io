---
layout: post
title: "I Built the App Your Friendships Have Been Missing"
date: 2026-09-21
tags: [AI, Community Building, App Development]
image: /static/img/blog/closer-app/hero-banner.png
emoji: "📱"
excerpt: "You're at a friend's wedding, about to run into people you haven't seen in two years, and the panic sets in: what are their kids' names again? I manage communities for a living, but my own friendships never had the system I build for everyone else. So I built it myself, with an AI assistant called Claude Code."
description: "Why I spent three months building Closer, a friendship app I designed and built myself with Claude Code, and what seven interviews taught me about what people want most from their closest friendships."
published: true
---

<img class="post-photo" src="/static/img/blog/closer-app/hero-banner.png" alt="Closer app logo and tagline 'for friends who care,' next to an illustration of friends hugging">

You're at a friend's wedding, about to run into people you haven't seen in two years. Panic sets in: where do they live now, and how old are their kids again? You check Facebook, untouched since 2020. You open Instagram instead, then remember: they don't post their kids' faces online. No photo to guess an age from.

Different versions of this keep happening, and the wedding scramble is the easy one. It's also the friend who lost a parent, and you want to keep track of your check-ins. It's the friend who's finishing up medical school, and you want to chat about life without making them repeat what they said last time. It's the new city, new neighbors, the community you're building from scratch as an adult. Somewhere in all of it, the details started outrunning what any one person can hold in their head.

None of it lives in one place. It's split across text threads, Notes app reminders, Instagram DMs, WhatsApp groups, and more. None of them separate what matters from the noise.

## I manage communities for a living.

I spent four years as president of the Clemson Young Alumni chapter in Charleston, S.C., where I grew football watch parties almost 7x in a single year. I've produced 30+ executive events a year for audiences from 30 to 1,000, with post-event surveys consistently scoring us above 90% approval. I've built internal communities of 300 people who had never met IRL. I know how to make people feel connected.

In the corporate world, there's a calendar, a Slack channel, a promotion plan, and a community manager to run the whole thing. Your friendships don't come with any of that.

## I interviewed people who are good at this.

Before I started building Closer, I did what I'd do for any client: discovery work. Seven interviews with people who prioritize their friendships, to hear about how their friendships have evolved over the years, how they stay in touch, and where it breaks down.

Discovery isn't about sample size, it's about saturation: you keep going until you stop hearing new things. I stopped at seven, because by then one answer had come up in every single conversation.

*"I want to be the friend you reach out to when you need something."*

Nobody said they wanted more friends. Nobody said they wanted more likes on a life update. They said they wanted to be the person you call when you really need someone. The one you call first.

Here's the problem: you don't get to be that person by wanting it. You get to be that person by remembering. Knowing their business was supposed to launch in March, and asking about it in April. That kind of trust is earned in small moments, over time.

For people like us, caring is the easy part. The gap is that caring doesn't come with a system.

## I built the system I was missing.

Over the past three months I've been building Closer, a real iOS app in React Native that I designed and built myself with an AI assistant called Claude Code. Here's a peek at what's in it and why.

<div class="screenshot-carousel" id="screenshotCarousel">
  <button type="button" class="carousel-arrow carousel-arrow-left" aria-label="Previous screenshots">&#10094;</button>
  <div class="carousel-track">
    <div class="carousel-page active">
      <img src="/static/img/blog/closer-app/home-nudges.png" alt="Closer's home screen, showing three gentle nudges to check in on friends">
      <img src="/static/img/blog/closer-app/new-update.png" alt="Closer's quick-capture screen for logging a new update about a friend">
    </div>
    <div class="carousel-page">
      <img src="/static/img/blog/closer-app/gwen-top-half.png" alt="A friend's profile in Closer, showing an update, nudge cadence, and family and relationships">
      <img src="/static/img/blog/closer-app/gwen-occasions.png" alt="A friend's profile in Closer, showing tags and an upcoming birthday with a gift idea noted">
    </div>
  </div>
  <button type="button" class="carousel-arrow carousel-arrow-right" aria-label="Next screenshots">&#10095;</button>
  <div class="carousel-dots">
    <button type="button" class="carousel-dot active" aria-label="Go to screenshots 1 and 2"></button>
    <button type="button" class="carousel-dot" aria-label="Go to screenshots 3 and 4"></button>
  </div>
</div>
<script>
(function () {
  var root = document.getElementById("screenshotCarousel");
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
})();
</script>

- **Gentle nudges to check in.** Some friendships are weekly. Some are twice a year. Both are real. Closer doesn't decide how often you should talk to someone. You do, per person.
- **Fast capture to beat forgetting.** Press [+] from anywhere, type or talk, pick their name, done. No hunting for the right screen, no losing it.
- **Structured space to store details.** Updates, nudge cadence, family and relationships, groups, hobbies, occasions, and more, all organized in one place instead of scattered across your apps, post-its, and memory.
- **Calm permission to be caught up.** When you're caught up on nudges, it says "All clear! Nudges will pop back up when it's time." No streaks. No feed. No mindless time spent in the app.
- **Intentional design that ditches the feed.** No feed, no algorithm, no follower count. Closer isn't a social network, it's a private space for the people you love.

That's just a preview, more is coming soon. One example already live: if I've opted in, Closer sends a short preview each Sunday evening of upcoming nudges and occasions for the week.

## The unglamorous part is the whole thing.

Every community I've built ran on the unglamorous stuff: the follow-up message, the reminder, the conversation that doesn't scale but matters anyway. All seven people I interviewed wanted to be the friend you reach out to, and Closer is my attempt at giving you that.

It's still in development, but I'm expecting to launch soon. If this sounds like an app you're excited to use, send me an email at [carrahlingo@gmail.com](mailto:carrahlingo@gmail.com).
