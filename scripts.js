const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
const backToTop = document.querySelector('.back-to-top');

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const target = document.querySelector(anchor.getAttribute('href'));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', anchor.getAttribute('href'));
  });
});

if (backToTop) {
  backToTop.addEventListener('click', () => {
    document.querySelector('#top').scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', '#top');
  });
}

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
  });
};

const observer = new IntersectionObserver((entries) => {
  const visibleEntry = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (visibleEntry) {
    setActiveLink(visibleEntry.target.id);
  }
}, {
  rootMargin: '-35% 0px -55% 0px',
  threshold: [0.1, 0.3, 0.6],
});

sections.forEach((section) => observer.observe(section));

const updateBackToTop = () => {
  if (!backToTop) {
    return;
  }

  backToTop.classList.toggle('is-visible', window.scrollY > 700);
};

updateBackToTop();
window.addEventListener('scroll', updateBackToTop, { passive: true });
