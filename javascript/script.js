const bubbleContainer = document.querySelector('.panelBtm')
const timerCount = document.querySelector('#timer')
const hittingNum = document.querySelector('#hitNum')
const score = document.querySelector('#scoreVal')

const resetGame = document.querySelector('.button')


function makeBubble(){
    let totalBubble= "";
for(let i=0; i<=103; i++){
    var randomNum = Math.floor(Math.random()*10)
    totalBubble = totalBubble + `<div class="bubble">${randomNum}</div>`
}
bubbleContainer.innerHTML = totalBubble;
}

let count = 60;
function timerCounter(){
    var timer =  setInterval(function(){
        if(count>0){
            count--;
            timerCount.textContent = `${count} sec`;
        }
        else{
            clearInterval(timer) 
            // alert("Time's Up!")
            bubbleContainer.innerHTML = `
            <h1 style="color: red">Time's Up!</h1>
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



let totalScore = 0
function resetScore() {
    totalScore = 0; // Reset the score to 0
    // scoreValue(); // Update the score display
    updateScore()
}
function increaseScoreValue(){
    totalScore += 10
    updateScore();
}
function updateScore(){
    score.textContent = totalScore
}


bubbleContainer.addEventListener('click',function(event){
    // console.log(event.target.textContent)
    targetVal =  event.target.textContent
    if( targetVal == hittingNum.textContent){
        increaseScoreValue()
        makeBubble();
        hitNumber();
    }
})

timerCounter();
makeBubble();
hitNumber();
// scoreValue();


resetGame.addEventListener('click',function(){
    // resetTimerCounter();
    resetScore();
    makeBubble();
    hitNumber();
    

})

