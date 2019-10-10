var wordToGuess = ["Tuna", "Sardines", "Cod", "Bluefish"];

var index = Math.floor(Math.random() * wordToGuess.length);

var wordSelected = wordToGuess(index);

var word= require ("./Word");

var gameWord = new word (wordSelected);

var inquirer = require ("inquirer");

console.log("how to play the game info");
gameWord.displayDashes()

function getUserInput() {
  inquirer.prompt({ 
    type:"input",
    name:"userentry",
    message:"Press any letter"
  }).then(function(response){
    gameWord.checkLetter(response.userEntry)
  })




}



var includes = function(arr, elem){
  for (var i = 0; i < arr.length; i++){
    if(elem === arr[i]){
      return true;
    }
  } 
  
  return false;
}