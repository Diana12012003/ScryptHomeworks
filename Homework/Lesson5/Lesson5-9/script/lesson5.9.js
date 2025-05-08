let objects = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
objects([
    { id: 1, name: 'Anna', age: 25 },
    { id: 2, name: 'Oleh', age: 30 },
    { id: 3, name: 'Marta', age: 22 }
]);