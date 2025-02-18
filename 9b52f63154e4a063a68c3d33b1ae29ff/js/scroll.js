const sections = document.querySelectorAll('.section'); // Все секции
let currentSection = 0; // Индекс текущей секции

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Пользователь прокручивает вниз
        currentSection = Math.min(currentSection + 1, sections.length - 1);
    } else {
        // Пользователь прокручивает вверх
        currentSection = Math.max(currentSection - 1, 0);
    }

    // Плавная прокрутка до следующей секции
    sections[currentSection].scrollIntoView({
        behavior: 'smooth'
    });
});

// Открытие модального окна с подстановкой тарифа
const buyButtons = document.querySelectorAll('.buy-button');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close');
const tariffInput = document.getElementById('tariff');

buyButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const tariff = event.target.getAttribute('data-tariff');
        tariffInput.value = tariff; // Подставляем название тарифа в форму
        modal.style.display = 'flex'; // Показываем модальное окно
    });
});

// Закрытие модального окна
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие при клике вне модального окна
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

