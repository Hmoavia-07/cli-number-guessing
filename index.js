#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNum",
        type: "number",
        message: "Please guess a number b/w 1-10: ",
    },
]);
if (answers.userGuessedNum === randomNumber) {
    console.log("Congragulations! You guessed right number.");
}
else {
    console.log(`Oops! You guessed wrong number\nThe right number is: ${randomNumber}`);
}
;
console.log(`\nmade by "Hmoavia.07"`);
