var wordToGuess = ["Tuna", "Sardines", "Cod", "Bluefish"];

var index = Math.floor(Math.random() * wordToGuess.length);

var wordSelected = wordToGuess[index];

var word= require ("./word.js");

var gameWord = new word (wordSelected);

var inquirer = require ("inquirer");

// console.log("how to play the game info");
gameWord.displayDashes()

function getUserInput() {
  inquirer.prompt({ 
    type:"input",
    name:"userentry",
    message:"Press any letter"
  }).then(function(response){
    getUserInput(response.userSelect)
    
//this is for the letter matching up and replacing dashes//
    // getUserInput.add(.charAt(0));
    word = "";
    for(i = 0; i < wordSelected.length(); i++)
    {
        if(word.charAt(i) == userInput.charAt(0))
        {
            marks[i] = "" + userInput.charAt(0);
        }
        currentWord += marks[i]
      }

    var matchWord = [];
    for (letter = 0; b < word.wordSelected.length; b++)
    {
      if (word.wordSelected[i].character === answer.letter){
        matched = true;
      }
      else {
        matched = false;
      }
      matchWord.push(matchWord);
      console.log(matchWord);

      if(matchWord.includes(true)){
        console.log("Good job!");
      
        console.log(word.gameWord + '\n');
      }
      }
    });
  }
    getUserInput();