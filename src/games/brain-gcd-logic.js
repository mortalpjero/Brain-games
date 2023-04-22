import gameLogics from '../index.js';
import generateRandomNumber from '../randomNumberCalc.js';

// Generaring the formula for the right answer

const gcdCalculator = (x, y) => {
  if (y > x) return gcdCalculator(y, x);
  if (!y) return x;
  return gcdCalculator(y, x % y);
};

// Stating the rules of the game

const rules = 'Find the greatest common divisor of given numbers.';

// Generating the question and the right answer for a single round

const generateRound = () => {
  const firstNumber = generateRandomNumber(100);
  const secondNumber = generateRandomNumber(100);
  const rightAnswer = String(gcdCalculator(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;
  return [question, rightAnswer];
};

// Starting a game

const startBrainGcd = () => {
  gameLogics(rules, generateRound);
};

export default startBrainGcd;
