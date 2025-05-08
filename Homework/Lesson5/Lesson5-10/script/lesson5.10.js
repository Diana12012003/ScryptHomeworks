let minimal = (array) => {
    let min = array [0];
    for (let num of array) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
console.log( minimal([11, -455, 45, -334, 467]));