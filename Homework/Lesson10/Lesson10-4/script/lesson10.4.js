let count = +localStorage.getItem('counter')
count+=1;
localStorage.setItem('counter', count);
document.getElementById('counter').innerText = count;