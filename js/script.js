// 1
var welcome = alert("Welcome");
// 2
var userName = prompt("What is your name?");
// 3
var userAge = prompt("How old are you?");
// 4
var userLocation = prompt("Where do you live?");
// 5
var userConfirmation = confirm("Do you want to join in site?");
// 6
document.getElementById("userName").innerHTML = "Username: " +  userName;
document.getElementById("userAge").textContent = "User's age: " + userAge;
document.getElementById("userLocation").textContent = "User's location: " + userLocation;

// 7
var date = 2022;
age.addEventListener('click', () =>{
  console.log("You was born in " + (date - userAge));
});