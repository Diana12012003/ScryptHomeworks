document.getElementById('kg').addEventListener('input', () => {
    let kg = document.getElementById('kg').value;
    let pounds = kg * 2.20462;
    document.getElementById('result').innerText = `Фунти: ${pounds}`;
});
