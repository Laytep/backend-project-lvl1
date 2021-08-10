#!/usr/bin/env node.
import { nameQestion, game5 } from '../src/game.js';

const name = nameQestion;
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
game5();
