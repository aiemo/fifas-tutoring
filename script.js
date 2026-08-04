document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Expand and highlight the matching box in Subject Details when its anchor is targeted
  const openDetailFromHash = () => {
    document.querySelectorAll('.detail-card').forEach((el) => {
      el.classList.remove('highlighted');
      el.removeAttribute('open');
    });

    const hash = window.location.hash;
    if (!hash) return;
    const target = document.querySelector(hash);
    if (target && target.classList.contains('detail-card')) {
      target.setAttribute('open', '');
      target.classList.add('highlighted');
    }
  };

  window.addEventListener('hashchange', openDetailFromHash);
  openDetailFromHash();
});
