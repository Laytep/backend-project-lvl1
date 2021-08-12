/* eslint-disable no-console */

import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')
export const nameQestion = readlineSync.question('May I have your name? ');

export const hello = () => {
    console.log('Welcome to the Brain Games!');
  
    const name = readlineSync.question('May I have your name? ');
  
    console.log(`Hello, ${name}`);
  
    return name;
  };