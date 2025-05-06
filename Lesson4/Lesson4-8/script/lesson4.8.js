function list(array) {
    document.write('<ul>');
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}
list([32, 'Привіт', true, undefined, false]);