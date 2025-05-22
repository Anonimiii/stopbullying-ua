document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.menu-link');
  const sections = document.querySelectorAll('section');

  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // Відключити всі активні класи в меню і секціях
      menuLinks.forEach(l => l.classList.remove('active'));
      sections.forEach(sec => sec.classList.remove('active'));

      // Включити активний клас на поточному меню та секції
      link.classList.add('active');
      const targetId = link.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });
});
