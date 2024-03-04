//const bird = new Audio('sounds/bird.wav')
//const button1 = document.querySelector('#birdButton')
//let count = 0


//function play(){
    //if(count >5){
//count = 0
   // }if(count === 5 && button1.pushed)
   // bird.play()
//} 
const circle1 = document.querySelector('.item1')
const whistle = new Audio('sounds/slide-whistle.wav')

circle1.addEventListener('click', ()=>{
if(circle1.clicked)
whistle.play()
})