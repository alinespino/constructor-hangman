


function Letter (letter) {
    this.letter = letter;
    if (this.letter.match((/[a-zA-Z]/))){
        this.guessed = false;
    } 
    else {
        this.guessed = true;
    }

    }











module.exports = Letter;