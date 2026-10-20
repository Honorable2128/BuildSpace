const username = "admin";
const password = "1234";
if (username === "admin" && password === "12345") {
  console.log("Login Succesful");
} else if (username === " " || password === " ") {
  console.log("Reject: empty username or passwords");
} else if (password < 5) {
  console.log("Password must contain at least 5 characters");
} else {
  console.log("Invalid username  or password");
}

console.log(`${username} and ${password}`);


// QUestion
//  = is use to assign value to a variable
// == is a weak equal to to check if a value is equal to another 
// === is a strict equal to and it check exactly without bypassing


//  different between && and ||
// && is the AND  operator for check if both conditions are true only run if both conditions are true
// || is the OR  Operator only run if at least one of the condition is true
