//STEP 1 CREATE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "New content";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";


//STEP 3 APPEND TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);

//REMOVE ELEMENT
document.body.removeChild(newH1);