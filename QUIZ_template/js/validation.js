const validateInput = (inputValue, minRange, maxRange) => {
  const trimmedValue = inputValue.trim(); // Delet spase

  if (trimmedValue === "") {
    return "Field cannot be empty"; // Chech empty value
  }

  const numberValue = parseFloat(trimmedValue); //Converting a value into a number

  if (isNaN(numberValue)) {
    return "Invalid input, please enter a number"; // Retern eroor massege
  }
  if (numberValue < minRange || numberValue > maxRange) {
    return `Number should be between ${minRange} and ${maxRange}`; //Eroor massege about number range
  }
  return null; // If all check DONE
};

export { validateInput }; // Export function in main file
