let update = localStorage.getItem('update') || 0;
let currentPrice = localStorage.getItem('price') ? Number(localStorage.getItem('price')) : 100;
let now = Date.now();

if (now - update > 10000) {
    currentPrice += 10;
    localStorage.setItem('price', currentPrice);
    localStorage.setItem('update', now);
}
document.getElementById('price').innerText = `${currentPrice}грн`;
