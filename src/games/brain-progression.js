import run from '../engine.js';

const generalQuestion = 'What number is missing in the progression?';

const min = 1;
const max = 100;
const length = 10;
const max0 = 10;
const progression = [];
const results = [
  [null, null],
  [null, null],
  [null, null],
];

const generateBrainProgressionResult = () => {
  for (let i = 0; i <= 2; i += 1) {
    const missingPosition = Math.floor(Math.random() * (length - 1)) + 1;
    const stepValue = Math.floor(Math.random() * (max0 - min)) + min;
    progression[0] = Math.floor(Math.random() * (max - min)) + min;
    for (let y = 1; y <= length - 1; y += 1) {
      progression[y] = stepValue + progression[y - 1];
    }
    const result = progression[missingPosition];
    progression[missingPosition] = '..';
    results[i][0] = `Question: ${progression.toString()}`;
    results[i][1] = String(result);
  }
  return results;
};

const generatedResult = generateBrainProgressionResult();

export default () => {
  run(generalQuestion, generatedResult);
};
