/* eslint-disable no-console */

const min = 1;
const max = 100;
let minNumber = 0;

const genResult = () => {
  const randomNumber1 = Math.floor(Math.random() * (max - min)) + min;
  const randomNumber2 = Math.floor(Math.random() * (max - min)) + min;
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  if (randomNumber1 > randomNumber2) {
    minNumber = randomNumber2;
  } else {
    minNumber = randomNumber1;
  }
  for (let i = minNumber; i > 0; i -= 1) {
    if ((randomNumber1 % i === 0) && (randomNumber2 % i === 0)) {
      const currentNumber = i;
      return String(currentNumber);
    }
  }
};

export default genResult;
