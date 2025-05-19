function deepCopy(obj) {
    if (!obj) throw new Error('Помилка');

    let functions = [];
    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            const functionClone = obj[key].bind({});
            functions.push({ functionClone, key });
        }
    }
    const cloneObj = JSON.parse(JSON.stringify(obj));
    for (const func of functions) {
        cloneObj[func.key] = func.functionClone;
    }
    return cloneObj;
}
const user = {
    name: "John",
    age: 25,
    greet() { console.log("Hello world"); },
    details: {
        city: "New York",
        zip: 12345
    }
};
const copy = deepCopy(user);
console.log(copy);
copy.greet();
