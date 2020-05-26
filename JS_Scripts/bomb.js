//mahmoud ezz
let down = 0;
let left = 0;
let bomb;
let audio;
let counter=0;
let timerbar;
let xBomb = 0;
let yBomb = 0;
let yBird = 0;
let xBird = 0;
$(function () {
    if(gameSpeed=="high")
    {
        setTimeout(dropBomb, 5000);
        //creating a sound object
        audio = new Audio('sound/explosion.mp3');
    }
   
    //timer bar
    timerbar = document.querySelector(".progress-bar");
    //start timer
    timer();
})
//create bomb
function createBomb() {
    bomb = document.createElement("IMG");
    $(bomb).css({ width: "80px", height: "80px", position: "absolute" });
    $(bomb).css("left", left + "px");
    bomb.src = "images/1.gif";
    bomb.addEventListener("click", explotion);
}
//destory the bomb
function destroyBomb() {
    $(bomb).detach();
}
//explotion event
function explotion() {
    bomb.src = "images/explode.gif";
    audio.play();
    xBomb = parseInt($(bomb).css("left"));
    yBomb =  parseInt($(bomb).css("top"));
    setTimeout(destroyBomb, 500);
    //target other ducks
    for (i in Birdsarray1) {
        yBird = parseInt(Birdsarray1[i].Body.style.top);
        xBird = parseInt(Birdsarray1[i].Body.style.left);
        if(((xBird > (xBomb-200)) && (xBird < (xBomb+200))) && ((yBird > (yBomb-200)) && (yBird < (yBomb+200)))){
            $(Birdsarray1[i].Body).trigger("click");
        }
    }
    for (i in Birdsarray2) {
        yBird = parseInt(Birdsarray2[i].Body.style.top);
        xBird = parseInt(Birdsarray2[i].Body.style.left);
        if(((xBird > (xBomb-200)) && (xBird < (xBomb+200))) && ((yBird > (yBomb-200)) && (yBird < (yBomb+200)))){
            $(Birdsarray2[i].Body).trigger("click");
        }
    }
    for (i in Birdsarray3) {
        yBird = parseInt(Birdsarray3[i].Body.style.top);
        xBird = parseInt(Birdsarray3[i].Body.style.left);
        if(((xBird > (xBomb-200)) && (xBird < (xBomb+200))) && ((yBird > (yBomb-200)) && (yBird < (yBomb+200)))){
            $(Birdsarray3[i].Body).trigger("click");
        }
    }


}

//bomb movement
function dropBomb() {
    left = Math.floor((window.innerWidth) * Math.random());
    createBomb();
    $("#maindiv").append(bomb);
    id = setInterval(function () {
        //down increaseing
        down += 5;
        //bomb movement
        if (down < (window.innerHeight - parseInt($(bomb).css("height")))) {
            $(bomb).css("top", down + "px");
            $(bomb).css("left", left + "px");

        }
        else {
            //removing bomb obj and clear interval
            $(bomb).detach();
            clearInterval(id);
            //reassign a new random position
            left = Math.floor((window.innerWidth) * Math.random());
            down = 0;
            //test
            console.log("done");
            //waiting for 4 seconds before droping the new bomb
            setTimeout(dropBomb, 1000);
        }
    }, 50);
}


////////////////////////////////////////////////////////////////
//timer
function timer() {
    
   id2 = setInterval(function () {
        counter++;
        timerbar.innerText = counter+"%";
        $(timerbar).attr(`aria-valuenow`,counter+"");
        $(timerbar).css("width",counter+"%");
        // if(counter == 100){
        //     // counter = 0;
        //     clearInterval(id2);
        // }
        /////////////////////////////
        //hajar
          //checkwinners
     if(counter<100&&score>=200)
     {
         setTimeout(function(){winnerWinner()},500);
         clearInterval(id2);
     }
     //checklosers
     if(counter==100&&score<200)
     {
         //testing
         setTimeout(function(){loserLoser()},500);
         clearInterval(id2);
        
     }
     //////////
           
    }, 1000);   
    
}
