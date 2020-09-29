const min = 1;

export default (max) => {
  const randomNumber = Math.floor(Math.random() * max) + min;
  return randomNumber;
};
