#!/usr/bin/env node
import { nameQestion, game2 } from '../src/game.js';

const name = nameQestion;
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
game2();
