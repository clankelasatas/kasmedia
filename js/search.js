/* ========================================
   KASMEDIA — Search with Toggle Animation
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {

    const searchToggle = document.getElementById('searchToggle');
    const searchWrapper = document.getElementById('searchWrapper');
    const searchCloseBtn = document.getElementById('searchClose');
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    function openSearch() {
        if (!searchWrapper || !searchToggle) return;
        searchWrapper.style.width = '280px';
        searchWrapper.style.opacity = '1';
        searchWrapper.classList.add('active');
        searchToggle.style.opacity = '0';
        searchToggle.style.pointerEvents = 'none';
        setTimeout(() => {
            if (searchInput) searchInput.focus();
        }, 300);
    }

    function closeSearch() {
        if (!searchWrapper || !searchToggle) return;
        searchWrapper.style.width = '0';
        searchWrapper.style.opacity = '0';
        searchWrapper.classList.remove('active');
        searchToggle.style.opacity = '1';
        searchToggle.style.pointerEvents = 'auto';
        if (searchInput) searchInput.value = '';
        if (searchResults) searchResults.classList.add('hidden');
    }

    if (searchToggle) {
        searchToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            openSearch();
        });
    }

    if (searchCloseBtn) {
        searchCloseBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeSearch();
        });
    }

    document.addEventListener('click', function(e) {
        if (searchContainer && !searchContainer.contains(e.target)) {
            closeSearch();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeSearch();
    });

    // ===== SEARCH =====
    function performSearch(query, resultsContainer) {
        if (!resultsContainer || typeof articlesData === 'undefined') return;

        if (query.length < 2) {
            resultsContainer.classList.add('hidden');
            return;
        }

        const filtered = articlesData.filter(a =>
            a.title.toLowerCase().includes(query.toLowerCase()) ||
            a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
            a.category.toLowerCase().includes(query.toLowerCase())
        );

        if (filtered.length === 0) {
            resultsContainer.innerHTML = `<div class="p-4 text-sm text-gray-500">Tidak ada hasil ditemukan.</div>`;
        } else {
            resultsContainer.innerHTML = filtered.map(a => `
                <a href="artikel.html?id=${a.id}" class="block p-3 hover:bg-primary-bg dark:hover:bg-gray-800 transition border-b border-gray-100 dark:border-gray-800 last:border-0">
                    <div class="flex gap-3 items-center">
                        <img src="${a.image}" alt="" class="w-10 h-10 rounded-lg object-cover flex-shrink-0">
                        <div>
                            <p class="text-sm font-medium leading-tight">${a.title}</p>
                            <span class="text-xs text-primary">${a.category}</span>
                        </div>
                    </div>
                </a>
            `).join('');
        }

        resultsContainer.classList.remove('hidden');
    }

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            performSearch(this.value, searchResults);
        });
    }

    const mobileSearch = document.getElementById('mobileSearchInput');
    if (mobileSearch) {
        mobileSearch.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            if (query.length < 2) return;
            const grid = document.getElementById('articleGrid');
            if (!grid) return;
            const cards = grid.querySelectorAll('.article-card');
            cards.forEach(card => {
                const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                card.style.display = title.includes(query) ? '' : 'none';
            });
        });
    }
});