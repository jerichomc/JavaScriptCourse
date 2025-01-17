console.log(`Hello`);

// window.alert(`This is an alert box`);
// window.alert(`This is an alert box 2`);

let fullName = "Jericho";
let age = 24;
let isStudent = true;
let username;

document.getElementById("p1").textContent = `My name is ${fullName}`;
document.getElementById("p2").textContent = `I am ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;


document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("chosenUser").textContent = `Chosen Username: ${username}`
    
}