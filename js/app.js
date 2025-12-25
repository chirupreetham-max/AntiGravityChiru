document.addEventListener('DOMContentLoaded', () => {
    // Navigation Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 7, 0.9)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(5, 5, 7, 0.7)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });

    // Mobile Menu
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    mobileBtn.addEventListener('click', () => {
        // Simple toggle for demo purposes
        // In a real app, I'd calculate height/slide in
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
            navActions.style.display = 'none';
            mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(5, 5, 7, 0.95)';
            navLinks.style.padding = '20px';
            navLinks.style.textAlign = 'center';
            
            navActions.style.display = 'flex';
            navActions.style.flexDirection = 'column';
            navActions.style.position = 'absolute';
            navActions.style.top = '280px'; // approximate
            navActions.style.left = '0';
            navActions.style.width = '100%';
            navActions.style.background = 'rgba(5, 5, 7, 0.95)';
            navActions.style.padding = '20px';
            
            mobileBtn.innerHTML = '<i class="fas fa-times"></i>';
        }
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation classes
    const animatedElements = document.querySelectorAll('.feature-card, .gallery-item, .price-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Simulate Image Generation
    const generateBtn = document.querySelector('.btn-generate');
    const promptInput = document.querySelector('.prompt-bar input');
    const magicIcon = document.querySelector('.input-group i');

    generateBtn.addEventListener('click', () => {
        const prompt = promptInput.value;
        if (!prompt) return;

        // Loading State
        const originalText = generateBtn.innerText;
        generateBtn.innerText = 'Generating...';
        generateBtn.style.opacity = '0.8';
        magicIcon.classList.add('fa-spin');

        setTimeout(() => {
            generateBtn.innerText = 'Done!';
            generateBtn.style.background = 'linear-gradient(90deg, #00f0ff, #00ff9d)'; // Success color
            magicIcon.classList.remove('fa-spin');
            
            // Reset after a moment
            setTimeout(() => {
                generateBtn.innerText = originalText;
                generateBtn.style.background = ''; // revert to CSS
            }, 3000);
        }, 2000);
    });
});
