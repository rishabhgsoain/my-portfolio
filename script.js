// Smooth scrolling for nav links
document.querySelectorAll('.nav-menu a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Intersection Observer for fade-in sections
const sections = document.querySelectorAll('section');

const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});
