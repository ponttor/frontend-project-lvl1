import { roundsCount, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

const min = -10;
const max = 50;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const generateRound = () => {
  const randomNumber = generateRandomNumber(min, max);
  if (isPrime(randomNumber)) {
    return [[randomNumber], 'yes'];
  }
  return [[randomNumber], 'no'];
};

export default () => {
  const results = [];
  for (let i = 0; i < roundsCount; i += 1) {
    results.push(generateRound());
  }
  run(description, results);
};
