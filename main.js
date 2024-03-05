const bird = new Audio('sounds/bird.wav')
const bubble = new Audio('sounds/bubble.wav')
const chimeUp = new Audio('sounds/chime-up.wav')
const drumKick = new Audio('sounds/drum_kick.wav')
const nordDrum = new Audio('sounds/nord-drum.wav')
const slideWhistle = new Audio('sounds/slide-whistle.wav')

const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')
const button5 = document.getElementById('button5')
const button6 = document.getElementById('button6')

button1.addEventListener('click', ()=>{
    //console.log('click')
    //if(button1.clicked)
bird.currentTime = 0
    bird.play()
})

button2.addEventListener('click', ()=>{
    //if(button2.clicked)
   bubble.currentTime = 0
    bubble.play()
})

button3.addEventListener('click', ()=>{
   chimeUp.currentTime = 0
    chimeUp.play()
})

button4.addEventListener('click', ()=>{
    drumKick.currentTime = 0
    drumKick.play()
})

button5.addEventListener('click', ()=>{
    nordDrum.currentTime = 0
    nordDrum.play()
})

button6.addEventListener('click', ()=>{
    slideWhistle.currentTime = 0
    slideWhistle.play()
})

const makeBubbles = ()=>{
const bubbles = document.createElement('div')
viewPoint.appendChild(bubbles)
bubbles.style.backgroundColor = "yellow"
bubbles.style.animation = "jump 1s ease"

}