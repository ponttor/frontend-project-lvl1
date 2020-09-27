import run from '../engine.js';

const generalQuestion = 'Find the greatest common divisor of given numbers.';

const min = 1;
const max = 100;
let minNumber = 0;
const results = [
  [null, null],
  [null, null],
  [null, null],
];

const generateBrainGcdResult = () => {
  for (let i = 0; i <= 2; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * (max - min)) + min;
    const randomNumber2 = Math.floor(Math.random() * (max - min)) + min;
    results[i][0] = `Question: ${randomNumber1} ${randomNumber2}`;
    if (randomNumber1 > randomNumber2) {
      minNumber = randomNumber2;
    } else {
      minNumber = randomNumber1;
    }
    for (let y = minNumber; y > 0; y -= 1) {
      if ((randomNumber1 % y === 0) && (randomNumber2 % y === 0)) {
        const currentNumber = y;
        results[i][1] = String(currentNumber);
        break;
      }
    }
  }
  return results;
};
const generatedResult = generateBrainGcdResult();

export default () => {
  run(generalQuestion, generatedResult);
};
