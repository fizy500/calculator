const firstNumber = prompt("Please input first Number");
let sign = prompt('+,-,*,/');
const secondNumber = prompt("Please input second Number");
const placeholder = 'The answer is';

if (sign == '+') {
    alert(placeholder.concat(' ',Number(firstNumber) + Number(secondNumber) ));
}
else if (sign === '-') {
    alert(placeholder.concat(' ', firstNumber - secondNumber));
}
else if (sign === '*') {
    alert(placeholder.concat(' ', firstNumber * secondNumber));
}
else if (sign === '/') {
    alert(placeholder.concat(' ', firstNumber / secondNumber));
}
