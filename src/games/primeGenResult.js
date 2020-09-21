/* eslint-disable no-console */

const min = 1;
const max = 100000;

const primeCheck = (givenNumber) => {
  for (let i = 2; i <= givenNumber / 2; i += 1) {
    if (givenNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const genResult = () => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  console.log(`Question: ${randomNumber}`);
  if (primeCheck(randomNumber) === true) {
    return 'yes';
  }
  return 'no';
};

export default genResult;
