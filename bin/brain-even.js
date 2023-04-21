#!/usr/bin/env node
import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

function playEvenNumberGame() {
  const positiveAnswer = 'yes';
  const negativeAnswer = 'no';
  const maxAttempts = 3;
  let attempts = 0;

  while (attempts < maxAttempts) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isCorrectAnswer = (randomNumber % 2 === 0 && userAnswer === positiveAnswer)
    || (randomNumber % 2 !== 0 && userAnswer === negativeAnswer);

    if (isCorrectAnswer) {
      console.log('Correct!');
      attempts += 1;
    } else {
      console.log(`'${userAnswer}' is the wrong answer. The correct answer was '${randomNumber % 2 === 0 ? positiveAnswer : negativeAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

playEvenNumberGame();
