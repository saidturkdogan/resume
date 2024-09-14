document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    function loadLightModeCSS() {
        const link = document.createElement('link');
        link.href = 'light-mode.css';
        link.rel = 'stylesheet';
        link.id = 'lightModeCSS';
        document.head.appendChild(link);
    }

    function removeLightModeCSS() {
        const link = document.getElementById('lightModeCSS');
        if (link) {
            link.remove();
        }
    }

    function toggleTheme() {
        const isLightMode = body.classList.toggle('light-mode');
        if (isLightMode) {
            loadLightModeCSS();
            localStorage.setItem('theme', 'light');
        } else {
            removeLightModeCSS();
            localStorage.setItem('theme', 'dark');
        }
    }

    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        loadLightModeCSS();
    }

    themeToggle.addEventListener('click', toggleTheme);
});