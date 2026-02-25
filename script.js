// script.js

// Function to handle hamburger menu toggle
const hamburgerToggle = () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        hamburger.classList.toggle('is-active');
    });
};

// Smooth scrolling for internal links
const smoothScroll = () => {
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};

// Initialize functions on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    hamburgerToggle();
    smoothScroll();
});
