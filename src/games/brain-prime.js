import run from '../engine.js';

const generalQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 1;
const max = 100;
const results = [
  [null, null],
  [null, null],
  [null, null],
];

const checkPrime = (givenNumber) => {
  for (let i = 2; i <= givenNumber / 2; i += 1) {
    if (givenNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const generateBrainPrimeResult = () => {
  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    results[i][0] = `Question: ${randomNumber}`;
    if (checkPrime(randomNumber) === true) {
      results[i][1] = 'yes';
    } else {
      results[i][1] = 'no';
    }
  }
  return results;
};

const generatedResult = generateBrainPrimeResult();

export default () => {
  run(generalQuestion, generatedResult);
};
