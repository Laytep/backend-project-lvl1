import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const nameQestion = readlineSync.question('May I have your name? ');

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

let round = 0;

export const game1 = () => {
  if (round < 3) {
    const number1 = getRandomInt(1, 100);
    console.log(`Question: ${number1}`);

    const trueOrFalse = (num) => {
      if (num % 2 === 0) {
        return 1;
      }
      return 0;
    };

    const firstQestion = readlineSync.question('Your answer: ');

    if (trueOrFalse(number1) === 1 && firstQestion === 'yes') {
      console.log('Correct!'); round += 1; game1();
    } else if (trueOrFalse(number1) !== 1 && firstQestion === 'no') {
      console.log('Correct!'); round += 1; game1();
    } else if (trueOrFalse(number1) === 1 && firstQestion === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, ${nameQestion}!`);
    } else if (trueOrFalse(number1) !== 1 && firstQestion === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${nameQestion}!`);
    } else {
      console.log(`'${firstQestion}' is wrong answer ;(. Correct answer was ${trueOrFalse(number1) === 1 ? "'yes'" : "'no'"}
Let's try again, ${nameQestion}!`);
    }
  } else {
    console.log(`Congratulations, ${nameQestion}!`);
  }
};
