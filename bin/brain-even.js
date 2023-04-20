#!/usr/bin/env node
import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

function braineven() {
  for (let i = 0; i < 3;) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (randomNum % 2 === 0) {
      if (userAnswer === 'yes') {
        console.log('Correct!');
        i += 1;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    } else if (userAnswer === 'no') {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratilations, ${userName}`);
}

braineven();
