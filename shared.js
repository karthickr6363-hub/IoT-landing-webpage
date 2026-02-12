document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    injectComponents();
    setupFavicon();
    initScrollReveal();
    initCanvasAnimation();
});

// Rule 1: Favicon Setup
function setupFavicon() {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = 'https://cdn-icons-png.flaticon.com/512/3208/3208764.png'; // IoT Icon
}

// Rule 4, 11, 12, 33: Theme & Navigation Highlighting
function initTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
}

// Global Brand Setup (Rule 2, 3, 35)
const BRAND_NAME = "IoT.Connect";
const BRAND_LOGO_URL = "https://cdn-icons-png.flaticon.com/512/3208/3208764.png";

function injectComponents() {
    const path = window.location.pathname;
    const isLoginPage = path.includes('login.html') || path.includes('signup.html');
    const isDashboard = path.includes('dashboard.html');

    if (!isLoginPage) {
        renderNavbar(isDashboard);
    }

    if (!isLoginPage && !isDashboard) {
        renderFooter();
    }
}

function renderNavbar(isDashboard) {
    const pages = [
        { name: 'Home', url: 'index.html' },
        { name: 'Home 2', url: 'home2.html' },
        { name: 'About', url: 'about.html' },
        { name: 'Features', url: 'features.html' },
        { name: 'Use Cases', url: 'use-cases.html' },
        { name: 'Hardware', url: 'hardware.html' },
        { name: 'Pricing', url: 'pricing.html' },
        { name: 'Dashboard', url: 'dashboard.html' },
        { name: 'Resources', url: 'resources.html' },
        { name: 'Contact', url: 'contact.html' }
    ];

    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === '') currentPage = 'index.html';

    const nav = document.createElement('nav');
    nav.className = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[70px] ${isDashboard ? 'hidden lg:flex' : 'flex'} items-center glass border-b border-gray-200 dark:border-gray-800 px-4 md:px-8`;

    // Desktop Nav
    let navContent = `
        <div class="container mx-auto flex justify-between items-center w-full">
            <a href="index.html" class="flex items-center gap-2 group">
                <img src="${BRAND_LOGO_URL}" alt="Logo" class="w-10 h-10 group-hover:scale-110 transition-transform">
                <span class="text-xl font-bold font-outfit text-gray-900 dark:text-white">${BRAND_NAME}</span>
            </a>
            
            <div class="hidden lg:flex items-center space-x-1">
                ${pages.map(p => {
        if (p.name === 'Resources') {
            return `
                            <div class="relative group h-full flex items-center">
                                <button class="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 flex items-center gap-1">
                                    Resources <i class="fas fa-chevron-down text-[10px]"></i>
                                </button>
                                <div class="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                                    <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 p-2">
                                        <a href="resources.html" class="block px-4 py-3 rounded-xl text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${currentPage === 'resources.html' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}">Documentation</a>
                                        <a href="resources.html" class="block px-4 py-3 rounded-xl text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${currentPage === 'resources.html' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}">API Reference</a>
                                        <a href="resources.html" class="block px-4 py-3 rounded-xl text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${currentPage === 'resources.html' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}">Developer Blog</a>
                                    </div>
                                </div>
                            </div>
                        `;
        }
        return `
                        <a href="${p.url}" class="nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === p.url ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}">
                            ${p.name}
                        </a>
                    `;
    }).join('')}
            </div>

            <div class="flex items-center gap-4">
                <button onclick="toggleTheme()" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <svg class="w-5 h-5 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    <svg class="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h1M4 9h1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </button>
                <a href="signup.html" class="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/30">Get Started</a>
                <button onclick="toggleMobileMenu()" class="lg:hidden p-2">
                    <svg class="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
        </div>
    `;

    nav.innerHTML = navContent;
    document.body.prepend(nav);

    // Rule 14: Mobile Slider Menu (from left)
    const mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobile-menu';
    mobileMenu.className = 'fixed inset-0 z-[60] transform -translate-x-full transition-transform duration-300 lg:hidden';
    mobileMenu.innerHTML = `
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" onclick="toggleMobileMenu()"></div>
        <div class="absolute inset-y-0 left-0 w-80 bg-white dark:bg-gray-900 shadow-2xl p-6 overflow-y-auto">
            <div class="flex items-center justify-between mb-8">
                <a href="index.html" class="flex items-center gap-2">
                    <img src="${BRAND_LOGO_URL}" alt="Logo" class="w-10 h-10">
                    <span class="text-xl font-bold font-outfit text-gray-900 dark:text-white">${BRAND_NAME}</span>
                </a>
                <button onclick="toggleMobileMenu()" class="p-2 text-gray-500 hover:text-red-500">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <div class="flex flex-col space-y-4">
                ${pages.map(p => `
                    <a href="${p.url}" class="text-lg font-medium p-3 rounded-lg ${currentPage === p.url ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}">
                        ${p.name}
                    </a>
                `).join('')}
                <hr class="border-gray-100 dark:border-gray-800 my-4">
                <a href="signup.html" class="bg-blue-600 text-white p-4 rounded-xl text-center font-bold shadow-lg shadow-blue-500/20">Get Started Now</a>
            </div>
        </div>
    `;
    document.body.appendChild(mobileMenu);
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('-translate-x-full');
}

function renderFooter() {
    const footer = document.createElement('footer');
    footer.className = 'bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-16 px-4 md:px-8';
    footer.innerHTML = `
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div class="space-y-6">
                    <a href="index.html" class="flex items-center gap-2">
                        <img src="${BRAND_LOGO_URL}" alt="Logo" class="w-10 h-10">
                        <span class="text-2xl font-bold font-outfit text-gray-900 dark:text-white">${BRAND_NAME}</span>
                    </a>
                    <p class="text-gray-500 dark:text-gray-400 leading-relaxed">
                        Industry-leading IoT platform for seamless connectivity and automation across homes, factories, and beyond.
                    </p>
                    <div class="flex gap-4">
                        <!-- Rule 7: Social Media Hover Effect -->
                        <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:border-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400 transition-all transform hover:-translate-y-1">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:border-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400 transition-all transform hover:-translate-y-1">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:border-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400 transition-all transform hover:-translate-y-1">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 class="text-gray-900 dark:text-white mb-6 text-center">Company</h4>
                    <ul class="space-y-4 text-center">
                        <li><a href="about.html" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</a></li>
                        <li><a href="features.html" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a></li>
                        <li><a href="pricing.html" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a></li>
                        <li><a href="contact.html" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-gray-900 dark:text-white mb-6 text-center">Resources</h4>
                    <ul class="space-y-4 text-center">
                        <li><a href="resources.html" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Documentation</a></li>
                        <li><a href="resources.html" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">API Reference</a></li>
                        <li><a href="how-it-works.html" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">How It Works</a></li>
                        <li><a href="support.html" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Support Center</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-gray-900 dark:text-white mb-6 text-center">Legal</h4>
                    <ul class="space-y-4 text-center">
                        <li><a href="privacy.html" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                        <li><a href="terms.html" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</a></li>
                        <li><a href="compliance.html" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Compliance</a></li>
                    </ul>
                </div>
            </div>

            <div class="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-gray-500 dark:text-gray-400 text-sm">
                    © 2026 ${BRAND_NAME}. All rights reserved.
                </p>
                <div class="flex gap-8">
                    <span class="text-gray-500 dark:text-gray-400 text-xs flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-green-500"></span> System Status: Online
                    </span>
                    <span class="text-gray-500 dark:text-gray-400 text-xs">v4.2.0-stable</span>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(footer);
}

// Global helper for chart initialization (to be used in dashboard)
// Rule 15 & Phase 8: Scroll Reveal Logic
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Phase 8: Canvas Background Nodes Animation
function initCanvasAnimation() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height, particles;

    function init() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        particles = [];
        const count = Math.floor((width * height) / 15000);
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                r: Math.random() * 2 + 1
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        const isDark = document.documentElement.classList.contains('dark');
        ctx.strokeStyle = isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)';
        ctx.fillStyle = isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.2)';

        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    ctx.beginPath();
                    ctx.lineWidth = 1 - dist / 150;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', init);
    init();
    animate();
}
