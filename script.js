const firstNumber = prompt("First Number");
let sign = prompt('+,-,*,/');
const secondNumber = prompt("Second Number");
const placeholder = 'The answer is';

if (sign === '+') {
    const result1 = firstNumber + secondNumber;
    alert(placeholder.concat(result1));
}
else if (sign === '-') {
    alert(firstNumber - secondNumber);
}
else if (sign === '*') {
    alert(firstNumber * secondNumber);
}
else if (sign === '/') {
    alert(firstNumber / secondNumber);
}
