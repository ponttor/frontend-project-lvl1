import { Raundscount, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

const description = 'What number is missing in the progression?';

const min = 1;
const max = 100;
const progressionLength = 10;

const generateProgression = (progressionStep, firstNumber) => {
  const progression = [firstNumber];
  for (let i = 1; i <= progressionLength - 1; i += 1) {
    const previousElementOfProgression = progression[i - 1];
    progression.push(progressionStep + previousElementOfProgression);
  }
  return progression;
};

const generateOneRound = () => {
  const stepValue = generateRandomNumber(1, 10);
  const firstValue = generateRandomNumber(min, max);
  const generatedProgression = generateProgression(stepValue, firstValue);
  const missingPosition = generateRandomNumber(0, progressionLength - 1);
  const result = generatedProgression[missingPosition];
  generatedProgression[missingPosition] = '..';
  const question = `Question: ${generatedProgression.toString()}`;
  const correctAnswer = String(result);
  return [question, correctAnswer];
};

export default () => {
  const results = [];
  for (let i = 0; i < Raundscount; i += 1) {
    results.push(generateOneRound());
  }
  run(description, results);
};
