import { defineIterationNumber, run } from '../engine.js';
import generateRandomNumber from '../random-number.js';

const description = 'Find the greatest common divisor of given numbers.';

const max = 100;
const results = [];
let minNumber = 0;

const magicNumber = defineIterationNumber();

const generateBrainGcdResult = () => {
  for (let i = 0; i < magicNumber; i += 1) {
    const randomNumber1 = generateRandomNumber(max);
    const randomNumber2 = generateRandomNumber(max);
    const question = `Question: ${randomNumber1} ${randomNumber2}`;
    if (randomNumber1 > randomNumber2) {
      minNumber = randomNumber2;
    } else {
      minNumber = randomNumber1;
    }
    for (let y = minNumber; y > 0; y -= 1) {
      if ((randomNumber1 % y === 0) && (randomNumber2 % y === 0)) {
        const correctAnswer = String(y);
        results.push([question, correctAnswer]);
        break;
      }
    }
  }
  return results;
};

export default () => {
  run(description, generateBrainGcdResult());
};
