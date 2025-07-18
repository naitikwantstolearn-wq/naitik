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
