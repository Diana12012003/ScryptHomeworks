class cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}
let cinderellas = [
    new cinderella('Anna', 19, 36),
    new cinderella('Maria', 22, 37),
    new cinderella('Olga', 20, 35),
    new cinderella('Svitlana', 21, 38),
    new cinderella('Iryna', 18, 36),
    new cinderella('Natalia', 23, 39),
    new cinderella('Diana', 25, 40),
    new cinderella('Victoria', 19, 39),
    new cinderella('Yulia', 24, 37),
    new cinderella('Oksana', 22, 38)
];
console.log(cinderellas);
class prince {
    constructor(name, age, shoeFound) {
        this.name = name;
        this.age = age;
        this.shoeFound = shoeFound;
    }
}
let Queen = 0;
for (let cinderella of cinderellas) {
    if (cinderella.shoeSize === 35) {
        Queen = cinderella;
        break;
    }
}
console.log(Queen);
let mainCinderella = cinderellas.find(cinderella => cinderella.shoeSize === 35);
console.log(mainCinderella);