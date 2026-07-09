function User(name) {
  ((this.name = name), (this.isAdmin = false));
}

let user = new User("Alish");
console.log(user);
