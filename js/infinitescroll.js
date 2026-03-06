/* ========================================
   KASMEDIA — Infinite Scroll
   ======================================== */

(function() {
    let loadedCount = 0;
    const BATCH_SIZE = 6;
    const LOAD_MORE = 4;
    let isLoading = false;
    let allLoaded = false;
    let filteredArticles = [];

    function getFilteredArticles(category) {
        if (typeof articlesData === 'undefined') return [];
        if (category === 'all') {
            // Skip the featured article for the grid
            return articlesData.filter(a => !a.featured);
        }
        return articlesData.filter(a => a.category === category && !a.featured);
    }

    function loadArticles(count) {
        const grid = document.getElementById('articleGrid');
        const spinner = document.getElementById('loadingSpinner');
        const endMsg = document.getElementById('endMessage');
        if (!grid) return;

        const batch = filteredArticles.slice(loadedCount, loadedCount + count);

        if (batch.length === 0) {
            allLoaded = true;
            if (endMsg) endMsg.classList.remove('hidden');
            if (spinner) spinner.classList.add('hidden');
            return;
        }

        if (spinner) spinner.classList.remove('hidden');

        // Simulate loading delay
        setTimeout(() => {
            batch.forEach(article => {
                grid.innerHTML += createArticleCard(article);
            });

            loadedCount += batch.length;

            if (spinner) spinner.classList.add('hidden');

            if (loadedCount >= filteredArticles.length) {
                allLoaded = true;
                if (endMsg) endMsg.classList.remove('hidden');
            }

            // Re-observe new fade-in elements
            document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });
                observer.observe(el);
            });

            isLoading = false;
        }, 500);
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', function() {
        const grid = document.getElementById('articleGrid');
        if (!grid) return;

        filteredArticles = getFilteredArticles('all');
        loadArticles(BATCH_SIZE);

        // Infinite scroll listener
        window.addEventListener('scroll', function() {
            if (isLoading || allLoaded) return;

            const scrollPos = window.innerHeight + window.scrollY;
            const docHeight = document.documentElement.scrollHeight;

            if (scrollPos >= docHeight - 500) {
                isLoading = true;
                loadArticles(LOAD_MORE);
            }
        });
    });

    // Reset function (called when category changes)
    window.resetInfiniteScroll = function(category) {
        const grid = document.getElementById('articleGrid');
        const endMsg = document.getElementById('endMessage');
        if (!grid) return;

        grid.innerHTML = '';
        loadedCount = 0;
        allLoaded = false;
        isLoading = false;
        if (endMsg) endMsg.classList.add('hidden');

        filteredArticles = getFilteredArticles(category);
        loadArticles(BATCH_SIZE);
    };
})();
