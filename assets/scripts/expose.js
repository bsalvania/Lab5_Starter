// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {
  
  const image = document.querySelector('img[src="assets/images/no-image.png"]');
  const sound = document.querySelector('audio');

  // When horn is selected, change image and sound to match
  const horn = document.getElementById("horn-select");
  horn.addEventListener("change", function() {
    sound.src = `assets/audio/${horn.value}.mp3`;
    image.src = `assets/images/${horn.value}.svg`;
  });

  // When button is clicked, play specific horn sound
  const button = document.querySelector('button');
  button.addEventListener("click", function() {
    sound.play();
    if (horn.value == 'party-horn'){
      jsConfetti.addConfetti();
    }
  });

  const volume = document.getElementById("volume");
  const volumeIcon = document.querySelector('img[src="assets/icons/volume-level-2.svg"]');

  // Adjust sound icon and volume
  volume.addEventListener("change", function() {
    if (volume.value == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume.value < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume.value < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
    sound.volume = volume.value / 100;
  });


  
}
