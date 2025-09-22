// index.js - small interactions: mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.menu-toggle');
  const navList = document.getElementById('nav-list');

  if (btn && navList) {
    btn.addEventListener('click', function () {
      const open = navList.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Menü schließen' : 'Menü öffnen';
    });
  }

  // Close mobile menu when clicking a nav link
  document.querySelectorAll('#nav-list a').forEach(a => {
    a.addEventListener('click', () => {
      if (navList.classList.contains('open')) {
        navList.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Menü öffnen';
      }
    });
  });
});
