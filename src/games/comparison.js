/* eslint-disable no-console */

const comparison = (a, b) => {
  if (a === b) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${b}" is wrong answer ;(. Correct answer was "${a}"`);
  return false;
};

export default comparison;
