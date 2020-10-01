import { defineIterationNumber, run } from '../engine.js';
import generateRandomNumber from '../random-number.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const max = 100;
const results = [];

const magicNumber = defineIterationNumber();

const generateBrainEvenResult = () => {
  for (let i = 0; i < magicNumber; i += 1) {
    const randomNumber = generateRandomNumber(max);
    const question = `Question: ${randomNumber}`;
    const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
    results.push([question, correctAnswer]);
  }
  return results;
};

export default () => {
  run(description, generateBrainEvenResult());
};
