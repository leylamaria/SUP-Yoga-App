function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}
let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

function greetUser() {
  let name = prompt("Hi there! 🧜🏽‍♀️ What's your name?");
  if (name.trim() === "") {
    name = "";
  }
  alert("Welcome on board! 🌊 Can't wait to float with you " + name + "!");
}
let contactButton = document.querySelector(".contact-button");
contactButton.addEventListener("click", greetUser);
