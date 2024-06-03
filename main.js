#! /usr/bin/env node
import inquirer from 'inquirer';
const curr = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.46,
    PKR: 278.10,
    CAD: 0.95,
    SGD: 1,
    BHD: 0.65,
};
let userAnswer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter from currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'CAD', 'SGD', 'BHD']
    },
    {
        name: 'to',
        message: 'Enter from currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'CAD', 'SGD', 'BHD']
    },
    {
        name: 'amount',
        message: 'Enter your amount',
        type: 'number'
    }
]);
let userFromCurrency = userAnswer.from;
let userToCurrency = userAnswer.to;
let fromAmount = curr[userAnswer.from];
let toAmount = curr[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`Converted Currency Amount: ${convertedAmount}`);
