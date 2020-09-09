// receiving answer

import readlineSync from 'readline-sync';

const getAnswer = () => {
  const receivedAnswer = readlineSync.question('Your answer: ');
  console.log(`Qestion: ${receivedAnswer}`);
  return receivedAnswer;
}

export default getAnswer;
