// Задание 1: Игра в загадки
const riddles = [
    {
        question: "Зимой и летом одним цветом",
        answer: "ёлка"
    },
    {
        question: "Висит груша - нельзя скушать",
        answer: "лампочка"
    }
];

let currentRiddle = 0;
let отгадки = 0;

function initGame() {
    displayRiddle();
    updateScore();
}

function displayRiddle() {
    if (currentRiddle < riddles.length) {
        document.getElementById('riddle-text').textContent = riddles[currentRiddle].question;
    } else {
        endGame();
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.toLowerCase().trim();
    const correctAnswer = riddles[currentRiddle].answer;
    
    if (userAnswer === correctAnswer) {
        document.getElementById('result').textContent = 'Верно :)';
        отгадки++;
    } else {
        document.getElementById('result').textContent = 'Неверно :(';
    }
    
    currentRiddle++;
    document.getElementById('answer-input').value = '';
    updateScore();
    
    if (currentRiddle < riddles.length) {
        setTimeout(displayRiddle, 1500);
    } else {
        setTimeout(endGame, 1500);
    }
}

function updateScore() {
    document.getElementById('score').textContent = `Отгадано загадок: ${отгадки}`;
}

function endGame() {
    document.getElementById('riddle-container').style.display = 'none';
    document.getElementById('result').textContent = `Игра окончена! Вы отгадали ${отгадки} загадок из ${riddles.length}`;
}

// Задание 2: Счёт от 1 до 10
function startCounting() {
    let counter = 1;
    const outputElement = document.getElementById('counter-output');
    outputElement.textContent = '';
    
    function count() {
        if (counter <= 10) {
            outputElement.textContent += counter + ' ';
            counter++;
            setTimeout(count, 1000);
        }
    }
    
    count();
}

// Задание 3: Программа для застолий
let partyCount = 0;

function checkPartyAnswer() {
    const userInput = document.getElementById('party-input').value;
    const resultElement = document.getElementById('party-result');
    
    if (userInput === '1') {
        resultElement.textContent = `Программа завершена. Всего было предено ${partyCount} раз`;
        document.getElementById('party-container').style.display = 'none';
    } else {
        partyCount++;
        resultElement.textContent = `Ну, давай! (Предложено ${partyCount} раз)`;
        document.getElementById('party-input').value = '';
    }
}

// Задание 4: Вычисление факториала
function calculateFactorial() {
    const input = document.getElementById('factorial-input');
    const number = parseInt(input.value);
    const resultElement = document.getElementById('factorial-result');
    
    // Проверка валидности ввода
    if (isNaN(number)) {
        resultElement.innerHTML = '<span style="color: #ff0000">Пожалуйста, введите число</span>';
        return;
    }
    
    if (number < 0) {
        resultElement.innerHTML = '<span style="color: #ff0000">Факториал отрицательного числа не существует</span>';
        return;
    }
    
    if (number > 170) {
        resultElement.innerHTML = '<span style="color: #ff0000">Число слишком большое. Максимальное значение: 170</span>';
        return;
    }
    
    let factorial = 1;
    
    // Вычисление факториала
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    
    // Особый случай для 0!
    if (number === 0) {
        factorial = 1;
    }
    
    resultElement.innerHTML = `<span style="color: #4CAF50">Ответ: ${factorial}</span>`;
}

// Задание 5: Проверка на палиндром
function checkPalindrome() {
    const input = document.getElementById('palindrome-input');
    const word = input.value.toLowerCase().replace(/[^а-яё]/g, '');
    const resultElement = document.getElementById('palindrome-result');
    
    if (!word) {
        resultElement.innerHTML = '<span style="color: #ff0000">Пожалуйста, введите слово</span>';
        return;
    }
    
    const reversed = word.split('').reverse().join('');
    const isPalindrome = word === reversed;
    
    resultElement.innerHTML = isPalindrome ? 
        `<span style="color: #4CAF50">Это палиндром!</span>` : 
        `<span style="color: #ff0000">Это не палиндром</span>`;
}

// Задание 6: Поиск простых чисел
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimeNumbers() {
    const input = document.getElementById('prime-input');
    const number = parseInt(input.value);
    const resultElement = document.getElementById('prime-result');
    
    if (isNaN(number) || number < 1) {
        resultElement.innerHTML = '<span style="color: #ff0000">Пожалуйста, введите положительное число</span>';
        return;
    }
    
    const primes = [];
    for (let i = 1; i <= number; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    
    if (primes.length === 0) {
        resultElement.innerHTML = '<span style="color: #ff0000">В данном диапазоне нет простых чисел</span>';
    } else {
        resultElement.innerHTML = `<span style="color: #4CAF50">${primes.join(', ')}</span>`;
    }
}

// Инициализация при загрузке страницы
window.onload = function() {
    initGame();
};
