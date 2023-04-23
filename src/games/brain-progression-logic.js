import gameLogics from '../index.js';
import generateRandomNumber from '../randomNumberCalc.js';

// Generaring the formula for the right answer

const generateRow = () => {
  let singleNumber = generateRandomNumber(20);
  const addedNumber = generateRandomNumber(20);
  const result = [`${singleNumber}`];
  for (let i = 1; i < 10; i += 1) {
    singleNumber += addedNumber;
    result.push(`${singleNumber}`);
  }

  return result;
};

// Stating the rules of the game

const rules = 'What number is missing in the progression?';

// Generating the question and the right answer for a single round

const generateRound = () => {
  const questionPattern = generateRow();
  const missingNumber = generateRandomNumber(8);
  const rightAnswer = questionPattern[missingNumber];
  questionPattern[missingNumber] = '..';
  const question = questionPattern.join(' ');

  return [question, rightAnswer];
};

// Starting a game

const startBrainProgression = () => {
  gameLogics(rules, generateRound);
};

export default startBrainProgression;
