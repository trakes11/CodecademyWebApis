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

function determinePlayerMoveType(){
  console.log("Please type in your move [Rock, Paper, Scissors]:");
  let input = readline();
  return input;
}

function determinePlayerMoveValue(){
  console.log("Please type in an integer between 1 and 99 for your move value:");
  let input = readline();
  return input;
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

function validateMoveValue(moveValue){
  if(moveValue >= 1 && moveValue <= 99){
    return true;
  }else{
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

    switch (roundNumber) {
      case 1:
        return determineRoundOneWinner();
      case 2:
        return determineRoundTwoWinner();
        break;
      case 3:
        return determineRoundThreeWinner();
        break;
      default:
        console.log("Hmmmm....we do not know what round it is");
    }

//  24) should return the correct winner with rock versus scissors
//   25) should return the correct winner with rock versus paper
//   26) should return the correct winner with paper versus scissors
//   27) should return the correct winner with two of the same move type and different values
//   28) should return the correct winner with two of the same move type and the same value
//   29) should return the correct winner for round one
//   30) should return the correct winner for round two
//   31) should return the correct winner for round three
//   32) should return null for an invalid round number
//   33) should return null if any move types or values are missing

}


function determineRoundOneWinner(){
  if (playerOneMoveOneType ==== rock && playerTwoMoveOneType === paper){
    console.log("Player " + playerTwo.name + " has won round one.")
    return playerTwo;
  }

  if (playerOneMoveOneType ==== rock && playerTwoMoveOneType === scissors){
    console.log("Player " + playerOne.name + " has won round one.")
    return playerOne;
  }

  if (playerOneMoveOneType.type ==== playerTwoMoveOneType.type){
    if(playerOneMoveOneValue > playerTwoMoveOneValue){
      console.log("Player " + playerOne.name + " has won round one.");
      return playerOne;
    }else if(playerOneMoveOneValue < playerTwoMoveOneValue){
      console.log("Player " + playerTwo.name + "has won round one.");
      return playerTwo;
    }
    else{
      console.log("Round one has resulted in a tie.");
      return "tie";
    }
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
