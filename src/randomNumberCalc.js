const generateRandomNumber = (maxNumber) => {
  const result = Math.floor(Math.random() * (maxNumber + 1));
  return result;
};

export default generateRandomNumber;
