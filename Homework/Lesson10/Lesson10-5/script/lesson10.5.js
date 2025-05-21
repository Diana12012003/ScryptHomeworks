let sessions = JSON.parse(localStorage.getItem('sessionsList')) || [];
sessions.push(new Date().toLocaleString());
localStorage.setItem('sessionsList', JSON.stringify(sessions));

for (const session of sessions) {
    const div = document.createElement('div');
    div.innerText = session.toString();
    document.body.appendChild(div);
}