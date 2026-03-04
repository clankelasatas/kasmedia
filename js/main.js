/* ========================================
   KASMEDIA — Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const mobilePanel = document.getElementById('mobilePanel');

    if (mobileMenuBtn && mobileSidebar) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileSidebar.classList.remove('hidden');
            setTimeout(() => {
                mobilePanel.classList.remove('translate-x-full');
            }, 10);
        });
    }

    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
                backToTopBtn.classList.add('opacity-100');
            } else {
                backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
                backToTopBtn.classList.remove('opacity-100');
            }
        });
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => fadeObserver.observe(el));

    populateHero();
    populateCategoryBar();
});

function closeMobileMenu() {
    const mobileSidebar = document.getElementById('mobileSidebar');
    const mobilePanel = document.getElementById('mobilePanel');
    if (mobilePanel) mobilePanel.classList.add('translate-x-full');
    setTimeout(() => {
        if (mobileSidebar) mobileSidebar.classList.add('hidden');
    }, 300);
}

// ===== HERO (no author, smaller date) =====
function populateHero() {
    const container = document.getElementById('heroArticle');
    if (!container || typeof articlesData === 'undefined') return;

    const featured = articlesData.find(a => a.featured) || articlesData[0];

    container.innerHTML = `
        <a href="artikel.html?id=${featured.id}" class="block group">
            <div class="relative rounded-2xl overflow-hidden">
                <img src="${featured.image}" alt="${featured.title}" class="w-full h-64 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-6 md:p-10">
                    <span class="inline-block px-3 py-1 bg-primary text-white rounded-full text-xs font-medium mb-3">${featured.category}</span>
                    <h2 class="font-heading text-2xl md:text-4xl font-bold text-white mb-3 group-hover:text-primary-soft transition-colors duration-300 leading-tight max-w-3xl">${featured.title}</h2>
                    <p class="text-gray-300 text-sm mb-3 max-w-2xl">${featured.excerpt}</p>
                    <span class="text-[11px] text-gray-400">${featured.date}</span>
                </div>
            </div>
        </a>
    `;
}

function populateCategoryBar() {
    const bar = document.getElementById('categoryBar');
    if (!bar || typeof categoriesData === 'undefined') return;

    categoriesData.forEach(cat => {
        bar.innerHTML += `<button class="category-btn" data-category="${cat.name}" onclick="filterByCategory('${cat.name}')">${cat.name}</button>`;
    });
}

let currentCategory = 'all';

function filterByCategory(category) {
    currentCategory = category;

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    document.querySelectorAll('[data-category="all"]').forEach(btn => {
        btn.classList.toggle('active', category === 'all');
    });

    if (typeof resetInfiniteScroll === 'function') {
        resetInfiniteScroll(category);
    }
}

// ===== ARTICLE CARD (no author, smaller date) =====
function createArticleCard(article) {
    return `
        <a href="artikel.html?id=${article.id}" class="article-card fade-in group">
            <div class="overflow-hidden">
                <img src="${article.image}" alt="${article.title}" loading="lazy">
            </div>
            <div class="p-5">
                <div class="flex items-center justify-between mb-2">
                    <span class="inline-block px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">${article.category}</span>
                    <span class="text-[11px] text-gray-400">${article.date}</span>
                </div>
                <h3 class="font-heading font-semibold text-base mb-2 leading-snug group-hover:text-primary-light transition-colors duration-300">${article.title}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">${article.excerpt}</p>
            </div>
        </a>
    `;
}