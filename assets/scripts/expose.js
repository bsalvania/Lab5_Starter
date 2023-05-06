// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {
  // TODO

  const image = document.querySelector('img[src="assets/images/no-image.png"]');
  const sound = document.querySelector('audio');

  const horn = document.getElementById("horn-select");
  horn.addEventListener("change", (event) => {
    sound.src = `assets/audio/${horn.value}.mp3`;
    image.src = `assets/images/${horn.value}.svg`;
  });

  const button = document.querySelector('button');
  button.addEventListener("click", function() {
    sound.play();
    if (horn.value == 'party-horn'){
      jsConfetti.addConfetti();
    }
  });




  
}
