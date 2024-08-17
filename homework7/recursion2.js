const findIndex = (array, item, index = 0) =>
  index >= array.length
    ? -1
    : array[index] === item
    ? index
    : findIndex(array, item, index + 1);
