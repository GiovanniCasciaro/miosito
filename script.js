// Navigation Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animation Observer (AOS-like)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// Counter Animation for Stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// Character counter for message textarea
const messaggioTextarea = document.getElementById('messaggio');
const charCount = document.getElementById('charCount');

if (messaggioTextarea && charCount) {
    messaggioTextarea.addEventListener('input', () => {
        const length = messaggioTextarea.value.length;
        charCount.textContent = length;
        
        if (length > 450) {
            charCount.style.color = '#dc2626';
        } else {
            charCount.style.color = '';
        }
    });
}

// Form Submission Handler for Preventivo
const preventivoForm = document.getElementById('preventivoForm');
const formMessage = document.getElementById('formMessage');

if (preventivoForm) {
    preventivoForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = preventivoForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Hide previous messages
        formMessage.className = 'form-message';
        formMessage.style.display = 'none';
        
        // Disable submit button
        submitButton.textContent = 'Invio in corso...';
        submitButton.disabled = true;
        
        // Get form data
        const formData = new FormData(preventivoForm);
        const nome = formData.get('nome');
        const servizio = formData.get('servizio');
        const telefono = formData.get('telefono');
        const messaggio = formData.get('messaggio');
        
        // Map servizio values to readable text
        const servizioMap = {
            'sito-web': 'Sito Web',
            'portali-gestionali': 'Portali Gestionali',
            'e-commerce': 'E-Commerce',
            'consulenza-informatica': 'Consulenza Informatica'
        };
        
        // Prepare data for Web3Forms
        const emailData = {
            access_key: '6f109015-4a7a-4c6d-a30f-ef47097407f1', // Sostituire con la chiave Web3Forms
            subject: `Richiesta Preventivo - ${servizioMap[servizio] || servizio}`,
            from_name: nome,
            email: 'giovannicasciaro.dev@gmail.com', // Email di destinazione
            nome: nome,
            servizio: servizioMap[servizio] || servizio,
            telefono: telefono,
            messaggio: messaggio,
            to: 'giovannicasciaro.dev@gmail.com'
        };
        
        try {
            // Invia email usando Web3Forms API
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(emailData)
            });
            
            const result = await response.json();
            
            if (result.success) {
                // Show success message
                formMessage.textContent = 'Richiesta inviata con successo! Ti risponderemo al più presto.';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                
                // Reset form
                preventivoForm.reset();
                if (charCount) charCount.textContent = '0';
                
                // Reset button
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 2000);
            } else {
                throw new Error(result.message || 'Errore nell\'invio');
            }
            
        } catch (error) {
            console.error('Errore invio email:', error);
            formMessage.textContent = 'Errore nell\'invio. Riprova più tardi o contattaci direttamente via WhatsApp.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
            
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    }
});

// Floating Cards Animation Enhancement
const floatingCards = document.querySelectorAll('.floating-card');
floatingCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 2}s`;
});

// Portfolio Items Hover Effect
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Add typing effect to hero title (optional enhancement)
const typingEffect = (element, text, speed = 100) => {
    let i = 0;
    element.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to body
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Initialize all animations
    console.log('GC Digital Designs - Website Loaded');
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const optimizedScrollHandler = debounce(() => {
    // Scroll-based animations here
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

