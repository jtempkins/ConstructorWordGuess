const Letter = require("./letter");

function Word(word) {
    this.gameWord = word;
    this.dashArray = [];
    this.letterArray = []
    for (var i =0; i< word.length; i++) {
        letterArray.push(new Letter(word[i]));
    }

    this.displayDashes = function(){
    for (var i =0; i< word.length; i++) {
        this.dashArray.push("_");
        
    }
    console.log(dashArray);

    }

this.userEntry = function(var userSelect){
    for (var i =0; i< word.length; i++) {
        this.letterArray[i].guess(userSelect);
        
    }


}
}

module.exports = Word
