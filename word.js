const Letter = require("./letter");

function Word(word) {
    this.gameWord = word;
    this.dashArray = [];
    this.letterArray = []
    for (var i =0; i< word.length; i++) {
        this.letterArray.push(new Letter(word[i]));
    }

    this.displayDashes = function(){
    for (var i =0; i< word.length; i++) {
        this.dashArray.push("_");
        
    }
    console.log(this.dashArray);

    }

this.userEntry = function(userSelect){
    for (var i =0; i< word.length; i++) {
        this.letterArray[i].guess(userSelect);
        
    }


}
}

module.exports = Word
