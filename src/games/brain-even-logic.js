import gameLogics from '../index.js';
import generateRandomNumber from '../randomNumberCalc.js';

// Stating the rules of the game

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

// Generating the question and the right answer for a single round

const generateRound = () => {
  const question = generateRandomNumber(100);
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, rightAnswer];
};

// Starting a game

const startBrainEven = () => {
  gameLogics(rules, generateRound);
};

export default startBrainEven;
