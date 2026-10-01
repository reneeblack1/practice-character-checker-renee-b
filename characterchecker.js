const readline = require('readline-sync');
let phraseQuestion = readline.question("give me your favorite phrase: ");
let indexPhrase = readline.questionInt("give me the index of the character you want to check in that phrase: ");
let userCharacter = phraseQuestion[indexPhrase];
console.log("The character you are looking for is: " + userCharacter);