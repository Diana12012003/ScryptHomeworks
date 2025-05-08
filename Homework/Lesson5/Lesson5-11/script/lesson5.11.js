const sum = (numbers) => {
    let count = 0;
    for (const number of numbers) {
        count = count + number;
    }
    return count;
}
console.log(sum([23,55,656]) );