
var inquirer = require ("inquirer");
var word = require ("./word.js");
var letter = require ("./letter.js");

console.log(" Hangman Running");

function newGame (){
  
    inquirer.prompt ([{
        name:"newGame",
        type:"confirm",
        message: 'Welcome! Guess a letter'
    }]).then(function(answer){
        if (answer.newGame === true){
            console.log(this.word);
            guessLetter();
        } else {
            console.log("Good bye!");
        }
    })

    function guessLetter () {
        inquirer.prompt ([{
            name:'guess',
            type:'input',
            message:"Guess a letter!",
            validate:letter()
        }])
    }

    function validation (){
        
    }
    // validate user's guess : 

    // IF WRONG: leave word blank,
    // decrease guesses left,
    // Tell user he's wrong.

    // IF CORRECT:
    // Replace _ with letter 
    // display good msg
    // prompt for new guess 
}


// function displayWord (){
//     console.log(this.word);

// }


function zeroGuesses (){
    // - message
    // - show word,
    // - ask to restart or quit 

}


//     CREATE 2 CONSTRUCTORS 
//   WORD : CURRENT WORD, INCLUDE LOGIC AND DATA.
//  LETTER 




    // The completed game should be able to receive user input using the inquirer or prompt npm packages.
    // Feel free to use as many different types of constructor functions as you are able to, 
    // but at a minimum, you must create the following constructor functions:
    // Word: Used to create an object representing the current word the user is attempting to guess.
    //  This should contain word specific logic and data.
    // Letter: Used for each letter in the current word. Each letter object should either display an 
    // underlying character, or a blank placeholder (such as an underscore), depending on whether or not 
    // the user has guessed the letter. This should contain letter specific logic and data.
    // You must keep track of the user's remaining guesses and prompt the user if they would like to end 
    // the game if none remain.
    // Each constructor function should be in it's own file and be exported and required wherever needed.
    // Look into function prototypes and use them for a few of your constructor's methods.
    
