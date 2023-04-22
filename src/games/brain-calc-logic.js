import gameLogics from '../index.js';
import generateRandomNumber from '../randomNumberCalc.js';

// Generaring the formula for the right answer

const generateEquation = (num1, num2, sign) => {
  if (sign === '-') {
    return num1 - num2;
  }
  if (sign === '+') {
    return num1 + num2;
  }
  if (sign === '*') {
    return num1 * num2;
  }
  const error = 'This is not a number';
  return error;
};

// Stating the rules of the game

const rules = 'What is the result of the expression?';

// Generating the question and the right answer for a single round

const generateRound = () => {
  const firstNumber = generateRandomNumber(100);
  const secondNumber = generateRandomNumber(100);
  const possibleSign = ['-', '+', '*'];
  const randomSign = possibleSign[generateRandomNumber(2)];
  const rightAnswer = String(generateEquation(firstNumber, secondNumber, randomSign));
  const question = `${firstNumber} ${randomSign} ${secondNumber}`;
  return [question, rightAnswer];
};

// Starting a game

const startBrainCalc = () => {
  gameLogics(rules, generateRound);
};

export default startBrainCalc;
