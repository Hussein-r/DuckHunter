//hajar
//passing score and name to next scene
var localkey ;
window.score=0;
var gameLevel="low";
$("#myselect").change(function () {
  gameLevel = $("#myselect option:selected").val();
});
//hajar
  //passing name to game scene 
 //save items(name and password) in local storage    
 function savelocalfun() {
   //mahmoud ezz
   //saving level of game
    document.cookie = gameLevel;
    //hajar
    localkey = document.getElementById('usernameField');
    if(localStorage.getItem(localkey.value) === null){
       window.name=localkey.value ;
        localStorage.setItem(window.name,window.score);
        welecomeDiv();
    }
    else{
        welecomeDiv();}
    }

    //hajar
    //welecome div to player
function welecomeDiv(){
//passing last score of player and name 
    var currentScore=0;
    window.name=localkey.value ; 
    currentScore=localStorage.getItem(localkey.value);
    Swal.fire({
        confirmButtonText: 'Start Game',
        title: 'Welecome '+localkey.value,
        text: 'Your last score is  '+ currentScore,
        showClass: {
          popup: 'animated fadeInDown faster'
        },
        hideClass: {
          popup: 'animated fadeOutUp faster'
        },
      });
      $(".swal2-confirm").on('click',function(){
        window.open("Game.html","_self");
 });
      
}

//hajar
//close game scene

function closeWindow(){
    window.open("Start Game.html","_self");
}
 

