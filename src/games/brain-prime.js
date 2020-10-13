import { roundsCount, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

const min = -10;
const max = 50;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = generateRandomNumber(min, max);
  if (isPrime(randomNumber)) {
    const correctAnswer = 'yes';
    const question = randomNumber;
    return [question, correctAnswer];
  }
  const correctAnswer = 'no';
  const question = randomNumber;
  return [question, correctAnswer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  run(description, rounds);
};
