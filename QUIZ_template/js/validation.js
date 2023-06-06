const validateInput = (inputValue, minRange, maxRange) => {
  const trimmedValue = inputValue.trim();

  if (trimmedValue === "") {
    return "Field cannot be empty";
  }

  if (!isNaN(trimmedValue)) {
    const numberValue = parseFloat(trimmedValue);
    if (numberValue < minRange || numberValue > maxRange) {
      return `Number should be between ${minRange} and ${maxRange}`;
    }
  }

  return null;
};

export { validateInput }; // Export function in main file
