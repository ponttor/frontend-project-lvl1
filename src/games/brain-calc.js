import { defineIterationNumber, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

const description = 'What is the result of the expression?';

const min = 1;
const max = 100;
const symbols = '*+-';
const results = [];

const iterationNumber = defineIterationNumber();

const defineSymbol = (string) => {
  const randomSymbolNumber = generateRandomNumber(min, string.length);
  return string[randomSymbolNumber - 1];
};

const calculate = (number1, number2, operator) => {
  if (operator === '*') {
    return (number1 * number2);
  } if (operator === '+') {
    return (number1 + number2);
  } if (operator === '-') {
    return (number1 - number2);
  }
  return 'Error';
};

export default () => {
  for (let i = 0; i < iterationNumber; i += 1) {
    const randomNumber1 = generateRandomNumber(min, max);
    const randomNumber2 = generateRandomNumber(min, max);
    const randomSymbol = defineSymbol(symbols);
    const correctAnswer = String(calculate(randomNumber1, randomNumber2, randomSymbol));
    const question = `Question: ${randomNumber1} ${randomSymbol} ${randomNumber2}`;
    results.push([question, correctAnswer]);
  }
  run(description, results);
};
