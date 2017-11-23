const isBirthBeforeDeath = (inputs) => {
  const birthYear = parseInt(inputs.birth.value, 10);
  const deathYear = parseInt(inputs.death.value, 10);
  const isAlive = deathYear === -1 || inputs.death.value === '';
  return (deathYear > birthYear) || isAlive
};

const areRequiredInputsBlank = (inputs) => {
  return Object.values(inputs).some((input) => {
    return input.required && !input.value.trim();
  });
};

const validateInputs = (inputs) => {
  return isBirthBeforeDeath(inputs) && !areRequiredInputsBlank(inputs);
};

export default validateInputs;
