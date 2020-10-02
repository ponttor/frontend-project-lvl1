import { defineIterationNumber, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 1;
const max = 100;
const results = [];

const iterationNumber = defineIterationNumber();

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  for (let i = 0; i < iterationNumber; i += 1) {
    const randomNumber = generateRandomNumber(min, max);
    const question = `Question: ${randomNumber}`;
    if (isPrime(randomNumber)) {
      const correctAnswer = 'yes';
      results.push([question, correctAnswer]);
    } else {
      const correctAnswer = 'no';
      results.push([question, correctAnswer]);
    }
  }
  run(description, results);
};
