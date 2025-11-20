// Main JavaScript for Budak Lembur theme

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Rotating footer text functionality removed
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation classes on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.card-hover, .prose > *').forEach(el => {
        observer.observe(el);
    });
    
    // Product image gallery
    const productImages = document.querySelectorAll('.product-gallery img');
    const mainImage = document.querySelector('.main-product-image');
    
    productImages.forEach(img => {
        img.addEventListener('click', function() {
            if (mainImage) {
                mainImage.src = this.src;
                mainImage.alt = this.alt;
            }
            
            // Update active state
            productImages.forEach(i => i.classList.remove('ring-2', 'ring-primary-500'));
            this.classList.add('ring-2', 'ring-primary-500');
        });
    });
    
    // Reading progress bar for blog posts
    if (document.body.classList.contains('single-blog')) {
        const progressBar = document.createElement('div');
        progressBar.className = 'fixed top-0 left-0 w-0 h-1 bg-primary-600 z-50 transition-all duration-150';
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
    
    // Copy to clipboard functionality
    document.querySelectorAll('pre code').forEach(block => {
        const button = document.createElement('button');
        button.className = 'absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity';
        button.textContent = 'Copy';
        
        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.classList.add('group');
        pre.appendChild(button);
        
        button.addEventListener('click', function() {
            navigator.clipboard.writeText(block.textContent).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            });
        });
    });
    
    // Search functionality (if search input exists)
    const searchInput = document.querySelector('#search-input');
    const searchResults = document.querySelector('#search-results');
    
    if (searchInput && searchResults) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.trim();
            
            if (query.length < 2) {
                searchResults.innerHTML = '';
                searchResults.classList.add('hidden');
                return;
            }
            
            searchTimeout = setTimeout(() => {
                // Simple client-side search (you can replace with server-side search)
                performSearch(query);
            }, 300);
        });
    }
    
    function performSearch(query) {
        // This is a simple implementation - you might want to use a proper search solution
        const posts = document.querySelectorAll('[data-searchable]');
        const results = [];
        
        posts.forEach(post => {
            const title = post.dataset.title?.toLowerCase() || '';
            const content = post.dataset.content?.toLowerCase() || '';
            
            if (title.includes(query.toLowerCase()) || content.includes(query.toLowerCase())) {
                results.push({
                    title: post.dataset.title,
                    url: post.dataset.url,
                    excerpt: post.dataset.excerpt
                });
            }
        });
        
        displaySearchResults(results);
    }
    
    function displaySearchResults(results) {
        const searchResults = document.querySelector('#search-results');
        if (!searchResults) return;
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p class="p-4 text-gray-500">No results found.</p>';
        } else {
            searchResults.innerHTML = results.map(result => `
                <a href="${result.url}" class="block p-4 hover:bg-gray-50 border-b">
                    <h3 class="font-semibold text-gray-900">${result.title}</h3>
                    <p class="text-sm text-gray-600 mt-1">${result.excerpt}</p>
                </a>
            `).join('');
        }
        
        searchResults.classList.remove('hidden');
    }
});