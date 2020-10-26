// Your code goes here

let x = document.querySelector("p#text")

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("The DOM has loaded");
    x.textContent = 'This is really cool!'
  });