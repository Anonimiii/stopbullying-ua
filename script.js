// script.js

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav-link');

  // Відкриття/закриття меню на мобільних
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Закрити меню після кліку на пункт (для мобільних)
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Підсвічування активного пункту меню при скролі
  const sections = document.querySelectorAll('section');
  const navLinksArray = Array.from(navLinkItems);

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinksArray.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
