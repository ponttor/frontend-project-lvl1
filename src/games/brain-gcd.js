import { raundsCount, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

const description = 'Find the greatest common divisor of given numbers.';

const min = 1;
const max = 100;

const gcd = (number1, number2) => {
  const minNumber = (number1 > number2) ? number2 : number1;
  for (let i = minNumber; i > 1; i -= 1) {
    if ((number1 % i === 0) && (number2 % i === 0)) {
      return i;
    }
  }
  return 1;
};

const generateRound = () => {
  const randomNumber1 = generateRandomNumber(min, max);
  const randomNumber2 = generateRandomNumber(min, max);
  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(gcd(randomNumber1, randomNumber2));
  return [question, correctAnswer];
};

export default () => {
  const results = [];
  for (let i = 0; i < raundsCount; i += 1) {
    results.push(generateRound());
  }
  run(description, results);
};
