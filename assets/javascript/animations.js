(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* ── Headline progressive rendering ────────────────────────────────── */
  var headline = document.querySelector('.about-page-container p');
  if (headline) {
    var nodes = Array.from(headline.childNodes).filter(function (n) {
      return n.nodeType !== Node.TEXT_NODE || n.textContent.trim().length > 0;
    });

    var frag = document.createDocumentFragment();
    nodes.forEach(function (node, i) {
      var span = document.createElement('span');
      span.className = 'hl-seg';
      span.style.animationDelay = (i * 90) + 'ms';

      if (node.nodeType === Node.TEXT_NODE) {
        span.textContent = node.textContent.replace(/\s+/g, ' ');
      } else {
        span.appendChild(node.cloneNode(true));
      }
      frag.appendChild(span);
    });

    headline.innerHTML = '';
    headline.appendChild(frag);
  }

  /* ── Avatar + about text entrance ──────────────────────────────────── */
  var avatar = document.querySelector('.about-page-container .avatar');
  if (avatar) {
    avatar.classList.add('ga-fade-up');
    avatar.style.animationDelay = '0ms';
  }

  // Start about text after headline finishes: 7 segs × 90ms + 250ms animation ≈ 880ms
  var aboutBlocks = document.querySelectorAll('.about-page-container p.about-text, .about-page-container .contact-icons-container, .about-page-container .footer-note');
  aboutBlocks.forEach(function (el, i) {
    el.classList.add('ga-fade-up');
    el.style.animationDelay = (880 + i * 100) + 'ms';
  });

  /* ── Portfolio card scroll reveal ───────────────────────────────────── */
  if (!('IntersectionObserver' in window)) return;

  var cards = document.querySelectorAll('li.post-header, .featured-card');
  if (!cards.length) return;

  // Hide cards via JS so hover transitions in CSS are never overridden
  cards.forEach(function (card) {
    card.style.opacity = '0';
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        el.style.animation = 'gaCardReveal 0.45s ease forwards';
        el.addEventListener('animationend', function () {
          el.style.animation = '';
          el.style.opacity  = '';
        }, { once: true });
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.08 });

  cards.forEach(function (card) {
    observer.observe(card);
  });
})();
