function element (array) {
    for (const item of array) {
        console.log(item);
    }
}
let objects = [
    { name: 'John', age: 25 },
    { name: 'Anya', age: 30 },
    { name: 'Jane', age: 22 }
];

element(objects);