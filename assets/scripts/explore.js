// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const inputForm = document.querySelector("form");
  const inputTxt = document.querySelector(".txt");
  const voiceSelect = document.querySelector("select");
  const pitch = document.querySelector("#pitch");
  const pitchValue = document.querySelector(".pitch-value");
  const rate = document.querySelector("#rate");
  const rateValue = document.querySelector(".rate-value");
  
  let voices = [];
  
  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const image = document.querySelector('img[src="assets/images/smiling.png"]');


  //let speech = new SpeechSynthesisUtterance();
  const text = document.querySelector("textarea");
  const button = document.querySelector('button');
  button.addEventListener("click", function() {
    const option = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const speech = new SpeechSynthesisUtterance(text.value);
    for(let i = 0; i < voices.length; i++)
    {
      if(voices[i].name == option)
      speech.voice = voices[i];
    }
    synth.speak(speech);
    image.src = "assets/images/smiling-open.png";
    speech.addEventListener("end", function() {
      image.src = "assets/images/smiling.png";
    });
  });

}