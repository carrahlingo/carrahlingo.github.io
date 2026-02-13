(function () {
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var room = document.querySelector('.home-room');
    if (!room) return;

    var reducedMotion = false;
    try {
      reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {}

    var welcome = room.querySelector('.home-welcome');
    var deskScene = room.querySelector('.home-desk-scene');

    // If reduced motion, show everything immediately.
    if (reducedMotion) {
      if (welcome) welcome.classList.add('is-visible');
      if (deskScene) deskScene.classList.add('is-visible');
      return;
    }

    // Staggered entrance: welcome fades in, then desk scene.
    function show(el, delay) {
      if (!el) return;
      setTimeout(function () {
        el.classList.add('is-visible');
      }, delay);
    }

    show(welcome, 100);
    show(deskScene, 400);
  });
})();
