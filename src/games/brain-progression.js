import { defineIterationNumber, run } from '../engine.js';
import generateRandomNumber from '../random-number.js';

const description = 'What number is missing in the progression?';

const max = 100;
const length = 10;
const max0 = 10;
const progression = [];
const results = [];

const magicNumber = defineIterationNumber();

const generateBrainProgressionResult = () => {
  for (let i = 0; i < magicNumber; i += 1) {
    const missingPosition = generateRandomNumber(length);
    const stepValue = generateRandomNumber(max0);
    progression[0] = generateRandomNumber(max);
    for (let y = 1; y <= length - 1; y += 1) {
      progression[y] = stepValue + progression[y - 1];
    }
    const result = progression[missingPosition];
    progression[missingPosition] = '..';
    const question = `Question: ${progression.toString()}`;
    const correctAnswer = String(result);
    results.push([question, correctAnswer]);
  }
  return results;
};

export default () => {
  run(description, generateBrainProgressionResult());
};
