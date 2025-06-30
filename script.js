var timer=60;
var score=0;
var hitrn=0;
    function makeBubbles() {
    var cluster="";
    for(var i=1;i<=68;i++){
        var rn =Math.floor(Math.random()*10);
        cluster+=`<div class="bubble"> ${rn} </div>`;
    }
    
    document.querySelector("#pbtm").innerHTML=cluster;
    }    
    
    function runTimer(){
      var timerint=setInterval(function(){
         if(timer>0){
            timer--;
         
         document.querySelector("#timervalue").textContent=timer;
         } 
         else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
            // document.getElementById("restartBtn").style.display = "block";
            
        }
         
      },1000)
      
    }

    function getNewHit(){
        hitrn=Math.floor(Math.random()*10);
        document.querySelector("#hitval").textContent=hitrn;

    }
    
    function increaseScore(){
        score+=10;
        document.querySelector("#scoreval").textContent=score;

    };
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum=dets.target.textContent;
    if(clickednum==hitrn){
        increaseScore();
        makeBubbles();
        getNewHit();
    }
});

// function restartGame() {
//     timer = 6;
//     score = 0;
//     document.querySelector("#scoreval").textContent = score;
//     document.querySelector("#timervalue").textContent = timer;
//     makeBubbles();
//     runTimer();
//     getNewHit();
//     document.getElementById("restartBtn").style.display = "none"; // Hide restart button again
// }

makeBubbles();
runTimer();
getNewHit();

// document.getElementById("restartBtn").addEventListener("click", restartGame);

