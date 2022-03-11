// Attributes
var area, time, diffucult, shiningTime, boxCount, isGameOn = false;

// takes game's setting value, hide .box class
function takeAttributesAndHide(){
  // takes values
  time = $(".time").val()[0] + $(".time").val()[1];
  diffucult = $(".difficult").val();
  console.log(time);

  // hide class
  $("table").hide(500);
}

// chooses random box
function randomBoxes(){
  return Math.floor(Math.random() * boxCount) + 1;
}

// sleep function
function sleep(ms){
  return new Promise(resolve=> setTimeout(resolve, ms));
}

// if user clicks start button then game begins
/*
$(".start").click(function(){

  takeAttributesAndHide();
  createButton();
  isGameOn = true;

  // game time
  var start = new Date();
  setInterval(function(){
    var sec = parseInt((new Date() - start) / 1000)
    $(".title").text(sec);
    if(sec == time){
      // opens page again
      location.reload();
    }
  }, 1000);

  // button listener
  $(".btn-img").click(function(){
    alert("anan");
  });

});
*/
