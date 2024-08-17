//Task8

Array.prototype.costumeReduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

const numbers = [1, 2, 3, 4];

// const sum = numbers.costumeReduce((acc, curr) => acc + curr, 0);
// console.log(sum);
