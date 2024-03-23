#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 2);
const answers = await inquirer.prompt([
    { message: "Please guess a number between 1 to 6 :",
        name: "userguessnumber",
        type: "number"
    }
]);
if (answers.userguessnumber === randomnumber) {
    console.log("Gongrates ! You Guessed a right Number ");
}
else {
    console.log("You Guessed a wrong number");
}
;
