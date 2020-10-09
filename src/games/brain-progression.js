import { roundsCount, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

const min = 1;
const max = 100;
const progressionLength = 10;

const description = 'What number is missing in the progression?';

const generateProgression = (progressionStep, firstNumber) => {
  const progression = [firstNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    const previousElementOfProgression = progression[i - 1];
    progression.push(progressionStep + previousElementOfProgression);
  }
  return progression;
};

const generateRound = () => {
  const stepValue = generateRandomNumber(1, 10);
  const firstValue = generateRandomNumber(min, max);
  const generatedProgression = generateProgression(stepValue, firstValue);
  const missingPosition = generateRandomNumber(0, progressionLength - 1);
  const result = generatedProgression[missingPosition];
  generatedProgression[missingPosition] = '..';
  const correctAnswer = String(result);
  return [generatedProgression, correctAnswer];
};

export default () => {
  const results = [];
  for (let i = 0; i < roundsCount; i += 1) {
    results.push(generateRound());
  }
  run(description, results);
};
