import { roundsCount, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

const min = 1;
const max = 30;

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  const minNumber = Math.min(number1, number2);
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
  const correctAnswer = String(gcd(randomNumber1, randomNumber2));
  const question = `${randomNumber1} ${randomNumber2}`;
  return [question, correctAnswer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  run(description, rounds);
};
