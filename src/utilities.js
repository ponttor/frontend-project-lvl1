/* eslint-disable import/prefer-default-export */

export const generateRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
