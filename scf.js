// Intersection Observer for Scroll Reveal
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(reveal => {
    revealObserver.observe(reveal);
  });
});

// Form Submission Handler
function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const details = document.getElementById('project-details').value.trim();

  if (!name || !email || !details) {
    alert('Please fill in all required fields.');
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  // Success Simulation
  const submitBtn = document.querySelector('.submit-button');
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
    alert('Thank you, ' + name + '! Your quote request has been sent successfully.');
    event.target.reset();
    submitBtn.textContent = 'Request Quote';
    submitBtn.disabled = false;
  }, 1500);

  return false;
}