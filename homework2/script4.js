const isAdult = (age) => {
  const validAge = +age;

  return validAge !== validAge
    ? "Invalid input: Age must be a number."
    : validAge >= 18
    ? true
    : false;
};
// console.log(isAdult("3"));
