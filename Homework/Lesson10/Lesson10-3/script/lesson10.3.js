document.getElementById('submit').addEventListener('click', () => {
    let user = {
        name: document.getElementById('i1').value,
        surname: document.getElementById('i2').value,
        age: document.getElementById('i3').value
    };
    console.log(user);
    document.getElementById('output').innerText = `Ім'я: ${user.name}, Прізвище: ${user.surname}, Вік: ${user.age}`;
});

