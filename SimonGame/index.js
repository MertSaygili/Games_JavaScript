// Attributes
var colors = ["green", "red", "yellow", "blue"];
var colorOrder = [];
var countOfTrueColors = 0;
var level = 1;
var text = "Level " + level;
var gameIsOn = false;

// Functions
function addRandomColorToOrder(){ // push color to colorOrder
  var color = colors[Math.floor(Math.random() * 4)];
  colorOrder.push(color);
  soundsOfColors(color);
  console.log(colorOrder);
}

function gameOver(){ // executes if game is over
  $(".normal").attr("class", "game-over"); // adding game of class
  $(".title").text("Game Over, Press Any Key to Restart");

  var audio = new Audio("sounds/wrong.mp3");
  audio.play();

  colorOrder = []; // DELETES colors inside of the array
  gameIsOn = false;
  countOfTrueColors = 0;
  level = 0;

  setTimeout(function(){ // changes backgroundColor to normal color after 300 ms
    $(".game-over").attr("class", "normal");
  }, 400);
}

function soundsOfColors(color){ // sound of color Buttons
  switch(color){
    case 'green':
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      break;
    case 'red':
      var audio = new Audio("sounds/red.mp3");
      audio.play();
      break;
    case 'yellow':
      var audio = new Audio("sounds/yellow.mp3");
      audio.play();
      break;
    case 'blue':
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
      break;
  }

  $("." + color).addClass("pressed");
  $("." + color).css("backgroundColor", "red");

  setTimeout(function(){
    $("." + color).removeClass("pressed");
    $("." + color).css("backgroundColor", color);

  }, 200);

}

$(document).keydown(function(){ // if user clicks any key, game starts
  if(!gameIsOn){
    addRandomColorToOrder(); // Adds first random color
    gameIsOn = true;
    $(".title").text(text);
  }
});

$("button").click(function(e){
  var color = $(this).attr("class").replace("btn ", "");
  console.log("user clicked: " + color);

  if(!gameIsOn){ // game has not been started yet so give error
    gameOver();
    soundsOfColors(color);
  }
  else{
    if(colorOrder[countOfTrueColors] == color){
      console.log(colorOrder.length);
      if(countOfTrueColors + 1 == colorOrder.length){
        level = level + 1;
        $(".title").text("Level " + level);
        countOfTrueColors = 0;
        soundsOfColors(color);

        setTimeout(function () {
          addRandomColorToOrder();
        }, 500);
      }
      else{
        countOfTrueColors = countOfTrueColors + 1; // or countOfTrueColors++
        soundsOfColors(color);
      }
    }
    else{
      gameOver();
      soundsOfColors(color);
    }
  }
});
