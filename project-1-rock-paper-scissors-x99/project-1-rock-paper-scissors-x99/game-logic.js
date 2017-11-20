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

let sumOfPlayerOneValues;
let sumOfPlayerTwoValues;

let playerOneMoveType;
let playerTwoMoveType;
let playerOneMoveValue;
let playerTwoMoveValue;
let roundWinner;

function setPlayerMoves(player, moveOneType,
  moveOneValue, moveTwoType, moveTwoValue,
   moveThreeType, moveThreeValue)
      {

        if(moveOneType === undefined ||
        moveTwoType === undefined ||
        moveThreeType === undefined){
            return null;
        }

        if(moveOneValue === undefined ||
        moveTwoValue === undefined ||
      moveThreeValue === undefined){
        return null;
      }

      if(validateMoveType(moveOneType) &&
    validateMoveType(moveTwoType) && validateMoveType(moveThreeType)){
      return null;
    }

    if (validateMoveValue(moveOneValue) && validateMoveValue(moveTwoValue)
    && validateMoveValue(moveThreeValue)){
      return null;
    }

    if(validatePlayer(player) === false){
      return null;
    }

    if(player === "Player One")
        {
          playerOneMoveOneType = moveOneType;
          playerOneMoveOneValue = moveOneValue;
          playerOneMoveTwoType = moveTwoType;
          playerOneMoveTwoValue = moveTwoValue;
          playerOneMoveThreeType = moveThreeType;
          playerOneMoveThreeValue = moveThreeValue;

          sumOfPlayerOneValues = sumMoveValues(playerOneMoveOneValue,
            playerOneMoveTwoValue, playerOneMoveThreeValue);

        } else if(player === "Player Two")
        {

          playerTwoMoveOneType = moveOneType;
          playerTwoMoveOneValue = moveOneValue;
          playerTwoMoveTwoType = moveTwoType;
          playerTwoMoveTwoValue = moveTwoValue;
          playerTwoMoveThreeType = moveThreeType;
          playerTwoMoveThreeValue = moveThreeValue;

          sumOfPlayerTwoValues = sumMoveValues(playerTwoMoveOneValue,
            playeTwoMoveTwoValue, playerTwoMoveThreeValue);
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

function sumMoveValues(moveOne, moveTwo, moveThree){
  if(moveOne >= 1 && moveTwo >= 1 && moveThree >= 1){
    return moveOne + moveTwo + moveThree;
  }else{
    console.log("One or more move values are invalid");
    console.log("Move One: " + moveOne);
    console.log("Move Two: " + moveTwo);
    console.log("Move Three " + moveThree);
    return 0;
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
        roundWinner =  determineWinnerByType(playerOneMoveOneType, playerTwoMoveOneType);

        if(roundWinner === "Player One" || roundWinner ===  "Player Two"){
          return roundWinner;
        }else if(roundWinner === 0){
          roundWinner = determineWinnerByPoints(playerOneMoveOneValue,
            playerTwoMoveOneValue);
            return roundWinner;
        }else{
          console.log("round winner error on type evaluation");
          return 0;
        }

      case 2:
        roundWinner =  determineWinnerByType(playerOneMoveType,
          playerTwoMoveType);

          if(roundWinner === "Player One" || roundWinner ===  "Player Two"){
            return roundWinner;
          }else if(roundWinner === 0){
            roundWinner = determineWinnerByPoints(playerOneMoveOneValue,
              playerTwoMoveOneValue);
              return roundWinner;
          }else{
            console.log("round winner error on type evaluation");
            return 0;
          }

      case 3:
        roundWinner =  determineWinnerByType(playerOneMoveType, playerTwoMoveType);

        if(roundWinner === "Player One" || roundWinner ===  "Player Two"){
          return roundWinner;
        }else if(roundWinner === 0){
          roundWinner = determineWinnerByPoints(playerOneMoveOneValue,
            playerTwoMoveOneValue);
            return roundWinner;
        }else{
          console.log("round winner error on type evaluation");
          return 0;
        }
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

function determineWinnerByType(playerOneMoveType, playerTwoMoveType){

    if (playerOneMoveType === "rock" && playerTwoMoveType === "paper"){
      return "Player Two";
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
      return 0;
    }
}

function determineWinnerByPoints(sumOfPlayerOneValues, sumOfPlayerTwoValues, roundNumber){
    let playerOneValueSum;
    let playerTwoValueSum;

    switch(roundNumber){
      case 1:
        playerOneValueSum = sumOfPlayerOneValues - (playerOneMoveTwoValue + playerOneMoveThreeValue);
        playerTwoValueSum = sumOfPlayerTwoValues - (playerTwoMoveTwoValue + playerTwoMoveThreeValue);

        if(playerOneValueSum > playerTwoValueSum){
          return "Player One";
        } else if(playerOneValueSum < playerTwoValueSum){
          return "Player Two";
        } else if(playerOneValueSum == playerTwoValueSum){
          return "tie";
        }else{
          console.log("unable to determine winner in round " + roundNumber)
          return 0;
        }

      case 2:
        playerOneValueSum = sumOfPlayerOneValues - playerOneMoveThreeValue;
        playerTwoValueSum = sumOfPlayerTwoValues - playerTwoMoveThreeValue;

          if(playerOneValueSum > playerTwoValueSum){
            return "Player One";
          } else if(playerOneValueSum < playerTwoValueSum){
            return "Player Two";
          } else if(playerOneValueSum == playerTwoValueSum){
            return "tie";
          }else{
            console.log("unable to determine winner in round " + roundNumber)
            return 0;
          }

      case 3:
        playerOneValueSum = sumOfPlayerOneValues - playerOneMoveThreeValue;
        playerTwoValueSum = sumOfPlayerTwoValues - playerTwoMoveThreeValue;

        if(playerOneValueSum > playerTwoValueSum){
          return "Player One";
        } else if(playerOneValueSum < playerTwoValueSum){
          return "Player Two";
        } else if(playerOneValueSum == playerTwoValueSum){
          return "tie";
        }else{
          console.log("unable to determine winner in round " + roundNumber)
          return 0;
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
