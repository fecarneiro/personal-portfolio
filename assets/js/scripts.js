document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navbar = document.querySelector('.navbar-content');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!navToggle || !navbar) {
    return;
  }

  navToggle.addEventListener('click', function () {
    const isOpen = navbar.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // reset opened toggle menu when resized to larger screen
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      document.querySelector('.navbar-content').classList.remove('open');
    }
  });

  // closing navbar after menu select
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navbar.classList.contains('open')) {
        navbar.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
