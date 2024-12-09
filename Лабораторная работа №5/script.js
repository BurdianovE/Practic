// 1. Калькулятор
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : 'Деление на ноль!';

const calculate = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    
    const operations = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide
    };
    
    const result = operations[operation](num1, num2);
    document.getElementById('result').textContent = `Результат: ${result}`;
};

// 2. Function Expression для проверки условий
const checkConditions = function(value) {
    if (typeof value !== 'number') return 'Не число';
    if (value < 0) return 'Отрицательное';
    if (value > 0) return 'Положительное';
    return 'Ноль';
};

const testConditions = () => {
    const value = parseFloat(document.getElementById('conditionInput').value);
    const result = checkConditions(value);
    document.getElementById('conditionResult').textContent = `Результат: ${result}`;
};

// 3. Проверка палиндрома
const isPalindrome = (surname) => {
    const cleaned = surname.toLowerCase().replace(/[^а-яё]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
};

const checkPalindrome = () => {
    const surname = document.getElementById('surnameInput').value;
    const result = isPalindrome(surname);
    document.getElementById('palindromeResult').textContent = 
        `Фамилия "${surname}" ${result ? 'является' : 'не является'} палиндромом`;
};

// 4. Среднее значение массива
const getAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

const calculateAverage = () => {
    const input = document.getElementById('arrayInput').value;
    const numbers = input.split(',').map(num => parseFloat(num.trim()));
    if (numbers.some(isNaN)) {
        document.getElementById('averageResult').textContent = 'Ошибка: введите корректные числа';
        return;
    }
    const average = getAverage(numbers);
    document.getElementById('averageResult').textContent = `Среднее значение: ${average}`;
};

// 5. Дни до Нового года
const getDaysUntilNewYear = () => {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    return Math.ceil((newYear - now) / (1000 * 60 * 60 * 24));
};

const calculateDaysUntilNewYear = () => {
    const days = getDaysUntilNewYear();
    document.getElementById('daysResult').textContent = 
        `До Нового года осталось ${days} дней`;
};

// 6. Пустая функция
const emptyFunction = () => undefined;

const testEmptyFunction = () => {
    const result = emptyFunction();
    document.getElementById('emptyResult').textContent = 
        `Результат пустой функции: ${result === undefined ? 'undefined' : result}`;
};

// 7. Операции с массивом
const generateRandomArray = (length = 10, min = 1, max = 100) => {
    return Array.from(
        { length }, 
        () => Math.floor(Math.random() * (max - min + 1)) + min
    );
};

const sum = (arr) => arr.reduce((a, b) => a + b, 0);
const getEven = (arr) => arr.filter(num => num % 2 === 0);
const multiplyByTwo = (arr) => arr.map(num => num * 2);

const showArrayOperations = () => {
    const numbers = generateRandomArray();
    const results = `
        Исходный массив: ${numbers.join(', ')}
        Сумма: ${sum(numbers)}
        Четные числа: ${getEven(numbers).join(', ')}
        Умножение на 2: ${multiplyByTwo(numbers).join(', ')}
    `;
    document.getElementById('arrayResults').textContent = results;
};

// 8. Фильтр email
const emails = [
    'test@mail.ru',
    'user@gmail.com',
    'admin@yandex.ru',
    'info@mail.ru',
    'contact@gmail.com'
];

const filterEmails = (query) => {
    const filtered = emails.filter(email => 
        email.toLowerCase().includes(query.toLowerCase())
    );
    const emailList = document.getElementById('emailList');
    emailList.innerHTML = filtered.map(email => 
        `<div>${email}</div>`
    ).join('');
};

document.getElementById('emailFilter').addEventListener('input', (e) => {
    filterEmails(e.target.value);
});

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    filterEmails('');
});
