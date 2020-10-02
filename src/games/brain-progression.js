import { defineIterationNumber, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

const description = 'What number is missing in the progression?';

const min = 1;
const max = 100;
const length = 10;
const results = [];

const iterationNumber = defineIterationNumber();

const generateProgression = (step, firstNumber) => {
  const array = [];
  array[0] = firstNumber;
  for (let i = 1; i <= length - 1; i += 1) {
    array[i] = step + array[i - 1];
  }
  return array;
};

export default () => {
  for (let i = 0; i < iterationNumber; i += 1) {
    const stepValue = generateRandomNumber(1, 10);
    const firstValue = generateRandomNumber(min, max);
    const progression = generateProgression(stepValue, firstValue);
    const missingPosition = generateRandomNumber(0, length - 1);
    const result = progression[missingPosition];
    progression[missingPosition] = '..';
    const question = `Question: ${progression.toString()}`;
    const correctAnswer = String(result);
    results.push([question, correctAnswer]);
  }

  run(description, results);
};
