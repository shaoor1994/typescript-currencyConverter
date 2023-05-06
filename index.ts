#!/usr/bin/env node 
import inquirer from "inquirer"

let Convertion = {
    "PKR": {
      "USD": 0.0039,
      "GBP": 0.0032,
      "PKR": 1
    },
    "GBP": {
      "USD": 1.19,
      "PKR": 310.72,
      "GBP": 1
    },
    "USD": {
      "PKR": 271.79,
      "GBP": 0.84,
      "USD": 1
    }
  }

  const answer: {
    from: "PKR"| "USD" | "GBP",
    to: "PKR"| "USD" | "GBP",
    amount: number
  } = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your convertion currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your convertion amount: "
    }
  ]);

  const {from, to, amount} = answer;

  if(from && to && amount) {
    let result = Convertion[from][to] * amount;
    console.log(`Your convertion from ${from} to ${to} is ${result}`)
  } else {
    console.log("Invalid inputs")
  }