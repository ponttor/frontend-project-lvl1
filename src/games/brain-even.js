import run from '../engine.js';

const generalQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 1;
const max = 100;
const results = [
  [null, null],
  [null, null],
  [null, null],
];

const generateBrainEvenResult = () => {
  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    results[i][0] = `Question: ${randomNumber}`;
    if (randomNumber % 2 === 0) {
      results[i][1] = 'yes';
    }
    if (randomNumber % 2 !== 0) {
      results[i][1] = 'no';
    }
  }
  return results;
};

const generatedResult = generateBrainEvenResult();

export default () => {
  run(generalQuestion, generatedResult);
};
