#!/usr/bin/env node;
/* eslint-disable import/extensions */
/* eslint-disable no-console */

import intro from '../src/games/intro.js';
import gen from '../src/games/evenGenResult.js';
import receive from '../src/games/receiveAnswer.js';
import engine from '../src/games/engine.js';

const name = intro();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

engine(gen, receive, name);
