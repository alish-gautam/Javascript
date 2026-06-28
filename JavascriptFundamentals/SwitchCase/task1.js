// Rewrite the "switch" into an "if"
// importance: 5
// Write the code using if..else which would correspond to the following switch:
let browser = "Chrome";

if (browser == "Edge") {
  console.log("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}
