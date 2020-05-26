//mahmoud ezz
let speed = 0;
var gameSpeed=document.cookie;

$(function () {
    //checking for levels
    if(gameSpeed=="low"){
        speed = 10;
    }
    if(gameSpeed=="high"){
        speed = 25;
    }
    //hajar
    //player name in game scene
    document.getElementById('username').innerText=window.name;
})

//popup winning window
function winnerWinner (){
    Swal.fire({
        icon: 'success',
        background: 'lightgreen',
        title: 'Congratulations',
        text: 'YOU ARE WINNER,play again?',
        textcolor:'white',
        showCancelButton: true,
        allowOutsideClick: false,
        cancelButtonText: 'No,cancel!',
        cancelButtonColor:'red',
        confirmButtonColor:'blue',
        confirmButtonText: 'Yes',
        reverseButtons: true,
        

      });

     
      //continue playing
      $(".swal2-cancel").on('click',function(){
        closeWindow();
        //testing
        // alert("hello");
      });
      //close game
      $(".swal2-confirm").on('click',function(){
        location.reload();
 });
    
}
//popup losing window
function loserLoser(){
     Swal.fire({
        icon: 'error',
        background: 'lightgreen',
        title: 'Oops,Time is out',
        text: 'Do you want to play again?',
        showCancelButton: true,
        allowOutsideClick: false,
        allowEscapeKey:false,
        cancelButtonText: 'No,cancel!',
        confirmButtonText: 'Yes',
        reverseButtons: true
      });
      //continue playing
     $(".swal2-cancel").on('click',function(){
        closeWindow();
 });
 //closed game
 $(".swal2-confirm").on('click',function(){
     location.reload();
});
}
///////////////////////

//hussien
//birds  class and movement function and appending to parent 
class Bird{
    constructor(Top=50,Left=50,Src){
        this.Body= new Image();
        this.Body.src=Src;
        this.Body.classList.add("css1");
        this.Body.style.top=Top+"px";
        this.Body.style.left=Left+"px";
    }
    moveLeft=function(){
        this.Body.style.left=((parseInt(this.Body.style.left))-speed)+"px";
    }

    addToParent=function(parent){parent.appendChild(this.Body);}
}
//handling the lady,dog,coin creating them and moving and hiding them
let lady=$('<img src="images/throwingMoney.gif"/>');
lady.addClass("css");
lady.css({left:'150px',top:'400px'});
lady.appendTo($("#maindiv"));
lady.hide();
let dog=$('<img src="images/stupid.gif"/>');
dog.addClass("css");
dog.css({left:'150px',top:'450px'});
dog.appendTo($("#maindiv"));
dog.hide();
let coin=$('<img src="images/Coin.gif"/>');
coin.addClass("css");
coin.appendTo($("#maindiv"));
coin.hide();

//creating ducks randomly 
let Birdsarray1=[];
let Birdsarray2=[];
let Birdsarray3=[];
setInterval(function(){
Birdsarray1.push(new Bird(Math.floor(Math.random() * (400 - 20 + 1)) + 20 ,1200,"images/GoldenDuck.gif"));
for(i in Birdsarray1){Birdsarray1[i].addToParent(document.querySelector("#maindiv"))}
},Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000 )
setInterval(function(){
Birdsarray2.push(new Bird(Math.floor(Math.random() * (400 - 20 + 1)) + 20 ,1200,"images/BrownDuck.gif"));
for(i in Birdsarray2){Birdsarray2[i].addToParent(document.querySelector("#maindiv"))}
},Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000 )
setInterval(function(){
Birdsarray3.push(new Bird(Math.floor(Math.random() * (300 - 30 + 1)) + 50 ,1200,"images/BlackDuck.gif"));
for(i in Birdsarray3){Birdsarray3[i].addToParent(document.querySelector("#maindiv"))}
},Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000 )
///////////////////////////////////////////
//hajar
//birds movement
setInterval(function(){
    for(i in Birdsarray1){Birdsarray1[i].moveLeft();
        //birds deletion from the array if they go outside the screen
        if((parseInt(Birdsarray1[i].Body.style.left))<-150){Birdsarray1.splice(i,1);}
    }
    for(i in Birdsarray2){Birdsarray2[i].moveLeft();
        //birds deletion from the array if they go outside the screen
        if((parseInt(Birdsarray2[i].Body.style.left))<-150){Birdsarray2.splice(i,1);}
    }
    for(i in Birdsarray3){Birdsarray3[i].moveLeft();
        //birds deletion from the array if they go outside the screen
        if((parseInt(Birdsarray3[i].Body.style.left))<-150){Birdsarray3.splice(i,1);}
    }
},100)
//husssein
//game sounds
let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio3");
//function to play sound
function playsound() {
    audio1.play();
  }
//play the reload sound after gun shot
audio1.addEventListener('ended', function(){
    audio2.play();
})
//cursor shape
$("#maindiv").on("mouseover",function(){
    $("#maindiv").css({'cursor':'url("images/cursor.cur"),default'});
})
//handling shooting bullets and birds dying and fading and removing them from array and increasing score
$("#maindiv").on("click",function(event){
    for(i in Birdsarray1){
        if(event.target==Birdsarray1[i].Body){
            Birdsarray1[i].Body.src="images/Dead.gif";
            window.score+=10;
            scoreLabel = document.getElementById('score');
            scoreLabel.innerText=window.score;
            localStorage.setItem(window.name,window.score);
            $(event.target).fadeTo(2000);
            $(event.target).animate({top:'400px',opacity:'0.8'},200).hide(1000);
            Birdsarray1.splice(i,1);
            dog.hide();
            lady.show();
            setTimeout(function(){ lady.hide(); }, 2000);
            console.log($(event.target).css("left"));
            coin.css({left:$(event.target).css("left"),top:$(event.target).css("top")});
            audio3.play();
            coin.show();
            setTimeout(function(){ coin.hide(1000); }, 500);
        }
    }
    //handling shooting bullets and birds dying and fading and removing them from array and increasing score
    for(i in Birdsarray2){
        if(event.target==Birdsarray2[i].Body){
            Birdsarray2[i].Body.src="images/Dead.gif";
            window.score+=5;
            //hajar
            //get score from local sotrage
            scoreLabel = document.getElementById('score');
            scoreLabel.innerText=window.score;
            ////////////

            //hussien
        
            localStorage.setItem(window.name,window.score);
            $(event.target).fadeTo(2000);
            $(event.target).animate({top:'400px',opacity:'0.8'},200).hide(1000);
            Birdsarray2.splice(i,1);
        }
    }
    //handling shooting bullets and birds dying and fading and removing them from array and increasing score
    for(i in Birdsarray3){
        if(event.target==Birdsarray3[i].Body){
            Birdsarray3[i].Body.src="images/Dead.gif";
            if(window.score>=10)
            window.score-=10;
            else 
            {
                window.score=0;
            }
            scoreLabel = document.getElementById('score');
            scoreLabel.innerText=window.score;
            localStorage.setItem(window.name,window.score);
            $(event.target).fadeTo(1500);
            $(event.target).animate({top:'400px',opacity:'0.8'},200).hide(1000);
            Birdsarray3.splice(i,1);
            lady.hide();
            dog.show();
            setTimeout(function(){ dog.hide(); }, 2000);
        }
    }
    

})



