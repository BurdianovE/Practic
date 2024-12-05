// Задание 1
function showMessage() {
    let message = "Привет, я JavaScript!";
    alert(message);
}

// Задание 2
function checkPalindrome() {
    const str = document.getElementById('palindromeInput').value;
    const cleanStr = str.toLowerCase().replace(/[^а-яa-z0-9]/g, '');
    const isPalindrome = cleanStr === cleanStr.split('').reverse().join('');
    document.getElementById('palindromeResult').textContent = 
        isPalindrome ? 'Это палиндром!' : 'Это не палиндром';
}

// Задание 3
function processArray() {
    const arr = Array.from({length: 12}, () => Math.floor(Math.random() * 21) - 10);
    const processedArr = arr.map(num => num < 0 ? num * num : num);
    document.getElementById('arrayResult').textContent = 
        `Исходный массив: ${arr}\nОбработанный массив: ${processedArr}`;
}

// Задание 4
class User {
    constructor(name) {
        this.name = name;
    }

    displayName() {
        return `Привет, ${this.name}!`;
    }
}

function createUser() {
    const name = document.getElementById('userNameInput').value;
    const user = new User(name);
    document.getElementById('userNameResult').textContent = user.displayName();
}

// Задание 5
class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();
        let hours = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();

        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        document.getElementById('clockResult').textContent = output;
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

let clock = new Clock({template: 'h:m:s'});
clock.start();

// Задание 6
class NameReverser {
    constructor(name) {
        this.name = name;
    }

    reverse() {
        return this.name.split('').reverse().join('');
    }
}

function reverseName() {
    const name = document.getElementById('reverseNameInput').value;
    const reverser = new NameReverser(name);
    document.getElementById('reverseNameResult').textContent = reverser.reverse();
}
