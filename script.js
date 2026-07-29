// ---------- MOBILE HAMBURGER ----------
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Close menu on link click (mobile)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

// ---------- BOOK BUTTONS → PRE-FILL FORM ----------
const bookBtns = document.querySelectorAll('.btn-book');
const serviceSelect = document.getElementById('service');

bookBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const service = btn.getAttribute('data-service');
    if (serviceSelect) {
      serviceSelect.value = service;
    }
    // Scroll to booking section
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  });
});

// ---------- FORM SUBMISSION ----------
const form = document.getElementById('bookingForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Basic validation
  const service = document.getElementById('service').value;
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!service || !name || !email) {
    feedback.textContent = '⚠️ Please fill in all required fields.';
    feedback.className = 'form-feedback';
    feedback.style.display = 'block';
    feedback.style.color = '#e74c3c';
    return;
  }

  // Simulate success
  feedback.textContent = '✅ Thank you! Our team will contact you within 24 hours.';
  feedback.className = 'form-feedback success';
  feedback.style.display = 'block';

  // Reset form (optional)
  form.reset();

  // Hide feedback after 6 seconds
  setTimeout(() => {
    feedback.style.display = 'none';
  }, 6000);
});