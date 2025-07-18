// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Portfolio filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.portfolio-grid .card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    cards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Welcome popup logic
window.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('welcome-popup');
  const closeBtn = document.getElementById('close-popup');
  if (popup && closeBtn) {
    closeBtn.addEventListener('click', function () {
      popup.style.display = 'none';
    });
  }
});

// Smooth animated color for welcome popup (text, image border, button)
window.addEventListener('DOMContentLoaded', function () {
  const msg = document.querySelector('.welcome-message');
  const img = document.querySelector('.welcome-img');
  const btn = document.querySelector('.welcome-btn');
  if (!msg || !img || !btn) return;

  let hue = 0;
  function animateColor() {
    hue = (hue + 0.2) % 360;
    const color = `hsl(${hue}, 95%, 55%)`;
    msg.style.color = color;
    img.style.borderColor = color;
    btn.style.background = color;
    btn.style.borderColor = color;
    btn.style.color = '#111';
    requestAnimationFrame(animateColor);
  }
  animateColor();
});
