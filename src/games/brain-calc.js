import run from '../engine.js';

const generalQuestion = 'What is the result of the expression?';

const min = 1;
const max = 100;
const results = [
  [null, null],
  [null, null],
  [null, null],
];

const generateBrainCalcResult = () => {
  for (let i = 0; i <= 2; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * (max - min)) + min;
    const randomNumber2 = Math.floor(Math.random() * (max - min)) + min;
    const symbols = ['*', '+', '-'];
    const randomNumber3 = Math.floor(Math.random() * symbols.length);
    const randomSymbol = symbols[randomNumber3];
    results[i][0] = `Question: ${randomNumber1} ${randomSymbol} ${randomNumber2}`;
    if (randomNumber3 === 0) {
      results[i][1] = String(randomNumber1 * randomNumber2);
    } if (randomNumber3 === 1) {
      results[i][1] = String(randomNumber1 + randomNumber2);
    } if (randomNumber3 === 2) {
      results[i][1] = String(randomNumber1 - randomNumber2);
    }
  }
  return results;
};
const generatedResult = generateBrainCalcResult();

export default () => {
  run(generalQuestion, generatedResult);
};
