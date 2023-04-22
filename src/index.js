#!/usr/bin/env node
import readlineSync from 'readline-sync';

// The game engine logics

const gameLogics = (rules, generateRound) => {
  const maxAtempts = 3;
  let answersCount = 0;
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  while (answersCount < maxAtempts) {
    const [question, rightAnswer] = generateRound();
    console.log(`question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      answersCount += 1;
    }
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is the wrong answer. The correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameLogics;
