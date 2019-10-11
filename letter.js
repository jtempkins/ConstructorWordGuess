const Letter = function (char) {

    // var Letter = function (str) {

        // this.character = str;
        this.char = char;
        this.guessed = false;

        this.guessedLetter = function () {
                if (this.guessed === false) {
                    return "_";
                }
                else {
                    return this.char;
                }

        };
        this.guess = function (guess) {
            if (guess === this.character) {
                this.guessed = true;
            }
        }

    };

module.exports = Letter;
