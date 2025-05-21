document.getElementById('checkAge').addEventListener('click', function () {
    let age = document.getElementById('ageInput').value;
    let message = document.getElementById('message');
    if (age === '') {
        message.innerText = 'Будь ласка, введіть ваш вік';
    } else if (age < 18) {
        message.innerText = 'Ваш вік менший за 18';
    } else {
        message.innerText = 'Ваш вік більший за 18';
    }
});