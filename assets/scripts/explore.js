// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis
  const voices = speechSynthesis.getVoices()
  const voiceSelect = document.getElementById("voice-select")
  const inputText = document.getElementById("text-to-speak")
  const button = document.querySelector("button")

  populateVoiceList()
  if(
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList
  }

  button.addEventListener("click", onClick)
}

function populateVoiceList(){
  if(typeof speechSynthesis === "undefined"){
    return;
  }

  const voices = speechSynthesis.getVoices()

  for(let i = 0; i < voices.length; i++){
    const option = document.createElement("option")
    option.textContent = `${voices[i].name} (${voices[i].lang})`

    if(voices[i].default){
      option.textContent += " - DEFAULT"
    }

    option.setAttribute("data-lang", voices[i].lang)
    option.setAttribute("data-name", voices[i].name)
    document.querySelector("select").appendChild(option)
  }
}

function onClick(){
  const synth = window.speechSynthesis
  const voices = speechSynthesis.getVoices()
  const voiceSelect = document.getElementById("voice-select")
  const inputText = document.getElementById("text-to-speak")
  let utterThis = new SpeechSynthesisUtterance(inputText.value)
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name")
  var image = document.querySelectorAll('img')

  for(let i = 0; i < voices.length; i++){
    if(voices[i].name === selectedOption){
      utterThis.voice = voices[i]
    }
  }

  synth.speak(utterThis)

  utterThis.addEventListener("start", () => {
    image[0].src = "assets/images/smiling-open.png";
  });

  utterThis.addEventListener("end", () => {
    image[0].src = "assets/images/smiling.png";
  })
}