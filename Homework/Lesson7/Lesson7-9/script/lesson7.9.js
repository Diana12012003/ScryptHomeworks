Array.prototype.newForEach = function(callback) {
    for (const item of this) callback(item);
};
let numbers = [1, 2, 3];
    numbers.newForEach(num => console.log(num));