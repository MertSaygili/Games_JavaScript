// attributes
var options = ["scissors", "rock", "paper"];
var roundCount = 0;
var playerScore = 0, computerScore = 0;

// random choice for computer
function randomPlay(){ // returns random play
  return options[Math.floor(Math.random() * 3)];
}

// update score after every move
function updateScore(playerScore, computerScore){
  $(".score").text(playerScore + " - " + computerScore);
}

// resets game
function resetGame(){

  setTimeout(function(){
    roundCount = 0;
    playerScore = 0;
    computerScore = 0;
    $(".score").text("0 - 0");
    $(".result-text").text("Make your move");
    $(".countdown").text("Best of 5");
  }, 2000);
}

// compares computer and user's moves and decides who wins the round
function comparePlays(playerMove, computerMove){

  if(playerMove == computerMove){ // same play DRAW
    $(".result-text").text("Draw " + roundCount + ". round");
  }
  else if(playerMove == "rock" && computerMove != "paper"){
    // above line means; computer choose scissors, rock won, player won
    $(".result-text").text("Player won the " + roundCount + ". round");
    updateScore(++playerScore, computerScore);
  }
  else if(playerMove == "rock" && computerMove == "paper"){
    // above line means; paper won, computer won
    $(".result-text").text("Computer won the " + roundCount + ". round");
    updateScore(playerScore, ++computerScore);
  }
  else if(playerMove == "paper" && computerMove != "scissors"){
    // above line means; computer choose rock, paper won, player won
    $(".result-text").text("Player won the " + roundCount + ". round");
    updateScore(++playerScore, computerScore);
  }
  else if(playerMove == "paper" && computerMove == "scissors"){
    // above line means; scissors won, computer won
    $(".result-text").text("Computer won the " + roundCount + ". round");
    updateScore(playerScore, ++computerScore);
  }
  else if(playerMove == "scissors" && computerMove != "rock"){
    // above line means; computer choose paper, scissors won, player won
    $(".result-text").text("Player won the " + roundCount + ". round");
    updateScore(++playerScore, computerScore);

  }
  else if(playerMove == "scissors" && computerMove == "rock"){
    // above line means; rock won, computer won
    $(".result-text").text("Computer won the " + roundCount + ". round");
    updateScore(playerScore, ++computerScore);

  }
}

// if user clicks any image on website
$("img").click(function(){

  var playerMove = $(this).attr("class");

  // if user clicks result-area's images just pass
  if(playerMove == "player-choosen" || playerMove == "computer-choosen");
  else{
    var computerMove = randomPlay(); // creating computer play

    roundCount = roundCount + 1; // increase round count + 1
    comparePlays(playerMove, computerMove);

    // Setting new images
    $(".player-choosen").attr("src", "Images/" + playerMove + ".png");
    $(".computer-choosen").attr("src", "Images/" + computerMove + ".png");
    $(".countdown").text((5 - roundCount) + " round left!");


    // Checks random count
    if(roundCount == 5){ // game finished
      if(playerScore > computerScore){ // player won
        $(".result-text").text("Player Won");
      }
      else{ // computer won
        $(".result-text").text("Computer Won");
      }
      resetGame();
    }
    else if(playerScore == 3){ // player won
      $(".result-text").text("Player Won");
      resetGame();
    }
    else if(computerScore == 3){ // computer won
      $(".result-text").text("Computer Won");
      resetGame();
    }
    else if(computerScore == 2 && playerScore == 2){
      $(".result-text").text("Draw");
      resetGame();
    }
  }

});
