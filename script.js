const num1 = prompt("Input your first number: ")
const operator = prompt("Input an operator(+, -, * or /)")
const num2 = prompt("Input your second number: ")

let answer;

if (isNaN(num1) || isNaN(num2)) {
  alert('Error! Kindly refresh the page and input numbers in the required boxes!');
} else if (operator === '+') {
  answer = num1 + num2;
} else if (operator === '-') {
  answer = num1 - num2;
} else if (operator === '/') {
  answer = num1 / num2;
} else if (operator === '*') {
  answer = num1 * num2;
} else {
  alert('Error! Kindly check the operator used');
}

let result = num1 + ' ' + operator + ' ' + num2 + ' = ' + answer;

alert(result);