function cylinder (r, h) {
    return 2 * Math.PI * r * r + 2 * Math.PI * r * h;
}
let number = cylinder(5, 10);
console.log(number);