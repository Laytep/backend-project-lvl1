import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const nameQestion = readlineSync.question('May I have your name? ');

const getRandomInt = (min1, max1) => {
  const min = Math.ceil(min1);
  const max = Math.floor(max1);
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

let round1 = 0;

export const game2 = () => {
  if (round1 < 3) {
    const number1 = getRandomInt(1, 50);
    const number2 = getRandomInt(1, 50);
    const operator = getRandomInt(1, 15);
    let operator1 = '';
    if (operator <= 5) {
      operator1 = '+';
    } else if (operator <= 10) {
      operator1 = '-';
    } else if (operator <= 15) {
      operator1 = '*';
    }
    console.log(`Question: ${number1} ${operator1} ${number2}`);
    let correctAnswer = 0;
    if (operator <= 5) {
      correctAnswer = number1 + number2;
    } else if (operator <= 10) {
      correctAnswer = number1 - number2;
    } else if (operator <= 15) {
      correctAnswer = number1 * number2;
    }

    const firstQestion = readlineSync.question('Your answer: ');

    if (String(correctAnswer) === firstQestion) {
      console.log('Correct!'); round1 += 1; game2();
    } else {
      console.log(`'${firstQestion}'is wrong answer ;(. Correct answer was '${correctAnswer}'. 
Let's try again, ${nameQestion}!`);
    }
  } else {
    console.log(`Congratulations, ${nameQestion}!`);
  }
};

let round2 = 0;

export const game3 = () => {
  if (round2 < 3) {
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);
    console.log(`Question: ${number1} ${number2}`);
    let result = 0;
    for (let i = 100; i > 0; i -= 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        result += i;
        break;
      }
    }

    const firstQestion = readlineSync.question('Your answer: ');

    if (String(result) === firstQestion) {
      console.log('Correct!'); round2 += 1; game3();
    } else {
      console.log(`'${firstQestion}'is wrong answer ;(. Correct answer was '${result}'. 
Let's try again, ${nameQestion}!`);
    }
  } else {
    console.log(`Congratulations, ${nameQestion}!`);
  }
};

let round3 = 0;

export const game4 = () => {
  if (round3 < 3) {
    let str = '';
    const number1 = getRandomInt(5, 10);
    const position = getRandomInt(0, number1 - 1);
    const changes = getRandomInt(1, 5);
    let result = 0;
    for (let i = 0; i < number1; i += 1) {
      if (position !== i) {
        str += `${i * changes} `;
      } else {
        str += '.. ';
        result += i * changes;
      }
    }
    console.log(`Question: ${str}`);

    const firstQestion = readlineSync.question('Your answer: ');

    if (String(result) === firstQestion) {
      console.log('Correct!'); round3 += 1; game4();
    } else {
      console.log(`'${firstQestion}'is wrong answer ;(. Correct answer was '${result}'. 
Let's try again, ${nameQestion}!`);
    }
  } else {
    console.log(`Congratulations, ${nameQestion}!`);
  }
};

let round4 = 0;

export const game5 = () => {
  if (round4 < 3) {
    const number1 = getRandomInt(1, 100);
    let result = 1;
    for (let i = (number1 - 1); i > 1; i -= 1) {
      if (number1 % i === 0) {
        result += 1;
      }
    }

    console.log(`Question: ${number1}`);

    const firstQestion = readlineSync.question('Your answer: ');

    if (result === 1 && firstQestion === 'yes') {
      console.log('Correct!'); round4 += 1; game5();
    } else if (result !== 1 && firstQestion === 'no') {
      console.log('Correct!'); round4 += 1; game5();
    } else if (result === 1 && firstQestion === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, ${nameQestion}!`);
    } else if (result !== 1 && firstQestion === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${nameQestion}!`);
    } else {
      console.log(`'${firstQestion}' is wrong answer ;(. Correct answer was ${result === 1 ? "'yes'" : "'no'"}
Let's try again, ${nameQestion}!`);
    }
  } else {
    console.log(`Congratulations, ${nameQestion}!`);
  }
};
