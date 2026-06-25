let login = prompt("Who's logging in?");
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
      ? "Greetings"
      : login == ""
        ? "No Login"
        : "";

console.log(message);
