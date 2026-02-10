(function () {
  // Home-only behavior: play animations once on page load, then replay on hover/focus (desktop only).
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var split = document.getElementById('home-split');
    if (!split) return;

    // Respect reduced motion.
    try {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    } catch (e) {
      // Ignore.
    }

    // Improve vertical centering by sizing the split section to the viewport minus navbar height.
    var navbar = document.querySelector('.navbar');
    if (navbar && navbar.offsetHeight) {
      document.documentElement.style.setProperty('--navbar-height', navbar.offsetHeight + 'px');
    }

    var workPanel = split.querySelector('.home-panel-work');
    var playPanel = split.querySelector('.home-panel-play');

    function replay(panel) {
      if (!panel) return;
      if (panel.__homeAnimTimer) {
        window.clearTimeout(panel.__homeAnimTimer);
        panel.__homeAnimTimer = 0;
      }

      panel.classList.remove('is-animating');
      // Force reflow so CSS animations restart reliably.
      void panel.offsetWidth;
      panel.classList.add('is-animating');

      panel.__homeAnimTimer = window.setTimeout(function () {
        panel.classList.remove('is-animating');
      }, 3100); // 3s animation + small buffer
    }

    // Initial play on load (once).
    replay(workPanel);
    replay(playPanel);

    // Replay only on desktop hover/focus. No tap handlers (mobile taps navigate immediately).
    var canHover = false;
    try {
      canHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    } catch (e) {
      canHover = false;
    }

    if (canHover) {
      if (workPanel) {
        workPanel.addEventListener('mouseenter', function () { replay(workPanel); });
        workPanel.addEventListener('focusin', function () { replay(workPanel); });
      }
      if (playPanel) {
        playPanel.addEventListener('mouseenter', function () { replay(playPanel); });
        playPanel.addEventListener('focusin', function () { replay(playPanel); });
      }
    }
  });
})();
