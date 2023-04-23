import gameLogics from '../index.js';
import generateRandomNumber from '../randomNumberCalc.js';

// Generaring the formula for the right answer

const primeCheck = (num) => {
  let result = 'yes';
  for (let i = 2; i < +num; i += 1) {
    if (num % i === 0) {
      result = 'no';
      return result;
    }
  }
  return result;
};

// Stating the rules of the game

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Generating the question and the right answer for a single round

const generateRound = () => {
  const question = generateRandomNumber(100);
  const trueAnswer = primeCheck(question);

  return [question, trueAnswer];
};

// Starting a game

const startBrainPrime = () => {
  gameLogics(rules, generateRound);
};

export default startBrainPrime;
