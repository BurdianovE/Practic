// 1. Создание объектов
const bankClient = {
    имя: "Иван",
    фамилия: "Петров",
    номерСчета: Symbol('account123'),
    статус: Symbol('active')
};

const clinicWorker = {
    имя: "Мария",
    должность: "Врач",
    идентификатор: Symbol('doc456'),
    отделение: "Терапия"
};

const russianCitizen = {
    имя: "Алексей",
    паспорт: Symbol('passport789'),
    гражданство: "РФ",
    прописка: "Москва"
};

// Вывод свойств объектов
console.log('Клиент банка:', Object.entries(bankClient));
console.log('Работник клиники:', Object.entries(clinicWorker));
console.log('Гражданин РФ:', Object.entries(russianCitizen));

// 2. Переписывание if на switch
const number = +prompt('Загадайте цифру до 9', '');

switch (number) {
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
        alert('Вы ввели число 2');
        break;
    case 8:
    case 9:
        alert('Вы ввели число 8, а может и 9');
        break;
    default:
        alert('Вы ввели другое число');
}

// 3. Определение четверти часа
const min = 10; // Пример значения
let quarter;

switch (true) {
    case (min >= 0 && min < 15):
        quarter = 'Первая четверть';
        break;
    case (min >= 15 && min < 30):
        quarter = 'Вторая четверть';
        break;
    case (min >= 30 && min < 45):
        quarter = 'Третья четверть';
        break;
    case (min >= 45 && min < 60):
        quarter = 'Четвертая четверть';
        break;
    default:
        quarter = 'Некорректное значение';
}

console.log(quarter);

// 4. Проверка строки
const строкаСЦифрами = "125672345";
const телефон = "89991234567";

if (['1', '2', '3'].includes(строкаСЦифрами[0])) {
    console.log('Первая цифра 1, 2 или 3');
} else {
    console.log('нет');
}

// Проверка наличия номера телефона
if (строкаСЦифрами.includes(телефон)) {
    console.log('Номер телефона найден');
} else {
    console.log('Номер телефона не найден');
}
