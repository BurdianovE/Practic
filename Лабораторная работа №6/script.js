// Задача 1: Увеличение элементов массива
const arr1 = [1, 2, 3];
const arrMultiplyBy2 = arr1.map(item => item * 2);
const arrPlusTen = arr1.map(item => item + 10);
const arrMultiplyBy3 = arr1.map(item => item * 3);

console.log('Умножение на 2:', arrMultiplyBy2);
console.log('Увеличение на 10:', arrPlusTen);
console.log('Умножение на 3:', arrMultiplyBy3);

// Задача 2: Расчет возраста по году рождения
const birthYears = [1990, 1985, 2000, 2010];
const currentYear = new Date().getFullYear();
const ages = birthYears.map(year => currentYear - year);

console.log('Возраст:', ages);

// Задача 3: Фильтрация совершеннолетних
const people = [
    { name: 'Анна', age: 17 },
    { name: 'Иван', age: 25 },
    { name: 'Мария', age: 18 },
    { name: 'Петр', age: 15 }
];

const adults = people.filter(person => person.age >= 18);
console.log('Совершеннолетние:', adults);

// Задача 4: Вычисление среднего балла студентов
const grades = [85, 92, 78, 95, 88];
const sum = grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = sum / grades.length;

console.log('Средний балл:', average);

// Задача 5: Функция высшего порядка для преобразования массива
const words = ['кот', 'собака', 'дом', 'велосипед', 'мяч'];

function convertArrayByLength(arr) {
    return arr.map(item => item.length <= 3 ? 0 : 1);
}

const binaryArray = convertArrayByLength(words);
console.log('Исходный массив:', words);
console.log('Преобразованный массив:', binaryArray);
