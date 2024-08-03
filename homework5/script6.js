const array = [1, 2, 3, 4, 5, 6];
const evens = (function (array) {
  return array.filter((num) => num % 2 === 0);
})(array);
