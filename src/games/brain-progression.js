import { roundsCount, run } from '../engine.js';
import { generateRandomNumber } from '../utilities.js';

const min = 1;
const max = 100;
const progressionLength = 10;

const description = 'What number is missing in the progression?';

const generateProgression = () => {
  const progression = [];
  const start = generateRandomNumber(min, max);
  const diff = generateRandomNumber(1, 10);
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + i * diff);
  }
  return progression;
};

const generateRound = () => {
  const progression = generateProgression();
  const missingPosition = generateRandomNumber(0, progressionLength - 1);
  const result = progression[missingPosition];
  progression[missingPosition] = '..';
  const correctAnswer = String(result);
  return [progression, correctAnswer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  run(description, rounds);
};
