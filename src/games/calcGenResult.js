/* eslint-disable no-console */

const min = 1;
const max = 100;

const genResult = () => {
  const randomNumber1 = Math.floor(Math.random() * (max - min)) + min;
  const randomNumber2 = Math.floor(Math.random() * (max - min)) + min;
  const symbols = ['*', '+', '-'];
  const randomNumber3 = Math.floor(Math.random() * symbols.length);
  const randomSymbol = symbols[randomNumber3];
  console.log(`Question: ${randomNumber1} ${randomSymbol} ${randomNumber2}`);
  if (randomNumber3 === 0) {
    const result = randomNumber1 * randomNumber2;
    return String(result);
  } if (randomNumber3 === 1) {
    const result = randomNumber1 + randomNumber2;
    return String(result);
  } if (randomNumber3 === 2) {
    const result = randomNumber1 - randomNumber2;
    return String(result);
  }
};

export default genResult;
