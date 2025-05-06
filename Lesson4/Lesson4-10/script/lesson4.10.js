function minimal(numbers) {
    let min = 0;
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log( minimal([5, 2, 9, -3, 7]));