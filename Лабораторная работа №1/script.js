// Задание 1: Запрос числа
function requestNumber() {
    let userNumber = prompt('Пожалуйста, введите число:');
    userNumber = Number(userNumber);
    
    if (isNaN(userNumber)) {
        alert('Ошибка! Вы ввели не число.');
        document.getElementById('numberResult').textContent = 'Ошибка ввода';
    } else {
        document.getElementById('numberResult').textContent = `Введенное число: ${userNumber}`;
    }
}

// Задание 2: Калькулятор
function calculate(operation) {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Пожалуйста, введите корректные числа');
        return;
    }

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Деление на ноль невозможно!');
                return;
            }
            result = num1 / num2;
            break;
    }

    document.getElementById('result').textContent = `Результат: ${result}`;
}

// Задание 3: Угадывание числа
function guessNumber() {
    let result = prompt('Введите получившееся число:');
    result = Number(result);
    
    if (isNaN(result)) {
        alert('Ошибка! Вы ввели не число.');
        document.getElementById('guessResult').textContent = 'Ошибка ввода';
        return;
    }
    
    // Для получения исходного числа нужно:
    // 1. Вычесть 7 из результата
    // 2. Разделить на 2
    const originalNumber = (result - 7) / 2;
    
    document.getElementById('guessResult').textContent = 
        `Вы задумали число: ${originalNumber}`;
}

// Задание 4: Расчет возраста
function calculateAge() {
    const name = prompt('Введите ваше имя:');
    if (!name) {
        alert('Вы не ввели имя!');
        return;
    }

    const birthYear = prompt('Введите год вашего рождения:');
    const birthYearNumber = Number(birthYear);
    
    if (isNaN(birthYearNumber)) {
        alert('Год рождения должен быть числом!');
        return;
    }

    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYearNumber;

    if (age < 0 || age > 150) {
        alert('Пожалуйста, введите корректный год рождения!');
        return;
    }

    const outputDiv = document.getElementById('ageOutput');
    outputDiv.innerHTML = ''; // Очищаем предыдущий результат
    document.write(`<p class="age-result">${name}: ${age}</p>`);
}
