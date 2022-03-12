// Attributes
var time, difficulty, shiningTime, boxesCount = 0, score = 0, random, isGameOn = true;
var a = window.location.href;

function createBoxes(boxesCount) {
  this.boxesCount = boxesCount;
  for (let i = 1; i <= boxesCount; i++) {
    $(".game").append('<button class="btn-img" type="button" name=" ' + i + '"' + '><img src="Images/wall.jpg" class="img' + i + '"' + '></button>');
    if (i % 10 == 0) {
      $(".game").append("<br>");
    }
  }
}

//
function randomBox() {
  return Math.floor(Math.random() * boxesCount) + 1;
}

// restart key
$(document).keydown(function(){
  if(isGameOn == false)
    location.reload();
});

// taking time from location
time = a.charAt(a.indexOf("time1=") + 6) + a.charAt(a.indexOf("time1=") + 7);

// taking difficulty from location
var indexOfDifficult = a.indexOf("difficult1=") + 11; // starting index of difficult1
while (a.charAt(indexOfDifficult) != '&') { // takes every char until char is &
  difficulty = difficulty + a.charAt(indexOfDifficult++);
}
difficulty = difficulty.replace("undefined", "");


// Adding button according to game level
if (difficulty == "easy") {
  shiningTime = 600;
  createBoxes(40);
} else if (difficulty == "normal") {
  shiningTime = 400;
  createBoxes(46);
} else { // executes if game level is hard
  shiningTime = 300;
  createBoxes(55);
}


// game time
var start = new Date();
var gameTime = setInterval(function() {

  var sec = time - parseInt((new Date() - start) / 1000)
  $(".title").text(sec);
  if (sec == 0) {
    $(".score").text("Your score is: " + score + " Press any key to restart");
    isGameOn = false;
    clearInterval(gameTime);
    clearInterval(showBlockTime);
    $(".go-back").text("Change Settings!");
  }
}, 1000);

// listener of buttons
$(".btn-img").click(function(){
  score = score + 1;
  $(".score").text(score);
});

// shows block
var showBlockTime = setInterval(function(){
  var time_1 = time_1 + shiningTime;
  var time_2;
  var x = randomBox();
  random = x;
  $(".img" + x).attr("src", "Images/yellowWall.jpg");
  $(".img" + x).css("visibility", "visible");

  setTimeout(function(){
    $(".img" + x).attr("src", "Images/wall.jpg");
    $(".img" + x).css("visibility", "hidden");
  },800);

}, shiningTime);
