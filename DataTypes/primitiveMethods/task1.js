// Can I add a string property?
// importance: 5
// Consider the following code:
"use strict";
let str = "Hello";

str.test = 5;

console.log(str.test);
// What do you think, will it work? What will be shown?

Ans: "In strict mode, it's an error and in not strict mode, it's undefined";
