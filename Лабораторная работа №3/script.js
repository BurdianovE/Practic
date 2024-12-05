// Функция для генерации случайного целого числа в заданном диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Задача 1
function task1() {
    const arr = Array.from({length: 15}, () => getRandomInt(-10, 30));
    const positiveSum = arr.filter(num => num > 0).reduce((acc, curr) => acc + curr, 0);
    const positiveCount = arr.filter(num => num > 0).length;
    const average = positiveSum / positiveCount;

    document.getElementById('result1').innerHTML = `
        Массив: [${arr.join(', ')}]<br>
        Среднее арифметическое положительных чисел: ${average.toFixed(2)}
    `;
}

// Задача 2
function task2() {
    const arr = Array.from({length: 15}, () => getRandomInt(-10, 30));
    const originalArr = [...arr];
    const modifiedArr = arr.map(num => num < 0 ? num * num : num);

    document.getElementById('result2').innerHTML = `
        Исходный массив: [${originalArr.join(', ')}]<br>
        Массив после замены: [${modifiedArr.join(', ')}]
    `;
}

// Задача 3
function task3() {
    const arr = Array.from({length: 15}, () => getRandomInt(-10, 30));
    
    const positiveNums = arr.filter(num => num > 0);
    const negativeNums = arr.filter(num => num < 0);
    const zeroCount = arr.filter(num => num === 0).length;
    
    const positiveAvg = positiveNums.length ? 
        (positiveNums.reduce((acc, curr) => acc + curr, 0) / positiveNums.length).toFixed(2) : 0;
    const negativeAvg = negativeNums.length ? 
        (negativeNums.reduce((acc, curr) => acc + curr, 0) / negativeNums.length).toFixed(2) : 0;

    document.getElementById('result3').innerHTML = `
        Массив: [${arr.join(', ')}]<br>
        Среднее арифметическое положительных чисел: ${positiveAvg}<br>
        Среднее арифметическое отрицательных чисел: ${negativeAvg}<br>
        Количество нулей: ${zeroCount}
    `;
}

// Задача 4
function task4() {
    const ITERATIONS = 1000000;
    let redCount = 0;
    let maxRedStreak = 0;
    let currentRedStreak = 0;

    for (let i = 0; i < ITERATIONS; i++) {
        const color = getRandomInt(0, 2); // 0 - красный, 1 - черный, 2 - белый
        if (color === 0) {
            currentRedStreak++;
            redCount++;
            if (currentRedStreak > maxRedStreak) {
                maxRedStreak = currentRedStreak;
            }
        } else {
            currentRedStreak = 0;
        }
    }

    document.getElementById('result4').innerHTML = `
        Всего красных выпало: ${redCount}<br>
        Максимальное число красных подряд: ${maxRedStreak}<br>
        Процент красных: ${((redCount / ITERATIONS) * 100).toFixed(2)}%
    `;
}
