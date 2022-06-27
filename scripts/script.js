const firstNumber = prompt("Please input first Number");
let sign = prompt('+,-,*,/');
const secondNumber = prompt("Please input second Number");
const placeholder = 'The answer is';
const placeholder2 = 'Please use a number';
const signValue = sign.valueOf();

if (isNaN(firstNumber) == false && isNaN(secondNumber) == false && sign === '+') {
    alert(placeholder.concat(' ', Number(firstNumber) + Number(secondNumber)));
}
else if (isNaN(firstNumber) == false && isNaN(secondNumber) == false && sign === '-') {
    alert(placeholder.concat(' ', firstNumber - secondNumber));
}
else if (isNaN(firstNumber) == false && isNaN(secondNumber) == false && sign === '*') {
    alert(placeholder.concat(' ', firstNumber * secondNumber));
}
else if (isNaN(firstNumber) == false && isNaN(secondNumber) == false && sign === '/') {
    alert(placeholder.concat(' ', firstNumber / secondNumber));
}
else if (isNaN(firstNumber) == true && isNaN(secondNumber) == true && signValue == sign) {
    alert(placeholder2);
}