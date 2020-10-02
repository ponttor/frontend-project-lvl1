/* eslint-disable no-confusing-arrow */
import { defineIterationNumber, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 1;
const max = 100;
const results = [];

const iterationNumber = defineIterationNumber();

const isEven = (number) => (number % 2 === 0);

export default () => {
  for (let i = 0; i < iterationNumber; i += 1) {
    const randomNumber = generateRandomNumber(min, max);
    const question = `Question: ${randomNumber}`;
    if (isEven(randomNumber)) {
      const correctAnswer = 'yes';
      results.push([question, correctAnswer]);
    } else {
      const correctAnswer = 'no';
      results.push([question, correctAnswer]);
    }
  }
  run(description, results);
};
