/* ========================================
   KASMEDIA — Admin Panel Logic
   ======================================== */

// ===== LOGIN =====
function handleLogin() {
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;

    if (user === 'admin' && pass === 'admin') {
        document.getElementById('loginScreen').classList.add('hidden');
        document.getElementById('adminDashboard').classList.remove('hidden');
        localStorage.setItem('kasmedia-admin', 'true');
        loadDashboard();
    } else {
        document.getElementById('loginError').classList.remove('hidden');
        setTimeout(() => document.getElementById('loginError').classList.add('hidden'), 3000);
    }
}

function handleLogout() {
    localStorage.removeItem('kasmedia-admin');
    document.getElementById('adminDashboard').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
    document.getElementById('loginUser').value = '';
    document.getElementById('loginPass').value = '';
}

// Check if already logged in
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('kasmedia-admin') === 'true') {
        document.getElementById('loginScreen').classList.add('hidden');
        document.getElementById('adminDashboard').classList.remove('hidden');
        loadDashboard();
    }

    // Enter key on login
    const passInput = document.getElementById('loginPass');
    if (passInput) {
        passInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') handleLogin();
        });
    }
});

// ===== DASHBOARD =====
function loadDashboard() {
    // Stats
    document.getElementById('statArticles').textContent = articlesData.length;
    document.getElementById('statEvents').textContent = eventsData.length;
    document.getElementById('statMembers').textContent = membersData.length;

    renderArticlesTable();
    renderEventsTable();
    renderMembersGrid();
}

// ===== TABS =====
function switchTab(tab) {
    document.querySelectorAll('.admin-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === tab);
    });
    document.querySelectorAll('.admin-tab-content').forEach(c => {
        c.classList.add('hidden');
    });
    document.getElementById(`tab-${tab}`).classList.remove('hidden');
}

// ===== ARTICLES TABLE =====
function renderArticlesTable() {
    const tbody = document.getElementById('articlesTableBody');
    if (!tbody) return;

    tbody.innerHTML = articlesData.map(a => `
        <tr class="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
            <td class="px-4 py-3">
                <div class="flex items-center gap-3">
                    <img src="${a.image}" alt="" class="w-10 h-10 rounded-lg object-cover">
                    <span class="font-medium text-sm max-w-xs truncate">${a.title}</span>
                </div>
            </td>
            <td class="px-4 py-3"><span class="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs">${a.category}</span></td>
            <td class="px-4 py-3 text-sm">${a.author}</td>
            <td class="px-4 py-3 text-sm text-gray-500">${a.date}</td>
            <td class="px-4 py-3">
                <div class="flex gap-2">
                    <button onclick="editArticle(${a.id})" class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg text-xs hover:bg-blue-200 transition">Edit</button>
                    <button onclick="deleteArticle(${a.id})" class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg text-xs hover:bg-red-200 transition">Hapus</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// ===== ARTICLE FORM =====
function showArticleForm() {
    document.getElementById('articleForm').classList.remove('hidden');
    document.getElementById('articleFormTitle').textContent = 'Tambah Artikel Baru';
    document.getElementById('artEditId').value = '';
    document.getElementById('artTitle').value = '';
    document.getElementById('artCategory').value = 'Kegiatan';
    document.getElementById('artAuthor').value = '';
    document.getElementById('artImage').value = '';
    document.getElementById('artExcerpt').value = '';
    document.getElementById('artBody').value = '';
}

function hideArticleForm() {
    document.getElementById('articleForm').classList.add('hidden');
}

function saveArticle() {
    const editId = document.getElementById('artEditId').value;
    const article = {
        id: editId ? parseInt(editId) : articlesData.length + 1,
        title: document.getElementById('artTitle').value,
        category: document.getElementById('artCategory').value,
        author: document.getElementById('artAuthor').value,
        image: document.getElementById('artImage').value || `https://picsum.photos/seed/new${Date.now()}/800/400`,
        excerpt: document.getElementById('artExcerpt').value,
        body: document.getElementById('artBody').value,
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
        readTime: '3 menit',
        tags: [],
        featured: false
    };

    if (editId) {
        const index = articlesData.findIndex(a => a.id === parseInt(editId));
        if (index !== -1) articlesData[index] = { ...articlesData[index], ...article };
    } else {
        articlesData.push(article);
    }

    hideArticleForm();
    loadDashboard();
    alert(editId ? 'Artikel berhasil diperbarui!' : 'Artikel berhasil ditambahkan!');
}

function editArticle(id) {
    const article = articlesData.find(a => a.id === id);
    if (!article) return;

    document.getElementById('articleForm').classList.remove('hidden');
    document.getElementById('articleFormTitle').textContent = 'Edit Artikel';
    document.getElementById('artEditId').value = id;
    document.getElementById('artTitle').value = article.title;
    document.getElementById('artCategory').value = article.category;
    document.getElementById('artAuthor').value = article.author;
    document.getElementById('artImage').value = article.image;
    document.getElementById('artExcerpt').value = article.excerpt;
    document.getElementById('artBody').value = article.body;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteArticle(id) {
    if (confirm('Yakin ingin menghapus artikel ini?')) {
        const index = articlesData.findIndex(a => a.id === id);
        if (index !== -1) articlesData.splice(index, 1);
        loadDashboard();
    }
}

// ===== EVENTS =====
function renderEventsTable() {
    const tbody = document.getElementById('eventsTableBody');
    if (!tbody) return;

    tbody.innerHTML = eventsData.map(e => `
        <tr class="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
            <td class="px-4 py-3">
                <div>
                    <span class="font-medium text-sm">${e.title}</span>
                    <p class="text-xs text-gray-500">${e.day} ${e.month} ${e.year}</p>
                </div>
            </td>
            <td class="px-4 py-3 text-sm text-gray-500">${e.location}</td>
            <td class="px-4 py-3">
                ${e.upcoming 
                    ? '<span class="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full text-xs">Mendatang</span>'
                    : '<span class="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 rounded-full text-xs">Selesai</span>'}
            </td>
            <td class="px-4 py-3">
                <button onclick="deleteEvent(${e.id})" class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg text-xs hover:bg-red-200 transition">Hapus</button>
            </td>
        </tr>
    `).join('');
}

function showEventForm() {
    document.getElementById('eventForm').classList.remove('hidden');
}

function saveEvent() {
    const dateVal = document.getElementById('evtDate').value;
    const dateObj = new Date(dateVal);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

    const event = {
        id: eventsData.length + 1,
        title: document.getElementById('evtTitle').value,
        day: String(dateObj.getDate()).padStart(2, '0'),
        month: months[dateObj.getMonth()],
        year: String(dateObj.getFullYear()),
        location: document.getElementById('evtLocation').value,
        description: document.getElementById('evtDesc').value,
        upcoming: document.getElementById('evtStatus').value === 'true'
    };

    eventsData.push(event);
    document.getElementById('eventForm').classList.add('hidden');
    loadDashboard();
    alert('Acara berhasil ditambahkan!');
}

function deleteEvent(id) {
    if (confirm('Yakin ingin menghapus acara ini?')) {
        const index = eventsData.findIndex(e => e.id === id);
        if (index !== -1) eventsData.splice(index, 1);
        loadDashboard();
    }
}

// ===== MEMBERS =====
function renderMembersGrid() {
    const grid = document.getElementById('membersGrid');
    if (!grid) return;

    grid.innerHTML = membersData.map(m => `
        <div class="bg-white dark:bg-dark rounded-xl p-4 shadow-sm flex items-center gap-4">
            <img src="${m.avatar}" alt="${m.name}" class="w-14 h-14 rounded-full object-cover">
            <div>
                <h4 class="font-semibold text-sm">${m.name}</h4>
                <p class="text-xs text-primary">${m.role}</p>
                <p class="text-xs text-gray-500 mt-0.5">${m.bio}</p>
            </div>
        </div>
    `).join('');
}
