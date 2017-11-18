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
var scissors = {type:"Scissors", winsAgainst:"Paper", losesTo:"Rock"};

function setPlayerMoves(player, moveOneType,
  moveOneValue, moveTwoType, moveTwoValue,
   moveThreeType, moveThreeValue)
      {

        if(moveOneType === undefined ||
        moveTwoType === undefined ||
        moveThreeType === undefined){
            return null;
        }else if(moveOneValue === undefined ||
        moveTwoValue === undefined ||
      moveThreeValue === undefined){
        return null;
      }else if(validateMoveType(moveOneType) &&
    validateMoveType(moveTwoType) && validateMoveType(moveThreeType)){
      return null;
    }else if (validateMoveValue(moveOneValue) && validateMoveValue(moveTwoValue)
    && validateMoveValue(moveThreeValue)){
      return null;
    }else  if(validatePlayer(player) && player === "Player One")
        {
          playerOneMoveOneType = moveOneType;
          playerOneMoveOneValue = moveOneValue;
          playerOneMoveTwoType = moveTwoType;
          playerOneMoveTwoValue = moveTwoValue;
          playerOneMoveThreeType = moveThreeType;
          playerOneMoveThreeValue = moveThreeValue;
        } else if(validatePlayer(player) && player === "Player Two")
        {

          playerTwoMoveOneType = moveOneType;
          playerTwoMoveOneValue = moveOneValue;
          playerTwoMoveTwoType = moveTwoType;
          playerTwoMoveTwoValue = moveTwoValue;
          playerTwoMoveThreeType = moveThreeType;
          playerTwoMoveThreeValue = moveThreeValue;
        }else{
          return null;
        }
      }



function validatePlayer(player){
  switch(player){
    case "Player One":
      return true;
      break;
    case "Player Two":
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
  let roundWinner;

    switch (roundNumber) {
      case 1:
        initializeVariables(roundNumber, playerOneMoveType, playerTwoMoveType,
        playerOneMoveValue, playerTwoMoveValue);

        roundWinner =  determineWinnerByType(playerOneMoveType, playerTwoMoveType);

        if(roundWinner === "Player One" || roundWinner ===  "Player Two"){
          return roundWinner;
        }else{
          roundWinner = determineWinnerByPoints(playerOneMoveValue, playerTwoMoveValue, roundNumber);
        }

        return roundWinner;
        break;
      case 2:
        initializeVariables(roundNumber, playerOneMoveType, playerTwoMoveType,
        playerOneMoveValue, playerTwoMoveValue);

        roundWinner =  determineWinnerByType(playerOneMoveType, playerTwoMoveType);

        if(roundWinner !== "Player One" && roundWinner !==  "Player Two"){
          roundWinner = determineWinnerByPoints(playerOneMoveValue, playerTwoMoveValue, roundNumber);
        }

        return roundWinner;
        break;
      case 3:
        initializeVariables(roundNumber, playerOneMoveType, playerTwoMoveType,
        playerOneMoveValue, playerTwoMoveValue);

        roundWinner =  determineWinnerByType(playerOneMoveType, playerTwoMoveType);

        if(roundWinner !== "Player One" && roundWinner !==  "Player Two"){
          roundWinner = determineWinnerByPoints(playerOneMoveValue, playerTwoMoveValue, roundNumber);
        }

        return roundWinner;
        break;
      default:
        return null;
      }
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
    case "rock":
      return true;
      break;
    case "paper":
      return true;
      break;
    case "scissors":
      return true;
      break;
    default:
      return false;
      break;
    }
  }

function determineWinnerByType(playerOneMoveType, playerTwoMoveType, roundNumber){

    if (playerOneMoveType === "rock" && playerTwoMoveType === "paper"){
      return "Player One";
    }else if (playerOneMoveType === "rock" && playerTwoMoveType === "scissors"){
      return "Player One";
    }else if(playerOneMoveType === "paper" && playerTwoMoveType === "scissors"){
      return "Player Two";
    }else if(playerOneMoveType === "paper" && playerTwoMoveType === "rock"){
      return "Player One";
    }else if(playerOneMoveType === "scissors" && playerTwoMoveType === "rock"){
      return "Player Two";
    }else if(playerOneMoveType === "scissors" && playerTwoMoveType === "paper"){
      return "Player One";
    }else{
      console.log("No winner by type: " + playerOneMoveType + " " + playerTwoMoveType);
      return false;
    }
}


function determineWinnerByPoints(playerOneMoveValue, playerTwoMoveValue, roundNumber){

    if(playerOneMoveValue > playerTwoMoveValue){
            console.log("Player One has won round " + roundNumber);
            return "Player One";
          }else if(playerOneMoveValue < playerTwoMoveValue){
            console.log("Player Two has won round " + roundNumber);
            return "Player Two";
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
