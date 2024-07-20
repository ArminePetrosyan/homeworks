const factorial = (n) =>
  n < 0
    ? "Invalid input"
    : [...Array(n)].reduce((acc, _, i) => acc * (i + 1), 1);
