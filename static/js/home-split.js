(function () {
  // Home-only behavior: play animations once on page load, then allow hover replay (CSS-driven).
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

    // Run the "on load" animations exactly once.
    if (!split.classList.contains('is-animate-on-load')) {
      split.classList.add('is-animate-on-load');
    }
    window.setTimeout(function () {
      split.classList.remove('is-animate-on-load');
    }, 3100); // 3s animation + small buffer
  });
})();
