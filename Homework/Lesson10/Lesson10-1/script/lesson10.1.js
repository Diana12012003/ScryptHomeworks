let div = document.createElement('div'); // Створюємо <div>
div.id = 'text';
div.innerText = 'lorem ipsum';

const button = document.createElement('button');
button.id = 'button1';
button.innerText = 'no text';
button.addEventListener('click', function () {
       div.remove();
     })
document.body.appendChild(div);
document.body.appendChild(button);