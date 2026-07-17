// A random integer from min to max
// importance: 2
// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.

// Examples of its work:

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5
// You can use the solution of the previous task as the base.

function randomInteger(min, max) {
  let randomNum = Math.floor(min + Math.random() * (max + 1 - min));
  return randomNum;
}

console.log(randomInteger(2,9));
