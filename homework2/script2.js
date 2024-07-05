const cacl = (a, b, operator) => {
  if (operator == "/" && b === 0) {
    return "Error: Division by zero";
  }
  return operator === "+"
    ? +a + +b
    : operator === "-"
    ? a - b
    : operator === "*"
    ? a * b
    : operator === "/"
    ? a / b
    : "Invalid input";
};

// console.log(cacl("11", "4", "-"));
