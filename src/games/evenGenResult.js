/* eslint-disable no-console */

const min = 1;
const max = 100000;

const getAnswer = () => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  console.log(`Question: ${randomNumber}`);
  if (randomNumber % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
export default getAnswer;
