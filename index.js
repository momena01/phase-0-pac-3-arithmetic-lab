function add(a, b) {
    return a + b;

}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;

}
function divide(a, b) {
    return a / b;

}
function increment(n) {
    return ++n;
}
function decrement(n) {
    return --n;
}
console.log(decrement(413));

function makeInt(n) {
    return parseInt(n, 10);
}
console.log(makeInt('4.10'));

function preserveDecimal(n) {
    return parseFloat(n);
}
console.log(preserveDecimal('4.87523'));