class Car {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive() {
        console.log(`${this.maxSpeed}`);
    }

    info() {
        console.log(`${this.model}, ${this.manufacturer}, ${this.year}, ${this.maxSpeed},${this.engineCapacity}`);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(` ${this.maxSpeed} км/год`);
    }
    changeYear(newValue) {
        this.year = newValue;
        console.log(`${this.year}`);
    }
    addDriver(driver) {
        this.driver = driver;
        console.log(driver);
    }
}
let myCar = new Car('Model S', 'Tesla', 2022, 250, 3.0);

myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(30);
myCar.changeYear(2025);
myCar.addDriver({ name: 'Diana', age: 30 });
console.log(myCar);