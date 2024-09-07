document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Light mode CSS dosyasını dinamik olarak yüklemek için bir fonksiyon
    function loadLightModeCSS() {
        const link = document.createElement('link');
        link.href = 'light-mode.css';
        link.rel = 'stylesheet';
        link.id = 'lightModeCSS';
        document.head.appendChild(link);
    }

    // Light mode CSS dosyasını kaldırmak için bir fonksiyon
    function removeLightModeCSS() {
        const link = document.getElementById('lightModeCSS');
        if (link) {
            link.remove();
        }
    }

    // Tema değiştirme fonksiyonu
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

    // Sayfa yüklendiğinde kaydedilmiş tema tercihini kontrol et ve uygula
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        loadLightModeCSS();
    }

    // Tema değiştirme butonuna tıklama olayı ekle
    themeToggle.addEventListener('click', toggleTheme);
});