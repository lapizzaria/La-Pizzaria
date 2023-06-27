// Smooth scrolling
        const scrollLinks = document.querySelectorAll('a[href^="#"]');
        for (const scrollLink of scrollLinks) {
          scrollLink.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
              behavior: 'smooth',
            });
          });
        }
        
        // Toggle mobile menu
        const menuToggle = document.querySelector('.menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        menuToggle.addEventListener('click', function () {
          mobileMenu.classList.toggle('active');
        });
        
        // Form submission
        const form = document.querySelector('.contact-form');
        
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          // Perform form submission logic here
        });

        const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides[currentSlide].classList.add('active');
}

function hideSlide() {
  slides[currentSlide].classList.remove('active');
}

function nextSlide() {
  hideSlide();
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

// Show the initial slide
showSlide();

// Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 3000);
