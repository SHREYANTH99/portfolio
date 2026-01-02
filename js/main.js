// Starfield Background
function initStarfield() {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Stars array
    const stars = [];
    for (let i = 0; i < 200; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            opacity: Math.random(),
            twinkleSpeed: Math.random() * 0.02 + 0.01
        });
    }
    
    // Shooting stars
    const shootingStars = [];
    let lastShootingStarTime = 0;
    
    function createShootingStar() {
        shootingStars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * 0.5,
            length: Math.random() * 80 + 40,
            speed: Math.random() * 6 + 4,
            opacity: 1,
            angle: Math.PI / 4 + (Math.random() - 0.5) * 0.5
        });
    }
    
    // Animation loop
    function animate(timestamp) {
        // Pure black background
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw stars with twinkling effect
        stars.forEach(star => {
            star.opacity += star.twinkleSpeed;
            if (star.opacity > 1 || star.opacity < 0.3) {
                star.twinkleSpeed = -star.twinkleSpeed;
            }
            
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();
        });
        
        // Create new shooting star randomly
        if (timestamp - lastShootingStarTime > 3000 && Math.random() < 0.01) {
            createShootingStar();
            lastShootingStarTime = timestamp;
        }
        
        // Draw and update shooting stars
        for (let i = shootingStars.length - 1; i >= 0; i--) {
            const star = shootingStars[i];
            const dx = Math.cos(star.angle) * star.speed;
            const dy = Math.sin(star.angle) * star.speed;
            
            // Draw trail
            const gradient = ctx.createLinearGradient(
                star.x,
                star.y,
                star.x - Math.cos(star.angle) * star.length,
                star.y - Math.sin(star.angle) * star.length
            );
            gradient.addColorStop(0, `rgba(200, 180, 255, ${star.opacity})`);
            gradient.addColorStop(1, 'rgba(200, 180, 255, 0)');
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(
                star.x - Math.cos(star.angle) * star.length,
                star.y - Math.sin(star.angle) * star.length
            );
            ctx.stroke();
            
            // Update position
            star.x += dx;
            star.y += dy;
            star.opacity -= 0.01;
            
            // Remove if off screen or faded
            if (star.x > canvas.width || star.y > canvas.height || star.opacity <= 0) {
                shootingStars.splice(i, 1);
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    requestAnimationFrame(animate);
}

// Mobile Navigation
function initMobileNav() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const animateOnScroll = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );
    
    animateOnScroll.forEach(element => {
        observer.observe(element);
    });
}

// Contact form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 64; // Account for fixed nav height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Set current year in footer
function setCurrentYear() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initStarfield();
    initMobileNav();
    initScrollAnimations();
    initContactForm();
    initSmoothScroll();
    setCurrentYear();
});

// Navigation background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navigation');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.3)';
    }
});
