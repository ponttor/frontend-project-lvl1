import { defineIterationNumber, run } from '../engine.js';
import generateRandomNumber from '../random-number.js';

const description = 'What is the result of the expression?';

const max = 100;
const symbols = ['*', '+', '-'];
const results = [];

const magicNumber = defineIterationNumber();

const generateBrainCalcResult = () => {
  for (let i = 0; i < magicNumber; i += 1) {
    const randomNumber1 = generateRandomNumber(max);
    const randomNumber2 = generateRandomNumber(max);
    const randomNumber3 = generateRandomNumber(symbols.length);
    const randomSymbol = symbols[randomNumber3 - 1];
    let correctAnswer = '';
    const question = `Question: ${randomNumber1} ${randomSymbol} ${randomNumber2}`;
    if (randomNumber3 === 1) {
      correctAnswer = (String(randomNumber1 * randomNumber2));
    } if (randomNumber3 === 2) {
      correctAnswer = (String(randomNumber1 + randomNumber2));
    } if (randomNumber3 === 3) {
      correctAnswer = (String(randomNumber1 - randomNumber2));
    }
    results.push([question, correctAnswer]);
  }
  return results;
};

export default () => {
  run(description, generateBrainCalcResult());
};
