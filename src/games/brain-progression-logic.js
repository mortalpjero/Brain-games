import gameLogics from '../index.js';
import generateRandomNumber from '../randomNumberCalc.js';

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

const rules = 'What number is missing in the progression?';

const generateRound = () => {
  const questionPattern = generateRow();
  const missingNumber = generateRandomNumber(8);
  const rightAnswer = questionPattern[missingNumber];
  questionPattern[missingNumber] = '..';
  const question = questionPattern.join(' ');

  return [question, rightAnswer];
};

const startBrainProgression = () => {
  gameLogics(rules, generateRound);
};

export default startBrainProgression;
