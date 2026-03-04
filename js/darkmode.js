/* ========================================
   KASMEDIA — Dark Mode Toggle
   ======================================== */

(function() {
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('kasmedia-theme');
    
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }

    // Toggle button
    document.addEventListener('DOMContentLoaded', function() {
        const toggleBtn = document.getElementById('darkToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', function() {
                document.documentElement.classList.toggle('dark');
                const isDark = document.documentElement.classList.contains('dark');
                localStorage.setItem('kasmedia-theme', isDark ? 'dark' : 'light');
            });
        }
    });
})();