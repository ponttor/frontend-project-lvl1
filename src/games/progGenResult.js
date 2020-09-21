/* eslint-disable no-console */

const length = 10;
const min = 1;
const max = 100;
const max0 = 10;
const progression = [];

const genResult = () => {
  const missingPosition = Math.floor(Math.random() * (length - 1)) + 1;
  const stepValue = Math.floor(Math.random() * (max0 - min)) + min;
  progression[0] = Math.floor(Math.random() * (max - min)) + min;
  for (let i = 1; i <= length - 1; i += 1) {
    progression[i] = stepValue + progression[i - 1];
  }
  const result = progression[missingPosition];
  progression[missingPosition] = '..';
  console.log(`Question: ${progression.toString()}`);
  return String(result);
};

export default genResult;
