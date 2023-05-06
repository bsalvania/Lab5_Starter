// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const image = document.querySelector('img[src="assets/images/smiling.png"]');
  while (SpeechSynthesis.speaking) {
    image.src = "smiling-open.png";
  }

  let speech = new SpeechSynthesisUtterance();
  const text = document.querySelector("textarea");
  const button = document.querySelector('button');
  button.addEventListener("click", function() {
    speech.speak(text.value);
  //   let utterance = new SpeechSynthesisUtterance("Hello world!");
  // speechSynthesis.speak(utterance);
  });

}