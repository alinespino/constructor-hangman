

var inquirer = require ("inquirer");
var gameWords = require ("./gameWords.js");
var letter = require ("./letter.js");


// Choose random words from list // 

function Word (word) {
   this.word = new Word (gameWords[Math.floor(Math.random() * gameWords.length)]);
   this.guessesLeft = 10;
}









module.exports = Word;