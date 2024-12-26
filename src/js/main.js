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

// Blog posts data  update here for blogs
const blogPosts = [
    {
        title: 'Embracing Agentic AI: The Key to Mastering Multiple Skills and Accelerating Future Success',
        excerpt: 'The future is in Agentic AI—no more wasting time on small tasks when there’s exponential growth to chase! To truly excel in tomorrow’s world, AI agents should be our allies. Mastering a little bit of everything will soon be more valuable than specializing in just one thing. The "jack of all trades" approach, fueled by AI, is the key to making good money and staying ahead in the fast-paced future of development.',
        date: '2024-12-26',
        category: 'AGENTIC AI'
    },
    {
        title: 'The Future of AI in Web Development',
        excerpt: 'Artificial Intelligence (AI) is revolutionizing the web development landscape, offering developers powerful tools to create smarter, more efficient websites and applications. From AI-driven design to enhanced user experiences and automated coding, AI is transforming how we build, test, and maintain web projects. Embracing AI in web development not only accelerates workflows but also allows for more innovative, personalized user interfaces, predictive features, and better optimization for search engines. As AI continues to evolve, web developers must adapt to stay competitive in the fast-changing digital world.',
        date: '2024-01-15',
        category: 'AI'
        }
        
    ,
    {
        
        title: 'Robust Process Automation Tools',
        excerpt: 'As developers, we’re all familiar with the principle of DRY (Don\'t Repeat Yourself). In our daily workflow, repetitive tasks can eat up valuable time and energy. This is where Robotic Process Automation (RPA) comes in. With RPA tools, developers can automate mundane tasks, freeing up time for more complex, creative work. I personally incorporate RPA into my daily routine, streamlining processes, reducing human error, and boosting productivity. By leveraging RPA, we can focus on innovation while leaving repetitive tasks to intelligent automation.',
        date: '2024-01-10',
        category: 'Robust Process Automation'
        
        
    },
    {
        title: 'The Meaning of Success: A Balanced Approach',
        excerpt: 'Success, as I see it, is about achieving a balance between personal peace, strong relationships, and professional growth. I believe that whatever I do, it should bring satisfaction to my mind and allow me to maintain peaceful contentment. Personal relationships are important, but I also know that professional requirements must be met to ensure overall growth. For me, these elements are interconnected—if I lose one, it affects the others. I follow strict principles in my relationships. I understand that not every colleague is a friend; we meet based on common professional goals. Life becomes easier when we focus on these shared objectives, like passing clouds that move in harmony. It’s the alignment of these goals that keeps things clear and simple, allowing for growth without unnecessary distractions.',
        date: '2024-01-10',
        category: 'Personal Growth'
    }
    ,
    {
        title: 'Building Strong Connections: Understanding People Better',
        excerpt: 'By applying psychological concepts, I’ve learned how to work more effectively with people and build stronger, more meaningful connections. These insights allow me to evaluate potential collaborators and form better relationships in both professional and social settings. Cultivating trust-based connections is essential for personal and professional growth, as understanding people on a deeper level fosters more productive, harmonious interactions and lasting bonds. Harnessing psychology to understand behavior and improve communication is a key strategy for success in life and work.',
        date: '2024-12-26',
        category: 'Psychology'
    }
    ,
    {
        title: 'Combining AI with Trading: Maximizing Returns and Exploring Blockchain',
        excerpt: 'In 2022, I created a trading bot with minimal knowledge of trading, which helped grow my investment from ₹2,000 to ₹78,000 by capitalizing on market volatility. This experience sparked my deep interest in trading, and now I aim to combine AI with trading strategies to maximize returns and enhance performance. Additionally, I am exploring blockchain technology, although I have limited technical knowledge, with the goal of leveraging both AI and blockchain to develop more efficient, advanced, and profitable trading systems.',
        date: '2024-12-26',
        category: 'AI & Trading'
    }
    
    
   
];

let visiblePosts = 3; // Number of posts to show initially

// Populate blog section with AOS animations
const populateBlog = () => {
    const blogGrid = document.querySelector('.blog-grid');
    blogGrid.innerHTML = ''; // Clear existing content
    
    const postsToShow = blogPosts.slice(0, visiblePosts);
    
    postsToShow.forEach((post, index) => {
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

    // Add or update view more button
    let viewMoreBtn = document.querySelector('.view-more-blogs');
    if (!viewMoreBtn) {
        viewMoreBtn = document.createElement('button');
        viewMoreBtn.className = 'view-more-blogs';
        viewMoreBtn.onclick = loadMorePosts;
        document.querySelector('.blog').appendChild(viewMoreBtn);
    }
    
    // Update button text or hide if all posts are shown
    if (visiblePosts >= blogPosts.length) {
        viewMoreBtn.style.display = 'none';
    } else {
        viewMoreBtn.style.display = 'block';
        viewMoreBtn.textContent = 'View More';
    }
};

// Function to load more posts
const loadMorePosts = () => {
    visiblePosts += 3; // Show 3 more posts
    populateBlog();
    AOS.refresh(); // Refresh AOS animations
};

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
    
    portfolioGrid.innerHTML = '';
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
    populateBlog();
    handleContactForm();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
});