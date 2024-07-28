const bubbleContainer = document.querySelector('.panelBtm')
const timerCount = document.querySelector('#timer')
const hittingNum = document.querySelector('#hitNum')
const score = document.querySelector('#scoreVal')


function makeBubble(){
    let totalBubble= "";
for(let i=0; i<=104; i++){
    var randomNum = Math.floor(Math.random()*10)
    totalBubble = totalBubble + `<div class="bubble">${randomNum}</div>`
}
bubbleContainer.innerHTML = totalBubble;
}

function timerCounter(){
    var count = 60;
   var timer =  setInterval(function(){
        if(count>0){
            count--;
            timerCount.textContent = `${count} sec`;
        }
        else{
            clearInterval(timer) 
            // alert("Time's Up!")
            bubbleContainer.innerHTML = `
             <h1 style="color: red">Game Over!</h1>
             <br>
             <h2>Your Final Score:</h2>
             <h1>${totalScore}</h1>
            `
        }
    },1000)
}

function hitNumber(){
        var rn = Math.floor(Math.random()*10) 
      hittingNum.textContent = rn;
}


var totalScore = 0
function scoreValue(){
    totalScore = totalScore+10
    score.textContent = totalScore
}

bubbleContainer.addEventListener('click',function(event){
    // console.log(event.target.textContent)
    targetVal =  event.target.textContent
    if( targetVal == hittingNum.textContent){
        scoreValue()
        makeBubble();
        hitNumber();
    }
})

timerCounter();
makeBubble();
hitNumber();
// scoreValue();
