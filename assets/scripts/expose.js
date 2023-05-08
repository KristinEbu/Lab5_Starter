// expose.js

const jsConfetti = new JSConfetti()

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn = document.getElementById("horn-select")
  const volume = document.getElementById("volume")
  const button = document.querySelector("button")
  const sound = document.getElementsByClassName("hidden")
  var image = document.querySelectorAll('img')

  horn.addEventListener("change", (event) => {
    if(event.target.value == "air-horn"){
      image[0].src = "assets/images/air-horn.svg"
      sound[0].src = "assets/audio/air-horn.mp3"
    }
    else if(event.target.value == "car-horn"){
      image[0].src = "assets/images/car-horn.svg"
      sound[0].src = "assets/audio/car-horn.mp3"
    }
    else if(event.target.value == "party-horn"){
      image[0].src = "assets/images/party-horn.svg"
      sound[0].src = "assets/audio/party-horn.mp3"
      button.addEventListener("click", (e) => {
        jsConfetti.addConfetti()
      })
    }
  })

  volume.addEventListener("input", (event) => {
    sound[0].volume = event.target.value/100
    if(event.target.value == 0){
      image[1].src = "assets/icons/volume-level-0.svg"
    }
    else if(event.target.value > 1 && event.target.value < 33){
      image[1].src = "assets/icons/volume-level-1.svg"
    }
    else if(event.target.value > 33 && event.target.value < 67){
      image[1].src = "assets/icons/volume-level-2.svg"
    }
    else if(event.target.value > 67){
      image[1].src = "assets/icons/volume-level-3.svg"
    }
  })

  button.addEventListener("click", (event) => {
    sound[0].play()
  })
}