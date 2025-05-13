// Navigation Menu Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
};

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load Certifications
const loadCertifications = () => {
    const certContainer = document.querySelector('.cert-container');
    const certifications = [
        {
            title: 'MICRO-CERTIFICATE OF SERVICENOW',
            issuer: 'SERVICENOW',
            date: '2025',
            image: 'assets/certificate/certificate 1.jpg'
        },
        {
            title: 'CCNA-SWITICHING,ROUTING AND WIRELESS ESSENTIALS',
            issuer: 'CISC0',
            date: '2025',
            image: 'assets/certificate/certificate 2.jpeg'
        },
        {
            title: 'CYBER SECURITY AND PRIVACY',
            issuer: 'NPTEL',
            date: '2024',
            image: 'assets/certificate/certificate 3.jpeg'
        },
        {
            title: 'INTRODUCTION TO INTERNET OF THINGS',
            issuer: 'NPTEL',
            date: '2024',
            image: 'assets/certificate/certificate 4.png'
        }
    ];

    certifications.forEach((cert, index) => {
        const certCard = document.createElement('div');
        certCard.className = 'cert-card';
        
        // Create image element separately to handle load events
        const img = new Image();
        img.src = cert.image;
        img.alt = cert.title;
        
        // Add loading indicator
        certCard.innerHTML = `
            <div class="cert-loading">Loading...</div>
            <h3>${cert.title}</h3>
            <p>${cert.issuer}</p>
            <p>${cert.date}</p>
        `;
        
        // Handle image load success
        img.onload = function() {
            certCard.querySelector('.cert-loading').remove();
            certCard.insertBefore(img, certCard.firstChild);
            console.log(`Certificate ${index + 1} loaded successfully`);
        };
        
        // Handle image load error
        img.onerror = function() {
            certCard.querySelector('.cert-loading').innerHTML = 'Failed to load image';
            console.error(`Failed to load certificate ${index + 1}: ${cert.image}`);
        };
        
        certContainer.appendChild(certCard);
    });
};

// Load Projects
const loadProjects = () => {
    const projectsGrid = document.querySelector('.projects-grid');
    const projects = [
        {
            title: 'E-COMMERCE WEBSITE',
            description: 'Developed a dynamic e-commerce website using pure HTML, CSS, and JavaScript. Features include responsive product catalog, interactive shopping cart, user-friendly navigation, and smooth animations. Implemented client-side form validation, dynamic content loading, and local storage for cart management. The website showcases modern design principles with CSS flexbox/grid and custom JavaScript functionality for enhanced user experience.',
            image: 'assets/project photo/project 1.jpg',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            githubLink: 'https://github.com/karthick914/Nxt-Trendz-ECommerce-Clone---Amazon-Flipkart-.git',
            duration: '3 months',
            role: 'Full Stack Developer'
        },
        {
            title: 'TOURIST WEBSITE INTEGRATION',
            description: 'Tourist Website Integration is the process of combining travel-related features—such as maps, weather, local attractions, booking services, and destination info—into a single website. It helps users easily plan trips by offering real-time data and seamless access to essential travel tools in one place.',
            image: 'assets/project photo/project 2.webp',
            technologies: ['HTML', 'CSS'],
            githubLink: 'https://github.com/karthick914/TOURIST-WEBSITE-INTEGRATION.git',
            duration: '1 months',
            role: 'Frontend Developer'
        },
        {
            title: 'ROCK PAPER SCISSORS GAME',
            description: 'Created an interactive Rock Paper Scissors game with engaging animations and real-time score tracking. Features include dynamic hand gesture animations, instant result display, score persistence using local storage, and responsive design for mobile play. Implemented game logic using JavaScript, styled with CSS animations for smooth transitions, and added sound effects for enhanced user experience. The game includes a best-of-three mode, player statistics, and a visually appealing UI with hover effects and interactive buttons.',
            image: 'assets/project photo/project 3.jpg',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            githubLink: 'https://github.com/karthick914/ROCK-PAPER-SCISSORS-GAME.git',
            duration: '1 month',
            role: 'Frontend Developer'
        }
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <div class="project-details">
                        <h4>Duration: ${project.duration}</h4>
                        <h4>Role: ${project.role}</h4>
                        <a href="${project.githubLink}" class="github-link" target="_blank">
                            <i class="fab fa-github"></i> View Repository
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <a href="${project.githubLink}" class="project-link" target="_blank">
                    <i class="fab fa-github"></i> View on GitHub 
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
};

// Scroll Animation
const scrollReveal = () => {
    const sections = document.querySelectorAll('section');
    const educationItems = document.querySelectorAll('.education-item');
    
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('active');
            }
        });

        educationItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight * 0.85) {
                item.classList.add('active');
            }
        });
    });
};

// Handle Contact Form
const handleContactForm = () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: form.name.value,
                email: form.email.value,
                subject: form.subject.value,
                message: form.message.value
            };
            
            // Here you would typically send the data to a server
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', formData);
            
            // Show success message
            const submitBtn = form.querySelector('.submit-btn');
            const originalContent = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = '#2ecc71';
            
            // Reset form
            form.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalContent;
                submitBtn.style.background = '#3498db';
            }, 3000);
        });
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    loadCertifications();
    loadProjects();
    scrollReveal();
    handleContactForm();
});
