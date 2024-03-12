const titleMusic = new Audio('sounds/title-music.wav')
const bubble = new Audio('sounds/bubble.wav')
const chimeUp = new Audio('sounds/chime-up.wav')
const guitar = new Audio('sounds/guitar.wav')
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
titleMusic.currentTime = 0
    titleMusic.play()
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
    guitar.currentTime = 0
    guitar.play()
})

button5.addEventListener('click', ()=>{
    nordDrum.currentTime = 0
    nordDrum.play()
})

button6.addEventListener('click', ()=>{
    slideWhistle.currentTime = 0
    slideWhistle.play()
})


  
  
let keys = Object.keys(localStorage);
for(let key of keys) {
  console.log(`${key}: ${localStorage.getItem(key)}`);
}