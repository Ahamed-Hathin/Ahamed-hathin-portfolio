// JavaScript Document

/*

TemplateMo 597 Neural Glass

https://templatemo.com/tm-597-neural-glass

*/

// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    }
});

// Enhanced smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        // Skip if href is just "#"
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced header functionality
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;

    if (scrolled > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Active menu item highlighting
function updateActiveMenuItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');

    let currentSection = '';
    const scrollPos = window.pageYOffset + 200; // Increased offset for better detection

    // Find the current section
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop - 100 && scrollPos < sectionTop + sectionHeight - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    // If no section is detected and we're near the top, default to home
    if (!currentSection && window.pageYOffset < 200) {
        currentSection = 'home';
    }

    // Update active states
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveMenuItem);
window.addEventListener('load', updateActiveMenuItem);

// Parallax effect for geometric shapes
window.addEventListener('scroll', () => {
    const shapes = document.querySelectorAll('.shape');
    const scrolled = window.pageYOffset;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Neural lines pulse effect
const neuralLines = document.querySelectorAll('.neural-line');
setInterval(() => {
    neuralLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'scaleX(1.2)';
            setTimeout(() => {
                line.style.opacity = '0.2';
                line.style.transform = 'scaleX(0.5)';
            }, 200);
        }, index * 300);
    });
}, 2000);

// Enhanced particle generation
function createQuantumParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = Math.random() * 4 + 1 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = ['#00ffff', '#ff0080', '#8000ff'][Math.floor(Math.random() * 3)];
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100vh';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '-1';
    particle.style.boxShadow = `0 0 10px ${particle.style.background}`;

    document.body.appendChild(particle);

    const duration = Math.random() * 3000 + 2000;
    const drift = (Math.random() - 0.5) * 200;

    particle.animate([
        { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
        { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 }
    ], {
        duration: duration,
        easing: 'ease-out'
    }).onfinish = () => particle.remove();
}

// Generate quantum particles
setInterval(createQuantumParticle, 1500);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items and hexagons
document.querySelectorAll('.timeline-content, .hexagon').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Form submission effect
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // We'll let the animation play out before redirecting, or just handle it here
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const subject = this.querySelector('input[name="subject"]').value;
        const message = this.querySelector('textarea[name="message"]').value;

        const submitBtn = this.querySelector('.submit-btn');
        submitBtn.innerHTML = 'PREPARING MAIL...';
        submitBtn.style.background = 'linear-gradient(45deg, #8000ff, #00ffff)';

        // Construct the mailto link
        const mailtoLink = `mailto:ahamedhaden.r@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;

        setTimeout(() => {
            submitBtn.innerHTML = 'MAIL CLIENT OPENING...';
            submitBtn.style.background = 'linear-gradient(45deg, #00ff00, #00ffff)';

            // Trigger the mailto
            window.location.href = mailtoLink;

            setTimeout(() => {
                submitBtn.innerHTML = 'SEND MESSAGE';
                submitBtn.style.background = 'linear-gradient(45deg, #00ffff, #ff0080)';
            }, 2000);
        }, 1000);
    });
}