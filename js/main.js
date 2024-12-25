// Typing animation for the hero section
const typeWriter = () => {
    const text = "Web Developer | Designer | AI Enthusiast";
    const element = document.querySelector('.typewriter');
    let i = 0;
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    };
    
    element.textContent = '';
    type();
};

// Portfolio items data
const portfolioItems = [
    {
        title: 'AI-Powered Web App',
        description: 'A modern web application leveraging artificial intelligence for enhanced user experience.',
        image: 'https://via.placeholder.com/400x300',
        tags: ['React', 'TensorFlow.js', 'Node.js']
    },
    {
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with real-time inventory management.',
        image: 'https://via.placeholder.com/400x300',
        tags: ['Vue.js', 'MongoDB', 'Express']
    },
    {
        title: 'Portfolio Website',
        description: 'Responsive portfolio website with modern design and animations.',
        image: 'https://via.placeholder.com/400x300',
        tags: ['HTML5', 'CSS3', 'JavaScript']
    }
];

// Blog posts data
const blogPosts = [
    {
        title: 'The Future of AI in Web Development',
        excerpt: 'Exploring how artificial intelligence is reshaping the web development landscape...',
        date: '2024-01-15',
        category: 'AI'
    },
    {
        title: 'Automating Development Workflows',
        excerpt: 'Tips and tricks for streamlining your development process using automation...',
        date: '2024-01-10',
        category: 'Web Automation'
    },
    {
        title: 'Combining Technology with Agriculture',
        excerpt: 'How modern tech solutions are revolutionizing traditional farming practices...',
        date: '2024-01-05',
        category: 'AgriTech'
    }
];

// Initialize AOS
function initAOS() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });
}

// Populate portfolio section with AOS animations
const populatePortfolio = () => {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    portfolioItems.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-aos', 'fade-up');
        portfolioItem.setAttribute('data-aos-delay', `${200 + index * 100}`);
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="tags">
                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
};

// Populate blog section with AOS animations
const populateBlog = () => {
    const blogGrid = document.querySelector('.blog-grid');
    
    blogPosts.forEach((post, index) => {
        const blogPost = document.createElement('div');
        blogPost.className = 'blog-post';
        blogPost.setAttribute('data-aos', 'fade-up');
        blogPost.setAttribute('data-aos-delay', `${200 + index * 100}`);
        blogPost.innerHTML = `
            <div class="post-content">
                <span class="category">${post.category}</span>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <span class="date">${post.date}</span>
            </div>
        `;
        blogGrid.appendChild(blogPost);
    });
};

// Handle contact form submission
const handleContactForm = () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
};

// Mobile menu toggle
const initMobileMenu = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
};

// Smooth scrolling for navigation links
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};

// Intersection Observer for scroll animations
const initScrollAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
};

// Theme Switcher
function initThemeSwitch() {
    const themeSwitch = document.querySelector('#checkbox');
    if (!themeSwitch) return;

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeSwitch.checked = currentTheme === 'dark';

    // Handle theme switch
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initAOS();
    initThemeSwitch();
    typeWriter();
    populatePortfolio();
    populateBlog();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    handleContactForm();
});
