// script.js
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    window.addEventListener('scroll', function() {
        heroSection.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
    });

    // Scroll reveal
    const revealElements = document.querySelectorAll('.about, .skills, .experience, .projects, .testimonials, .contact');
    const revealOnScroll = () => {
        revealElements.forEach((el) => {
            const topPosition = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (topPosition < windowHeight - 100) {
                el.classList.add('reveal');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Carousel functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    const showSlide = (index) => {
        carouselItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    };

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
        showSlide(currentIndex);
    });

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });
});
