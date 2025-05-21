const tableContainer = document.getElementById('tableContainer');
const tableGeneratorForm = document.forms['table']; // Отримуємо форму

tableGeneratorForm.onsubmit = function (e) {
    e.preventDefault();
    tableContainer.innerText = '';

    const linesValue = +tableGeneratorForm.lines.value; // Отримуємо кількість рядків
    const cellsValue = +tableGeneratorForm.cells.value; // Отримуємо кількість колонок
    const contentValue = tableGeneratorForm.content.value; // Отримуємо вміст
    console.log(linesValue, cellsValue, contentValue);

    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = contentValue;
            tr.appendChild(td);
        }

        tableContainer.appendChild(tr);

    }

};

