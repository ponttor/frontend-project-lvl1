/* eslint-disable no-console */

import readlineSync from 'readline-sync';

const userName = [];
const intro = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  userName[0] = name;
  console.log(`Hello, ${name}`);
  return userName[0];
};
export default intro;
