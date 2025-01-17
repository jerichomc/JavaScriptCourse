
const rollBtn = document.getElementById("rollBtn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6
let randomNum;

rollBtn.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum;
    randomNum = Math.floor(Math.random() * max) + min;
    label2.textContent = randomNum;
    randomNum = Math.floor(Math.random() * max) + min;
    label3.textContent = randomNum;
}