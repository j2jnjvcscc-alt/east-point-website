(function () {
  "use strict";

  /* ---------- Sticky nav: transparent over hero, solid on scroll ---------- */
  var nav = document.getElementById("siteNav");
  var scrollThreshold = 60;

  function updateNavState() {
    if (window.scrollY > scrollThreshold) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  }

  updateNavState();
  window.addEventListener("scroll", updateNavState, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Parallax section backgrounds ----------
     Each .parallax-bg sits behind the foreground content of its parent
     section, oversized (132% height) so it never reveals an edge. On
     scroll, it's nudged by a fraction of how far its section has moved
     from the viewport center — the background drifts slightly slower
     than the text/images in front of it, which is the effect. */
  var parallaxLayers = Array.prototype.slice.call(document.querySelectorAll(".parallax-bg"));

  if (parallaxLayers.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var ticking = false;

    function updateParallax() {
      var viewportMid = window.innerHeight / 2;
      parallaxLayers.forEach(function (layer) {
        var section = layer.parentElement;
        var rect = section.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
        var sectionMid = rect.top + rect.height / 2;
        var offset = (sectionMid - viewportMid) * 0.12;
        layer.style.transform = "translateY(" + (-offset).toFixed(1) + "px)";
      });
      ticking = false;
    }

    function requestParallaxUpdate() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    updateParallax();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate);
  }

  /* ---------- Trust diagram: scroll-triggered reveal ----------
     Adds .is-visible the first time the diagram scrolls into view, which
     triggers the CSS transitions on each node/edge/gear/connector (see
     styles.css). One-shot — it unobserves right after firing. Reduced-motion
     users get the class immediately with transitions disabled in CSS, so
     they see the final state with no animation. */
  var trustDiagram = document.querySelector(".trust-diagram");

  if (trustDiagram) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      trustDiagram.classList.add("is-visible");
    } else if ("IntersectionObserver" in window) {
      var trustObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              trustDiagram.classList.add("is-visible");
              trustObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.35 }
      );
      trustObserver.observe(trustDiagram);
    } else {
      trustDiagram.classList.add("is-visible");
    }
  }

})();
