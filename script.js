// Intersection Observer for fade-in animations on scroll
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Mobile menu toggle functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Active state in navigation
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        // Simple matching logic
        if(link.getAttribute('href') === currentPath) {
            link.classList.add('text-brand-green');
            link.classList.remove('text-gray-300');
        }
    });

    // Parallax effect for hero image if exists
    const heroImage = document.querySelector('.parallax-image');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            heroImage.style.transform = `translateY(${scrollPos * 0.4}px)`;
        });
    }
});
