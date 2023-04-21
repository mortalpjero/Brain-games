#!/usr/bin/env node
import readlineSync from 'readline-sync';

// Defining correct answers

const positiveAnswer = 'yes';
const negativeAnswer = 'no';

// Start of an app

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

// Guess if the number is even or not

function playEvenNumberGame() {
  for (let i = 0; i < 3;) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (
      (randomNum % 2 === 0 && userAnswer === positiveAnswer)
      || (randomNum % 2 !== 0 && userAnswer === negativeAnswer)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is the wrong answer. The correct answer was '${randomNum % 2 === 0 ? positiveAnswer : negativeAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

playEvenNumberGame();
