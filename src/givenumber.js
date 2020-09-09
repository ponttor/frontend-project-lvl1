// providing number
const currentNumber = [];
const min = 1; // manimum value
const max = 100000; // maximum value

const getNumber = () => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  console.log(`Question: ${randomNumber}`);
  currentNumber[0] = randomNumber;
  if (randomNumber % 2 === 0) {
    currentNumber[1] = 1; // even
  } else {
    currentNumber[1] = 0; // odd
  }
  return currentNumber;
};

export default getNumber;
