import { defineIterationNumber, run } from '../engine.js';
import generateRandomNumber from '../random-number.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const max = 100;
const results = [];

const magicNumber = defineIterationNumber();

const checkPrime = (givenNumber) => {
  for (let i = 2; i <= givenNumber / 2; i += 1) {
    if (givenNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const generateBrainPrimeResult = () => {
  for (let i = 0; i < magicNumber; i += 1) {
    const randomNumber = generateRandomNumber(max);
    const question = `Question: ${randomNumber}`;
    if (checkPrime(randomNumber) === true) {
      const correctAnswer = 'yes';
      results.push([question, correctAnswer]);
    } else {
      const correctAnswer = 'no';
      results.push([question, correctAnswer]);
    }
  }
  return results;
};

export default () => {
  run(description, generateBrainPrimeResult());
};
