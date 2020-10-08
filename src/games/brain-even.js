/* eslint-disable no-confusing-arrow */
import { roundsCount, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

// const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 1;
const max = 100;

const isEven = (number) => (number % 2 === 0);

const generateRound = () => {
  const randomNumber = generateRandomNumber(min, max);
  const question = `Question: ${randomNumber}`;
  if (isEven(randomNumber)) {
    return [question, 'yes'];
  }
  return [question, 'no'];
};

export default () => {
  const results = [];
  for (let i = 0; i < roundsCount; i += 1) {
    results.push(generateRound());
  }
  run(2, results);
};
