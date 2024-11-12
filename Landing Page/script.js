let circle1 = document.querySelector(".circle1");
let circle2 = document.querySelector(".circle2");
let circle3 = document.querySelector(".circle3");
let mainRed = document.querySelector(".mainRed");
let mainGrey = document.querySelector(".mainGrey");
let mainBlack = document.querySelector(".mainBlack");
let main = document.querySelector("main");
function blackWatch() {
  mainBlack.classList.add("active");
  mainGrey.classList.remove("active");
  mainRed.classList.remove("active");
  circle1.classList.add("large");
  circle2.classList.remove("large");
  circle3.classList.remove("large");
  main.style.background = "#1d1d1d";
}
function greyWatch() {
  mainBlack.classList.remove("active");
  mainGrey.classList.add("active");
  mainRed.classList.remove("active");
  circle1.classList.remove("large");
  circle2.classList.add("large");
  circle3.classList.remove("large");
  main.style.background = "#5C5C5C";
}
function redWatch() {
  mainBlack.classList.remove("active");
  mainGrey.classList.remove("active");
  mainRed.classList.add("active");
  circle1.classList.remove("large");
  circle2.classList.remove("large");
  circle3.classList.add("large");
  main.style.background = "#4E2430";
}
