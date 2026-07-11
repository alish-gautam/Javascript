// Sum numbers from the visitor
// importance: 5
// Create a script that prompts the visitor to enter two numbers and then shows their sum.

// Run the demo

// P.S. There is a gotcha with types.

function sumNumbers() {
  let sum = 0;
  let num1 = +prompt("Enter the first number:");
  let num2 = +prompt("Enter the second number");

  sum = num1 + num2;
  return sum;
}

alert(sumNumbers());
