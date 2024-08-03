const arr = [1, 2, 3, 4, 5];
const sum = (function (array) {
  return array.reduce((acc, num) => acc + num, 0);
})(arr);
