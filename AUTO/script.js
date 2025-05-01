// Burger menu code (оставьте ваш существующий код без изменений)
let burger = document.getElementById('burger');
let menu = document.getElementById('menu');
let closeMenu = document.getElementById('close-menu');
let menuLinks = menu.querySelectorAll('a');

burger.onclick = function () {
    menu.style.display = 'flex';
};

closeMenu.onclick = function () {
    menu.style.display = 'none';
};

menuLinks.forEach(link => {
    link.onclick = function () {
        menu.style.display = 'none';
    };
});

// ===== Dark Theme - NEW CORRECTED VERSION =====
document.addEventListener('DOMContentLoaded', function() {
    // 1. Получаем элементы
    const themeToggleButton = document.getElementById("theme-toggle");
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
    
    // 2. Проверяем, что элементы существуют
    if (!themeToggleButton || !sunIcon || !moonIcon) {
        console.error("One or more theme elements not found!");
        return;
    }
    
    // 3. Функция для установки темы
    function setTheme(isDark) {
        if (isDark) {
            document.body.classList.add('dark-theme');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            sunIcon.style.display = 'inline-block';
            moonIcon.style.display = 'none';
            localStorage.setItem('theme', 'light');
        }
    }
    
    // 4. Проверяем сохранённую тему
    const savedTheme = localStorage.getItem('theme');
    
    // 5. Проверяем системные настройки (если нет сохранённой темы)
    if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme(true);
    } else if (savedTheme === 'dark') {
        setTheme(true);
    }
    
    // 6. Обработчик клика
    themeToggleButton.addEventListener('click', function() {
        const isDark = !document.body.classList.contains('dark-theme');
        setTheme(isDark);
    });
});

// ===== Slider Code =====
// Оставьте ваш существующий код слайдера без изменений
const track = document.querySelector(".reviews-track");
// ... остальной код слайдера ...