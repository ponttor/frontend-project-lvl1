#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import comparison from './comparison.js';

const engine = (gen, receive, name) => {
  if (comparison(gen(), receive())) {
    if (comparison(gen(), receive())) {
      if (comparison(gen(), receive())) {
        console.log(`Congratulations, ${name}!`);
      } else {
        console.log(`Let's try again, ${name}!`);
      }
    } else {
      console.log(`Let's try again, ${name}!`);
    }
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default engine;
