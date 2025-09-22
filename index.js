document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.menu-toggle');
  const navList = document.getElementById('nav-list');

  btn.addEventListener('click', function () {
    const isOpen = navList.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.textContent = isOpen ? 'Close' : 'Menu';
  });

  document.querySelectorAll('#nav-list a').forEach(a => {
    a.addEventListener('click', () => {
      if (navList.classList.contains('open')) {
        navList.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Menu';
      }
    });
  });
});
