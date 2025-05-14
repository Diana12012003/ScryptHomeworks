function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function() {
        console.log(`${this.maxSpeed}`);
    };
    this.info = function() {
        console.log(`${this.model}, ${this.manufacturer}, ${this.year}, ${this.maxSpeed}, ${this.engineCapacity}`)
    };
    this.increaseMaxSpeed = function (speedToAdd) {
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    };
    this.changeYear = function(year) {
        if (year > 2015) this.year = year;
    };
    this.addDriver = function (driver) {
        if (driver) this.driver = driver;
    };
}
let myCar = new Car('Model S', 'Tesla', 2022, 250, 3.0);
console.log(myCar);
myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(75);
myCar.changeYear(2023);
myCar.addDriver({ name: 'Diana', age: 30 });
console.log(myCar);
