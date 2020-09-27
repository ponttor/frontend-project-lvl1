import readlineSync from 'readline-sync';

const compare = (a, b) => {
  if (a === b) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${b}" is wrong answer ;(. Correct answer was "${a}"`);
  return false;
};

const receiveAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export default (question, generatedResult) => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}`);

  console.log(question);

  for (let i = 0; i <= 2; i += 1) {
    console.log(generatedResult[i][0]);
    if (compare(generatedResult[i][1], receiveAnswer()) === false) {
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
