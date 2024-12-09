document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const remember = document.getElementById('remember');
    const passwordError = document.getElementById('passwordError');

    // Загрузка сохраненных данных
    if (localStorage.getItem('rememberedUser')) {
        const savedData = JSON.parse(localStorage.getItem('rememberedUser'));
        username.value = savedData.username || '';
        password.value = savedData.password || '';
        remember.checked = true;
        
        // Добавляем приветственное сообщение
        alert(`С возвращением, ${savedData.username}! Ваши данные были автоматически заполнены.`);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Валидация пароля
        if (password.value.length < 6) {
            passwordError.textContent = 'Пароль должен содержать минимум 6 символов';
            return;
        }

        if (!/[A-Z]/.test(password.value)) {
            passwordError.textContent = 'Пароль должен содержать хотя бы одну заглавную букву';
            return;
        }

        if (!/[0-9]/.test(password.value)) {
            passwordError.textContent = 'Пароль должен содержать хотя бы одну цифру';
            return;
        }

        passwordError.textContent = '';

        // Сохранение данных, если выбрана опция "Запомнить меня"
        if (remember.checked) {
            const userData = {
                username: username.value,
                password: password.value
            };
            localStorage.setItem('rememberedUser', JSON.stringify(userData));
        } else {
            localStorage.removeItem('rememberedUser');
        }

        alert('Вход выполнен успешно!');
    });
});
