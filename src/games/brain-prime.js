import { roundsCount, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 1;
const max = 100;

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = generateRandomNumber(min, max);
  const question = `Question: ${randomNumber}`;
  if (isPrime(randomNumber)) {
    return [question, 'yes'];
  }
  return [question, 'no'];
};

export default () => {
  const results = [];
  for (let i = 0; i < roundsCount; i += 1) {
    results.push(generateRound());
  }
  run(description, results);
};
