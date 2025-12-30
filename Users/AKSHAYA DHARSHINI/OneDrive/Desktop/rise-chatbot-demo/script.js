// Smooth scrolling
function scrollToChat() {
  document.getElementById('chatbot').scrollIntoView({ behavior: 'smooth' });
}

function scrollToProject() {
  document.getElementById('project').scrollIntoView({ behavior: 'smooth' });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255,255,255,0.98)';
  } else {
    header.style.background = 'rgba(255,255,255,0.95)';
  }
});

// Typing effect for hero title
const heroTitle = document.querySelector('.hero-title');
const text = heroTitle.textContent;
heroTitle.textContent = '';
let i = 0;
function typeWriter() {
  if (i < text.length) {
    heroTitle.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.addEventListener('load', typeWriter);

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease';
  observer.observe(card);
});
