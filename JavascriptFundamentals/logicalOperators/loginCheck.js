let login = prompt("Who are you?")
if(login == "Admin"){
    password = prompt("Enter your password:")
    if(password == "TheMaster"){
        alert("Welcome")
    }
    else if(password == "" || password == null){
        alert("Cancelled")
    }
    else{
        alert("I don't know you")
    }

}