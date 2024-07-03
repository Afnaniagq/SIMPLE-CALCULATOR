#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
  { message: "Enter your first number:", type: "number", name: "firstNumber" },
  { message: "Enter your second number:", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction","Multiplication","Division"],
  },
]);

//conditional statement
  if (answer.operator === "Addition"){
    console.log(`your answer is "${answer. firstNumber + answer.secondNumber}"`);
} else if (answer.operator === "Substraction"){
    console.log(`your answer is "${answer. firstNumber - answer.secondNumber}"`);
} else if (answer.operator === "Multiplication"){
  console.log(`your answer is "${answer. firstNumber * answer.secondNumber}"`);
} else if ( answer.operator === "Division"){
  console.log(`your answer is "${answer. firstNumber / answer.secondNumber}"`);
}else {
console.log (" Please select a valid operator")
}
console .log(chalk.green("\tThanks for using applicatrion"))