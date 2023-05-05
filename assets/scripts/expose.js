// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const parentDOM = document.getElementById("expose").value;
  const parentDOM2 = document.getElementById("horn-select");
  let button = document.querySelector('button');

  button.addEventListener("click", playSound);
}


function playSound() {
  // Picks audio track by finding the value of horn
  let sound = new Audio("assets/audio/" + document.getElementById("horn-select").value + ".mp3");
  sound.play();
}