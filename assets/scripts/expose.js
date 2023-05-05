// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  //const image = document.querySelector('img[alt="No image selected"]');
  const image = document.querySelector('img');
  const sound = document.querySelector('audio');

  const horn = document.getElementById("horn-select");
  horn.addEventListener("change", (event) => {
    sound.src = "assets/audio/" + document.getElementById("horn-select").value + ".mp3";
    image.src = "assets/images/" + document.getElementById("horn-select").value + ".svg";
  });

  const button = document.querySelector('button');
  button.addEventListener("click", function() {
    sound.play();
  });


  
}


// function playSound() {
//   // Picks audio track by finding the value of horn
//   let sound = new Audio("assets/audio/" + document.getElementById("horn-select").value + ".mp3");
//   sound.play();
// }
