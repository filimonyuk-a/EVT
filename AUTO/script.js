// Объявляем переменные в глобальной области видимости
let themeToggleButton, sunIcon, moonIcon;

// Функция инициализации темы
function initTheme() {
    // Получаем элементы
    themeToggleButton = document.getElementById("theme-toggle");
    sunIcon = document.getElementById("sun-icon");
    moonIcon = document.getElementById("moon-icon");
    
    // Проверяем, что элементы существуют
    if (!themeToggleButton || !sunIcon || !moonIcon) {
        console.error("Theme elements not found!");
        return;
    }
    
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Устанавливаем начальную тему
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        setTheme(true);
    }
    
    // Добавляем обработчик клика
    themeToggleButton.addEventListener('click', toggleTheme);
    
    // Мобильные обработчики
    setupMobileHandlers();
}

// Установка темы
function setTheme(isDark) {
    document.body.classList.toggle('dark-theme', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    sunIcon.style.display = isDark ? 'none' : 'block';
    moonIcon.style.display = isDark ? 'block' : 'none';
    
    // Мобильные стили
    if (window.innerWidth <= 768) {
        document.documentElement.style.backgroundColor = isDark ? '#0a0a0a' : '#f5f5f5';
    }
}

// Переключение темы
function toggleTheme() {
    const isDark = !document.body.classList.contains('dark-theme');
    setTheme(isDark);
    
    // Мобильная анимация
    if (window.innerWidth <= 768) {
        themeToggleButton.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggleButton.style.transform = '';
        }, 200);
    }
}

// Настройка мобильных обработчиков
function setupMobileHandlers() {
    if ('ontouchstart' in window) {
        // Увеличиваем область нажатия
        themeToggleButton.style.minWidth = '44px';
        themeToggleButton.style.minHeight = '44px';
        
        // Добавляем визуальную обратную связь
        themeToggleButton.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        });
        
        themeToggleButton.addEventListener('touchend', function() {
            this.style.opacity = '';
        });
    }
}

// Инициализация при полной загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    
    // Ваш существующий код бургер-меню
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    // ... остальной код ...
    
    // Инициализация слайдера
    const track = document.querySelector(".reviews-track");
    // ... остальной код слайдера ...
});

// Обработчик изменения размера окна
window.addEventListener('resize', function() {
    if (themeToggleButton) {
        // Адаптация для мобильных
        if (window.innerWidth <= 768) {
            themeToggleButton.style.minWidth = '44px';
            themeToggleButton.style.minHeight = '44px';
        } else {
            themeToggleButton.style.minWidth = '';
            themeToggleButton.style.minHeight = '';
        }
    }
});