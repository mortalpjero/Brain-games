#!/usr/bin/env node
import readlineSync from 'readline-sync';

const CORRECT_ANSWER = 'yes';
const INCORRECT_ANSWER = 'no';

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

function playEvenNumberGame() {
  for (let i = 0; i < 3;) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (randomNum % 2 === 0) {
      if (userAnswer === CORRECT_ANSWER) {
        console.log('Correct!');
        i += 1;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${CORRECT_ANSWER}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    } else if (userAnswer === INCORRECT_ANSWER) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${INCORRECT_ANSWER}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

playEvenNumberGame();
