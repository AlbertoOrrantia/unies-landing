let isScrolling = false;
let lastScrollTop = 0;

// Auto-scroll on wheel movement
window.addEventListener('wheel', (e) => {
  if (isScrolling) return;

  isScrolling = true;
  const delta = e.deltaY;

  if (delta > 0) {
    // Scrolling down
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  } else {
    // Scrolling up
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setTimeout(() => {
    isScrolling = false;
  }, 1000); // cooldown to avoid spam
});

// Sticky logo behavior on scroll
window.addEventListener('scroll', () => {
  const logoContainer = document.getElementById('logoContainer');

  if (window.scrollY > 100) {
    logoContainer.classList.add('sticky');
  } else {
    logoContainer.classList.remove('sticky');
  }
});