import { defineIterationNumber, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

const description = 'Find the greatest common divisor of given numbers.';

const min = 1;
const max = 100;
const results = [];

const iterationNumber = defineIterationNumber();

const calculateGcd = (number1, number2) => {
  const minNumber = (number1 > number2) ? number2 : number1;
  for (let i = minNumber; i > 1; i -= 1) {
    if ((number1 % i === 0) && (number2 % i === 0)) {
      return i;
    }
  }
  return 1;
};

export default () => {
  for (let i = 0; i < iterationNumber; i += 1) {
    const randomNumber1 = generateRandomNumber(min, max);
    const randomNumber2 = generateRandomNumber(min, max);
    const question = `Question: ${randomNumber1} ${randomNumber2}`;
    const correctAnswer = String(calculateGcd(randomNumber1, randomNumber2));
    results.push([question, correctAnswer]);
  }
  run(description, results);
};
