// Write an if condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.

let age = 99;
// if (age >= 14 && age <= 90) {
//   console.log("You are the correct age.");
// } else {
//   console.log("You are incorrect");
// }

// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

// if (!(age >= 14 && age <= 98)) {
//   console.log("Age is not between 14 and 98");
// }
if (age <= 14 || age >= 98) {
  console.log("Age is not between 14 and 98");
}
