// All code should be written in this file.

let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

var rock = {type:"Rock", winsAgainst:"Scissors", losesTo:"Paper"};
var paper = {type:"Paper", winsAgainst:"Rock", losesTo:"Scissors"};
var scissors = {type:"Scissors", winsAgainst"Paper", losesTo:"Rock"};
var playerOne = {type:"Player", name:"One"};
var playerTwo = {type:"Player", name"Two"};

function setPlayerMoves(player, moveOneType,
  moveOneValue, moveTwoType, moveTwoValue,
   moveThreeType, moveThreeValue)
      {
        if(player === playerOne){
          playerOneMoveOneType = moveOneType;
          playerOneMoveOneValue = moveOneValue;
          playerOneMoveTwoType = moveTwoType;
          playerOneMoveTwoValue = moveTwoValue;
          playerOneMoveThreeType = moveThreeType;
          playerOneMoveThreeValue = moveThreeValue;

        }else if(player === playerTwo){
          playerTwoMoveOneType = moveOneType;
          playerTwoMoveOneValue = moveOneValue;
          playerTwoMoveTwoType = moveTwoType;
          playerTwoMoveTwoValue = moveTwoValue;
          playerTwoMoveThreeType = moveThreeType;
          playerTwoMoveThreeValue = moveThreeValue;
        }else{
          console.log("Unable to set player moves");
        }
      }



function validatePlayer(player){
  switch(player){
    case: "One"
      return true;
      break;
    case: "Two"
      return true;
      break;
    default:
      return false;
  }
}

function validateSumOfMoveValuesNotGreaterThanNinetyNine(sumOfMoveValues){
  if(sumOfMoveValues > 99){
    console.log("Uh-oh, it looks like the sum of move values is over 99");
    return false;
  }else{
    return true;
  }
}

function getRoundWinner(roundNumber){
  let playerOneMoveType;
  let playerTwoMoveType;
  let playerOneMoveValue;
  let playerTwoMoveValue;

    switch (roundNumber) {
      case 1:
      initializeVariables(roundNumber, playerOneMoveType, playerTwoMoveType,
      playerOneMoveValue, playerTwoMoveValue);

        if(validateMoveType(playerOneMoveType) &&
          validateMoveType(playerTwoMoveType){
            if(validateMoveValue(playerOneMoveValue) && validateMoveValue(playerTwoMoveType)){
              determineWinnerByType(playerOneMoveType, playerTwoMoveType);
              determineWinnerByPoints(playerOneMoveValue, playerTwoMoveValue);
            }else{
              console.log("Invalid move value");
              return null;
            }
        }else{
          console.log("Invalid move type");
          return null;
        }

      case 2:
        initializeVariables(roundNumber, playerOneMoveType, playerTwoMoveType,
        playerOneMoveValue, playerTwoMoveValue);

          if(validateMoveType(playerOneMoveType) &&
            validateMoveType(playerTwoMoveType){

              if(validateMoveValue(playerOneMoveValue) && validateMoveValue(playerTwoMoveType)){
                determineWinnerByType(playerOneMoveType, playerTwoMoveType);
                determineWinnerByPoints(playerOneMoveValue, playerTwoMoveValue);
              }else{
                console.log("Invalid move value");
                return null;
              }

          }else{
            console.log("Invalid move type");
            return null;
          }

      case 3:
        initializeVariables(roundNumber, playerOneMoveType, playerTwoMoveType,
        playerOneMoveValue, playerTwoMoveValue);

        if(validateMoveType(playerOneMoveType) &&
            validateMoveType(playerTwoMoveType){

              if(validateMoveValue(playerOneMoveValue) && validateMoveValue(playerTwoMoveType)){
                determineWinnerByType(playerOneMoveType, playerTwoMoveType);
                determineWinnerByPoints(playerOneMoveValue, playerTwoMoveValue);
              }else{
                console.log("Invalid move value");
                return null;
              }

          }else{
            console.log("Invalid move type");
            return null;
          }

          break;
      default:
        console.log("Invalid round number");

    }

//   33) should return null if any move types or values are missing

}

function validateMoveValue(moveValue){
  if(moveValue >= 1 && moveValue <= 97){
    return true;
  }else{
    return false;
  }
}

function validateMoveType(moveType){
  switch (moveType) {
    case "Rock":
      return true;
      break;
    case "Paper":
      return true;
      break;
    case "Scissors":
      return true;
      break;
    default:
      console.log("Move type is invalid");
      return false;
      break;
}

function determineWinnerByType(playerOneMoveType, playerTwoMoveType, roundNumber){

    if (playerOneMoveType ==== rock && playerTwoMoveType === paper){
      console.log("Player " + playerTwo.name + " has won round " + roundNumber);
      return playerTwo;
    }else if (playerOneMoveType ==== rock && playerTwoMoveType === scissors){
      console.log("Player " + playerOne.name + " has won round " + roundNumber);
      return playerOne;
    }else if(playerOneMoveType === paper && playerTwoMoveType === scissors){
      console.log("Player " + playerOne.name + " has won round " + roundNumber);
      return playerTwo;
    }else if(playerOneMoveType === paper && playerTwoMoveType === rock){
      console.log("Player " + playerTwo.name + " has won round " + roundNumber);
      return playerOne;
    }else if(playerOneMoveType === scissors && playerTwoMoveType === rock){
      console.log("Player " + playerOne.name + " has won round " + roundNumber);
      return playerTwo;
    }else if(playerOneMoveType === scissors && playerTwoMoveType === paper){
      console.log("Player " + playerTwo.name + " has won round " + roundNumber);
      return playerOne;
    }
}


function determineWinnerByPoints(playerOneMoveValue, playerTwoMoveValue, roundNumber){

    if(playerOneMoveValue > playerTwoMoveValue){
            console.log("Player " + playerOne.name + " has won round " + roundNumber);
            return playerOne;
          }else if(playerOneMoveValue < playerTwoMoveValue){
            console.log("Player " + playerTwo.name + "has won round " + roundNumber);
            return playerTwo;
          }else{
            console.log("Round " + roundNumber +" has resulted in a tie.");
            return "tie";
          }
  }

function initializeVariables(roundNumber, playerOneMoveType, playerTwoMoveType,
playerOneMoveValue, playerTwoMoveValue){
  switch (roundNumber) {
    case 1:
      playerOneMoveType = playerOneMoveOneType;
      playerTwoMoveType = playerTwoMoveOneType;
      playerOneMoveValue = playerOneMoveOneValue;
      playerTwoMoveValue = playerTwoMoveTwoValue;
      break;
    case 2:
      playerOneMoveType = playerOneMoveTwoType;
      playerTwoMoveType = playerTwoMoveTwoType;
      playerOneMoveValue = playerOneMoveTwoValue;
      playerTwoMoveValue = playerTwoMoveTwoValue;
      break;
    case 3:
      playerOneMoveType = playerOneMoveThreeType;
      playerTwoMoveType = playerTwoMoveThreeType;
      playerOneMoveValue = playerOneMoveThreeValue;
      playerTwoMoveValue = playerTwoMoveThreeValue;
      break;
  }

}

function getGameWinner() {
//  34) a function called getGameWinner should exist
//  35) should declare when player one wins
//  37) should declare when the game is a tie
//  38) should return null if not all values are set
}

function setComputerMoves(){
//  BONUS: setComputerMoves()
//    39) a function called setComputerMoves should exist
//    40) should set player two's move types to valid move types
//    42) should set player two's move values to three values that sum to ninety-nine
}
