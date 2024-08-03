function findIndex(arr, callback) {
  return arr.reduce((acc, element, index) => {
    if (acc === -1 && callback(element, index, arr)) {
      return index;
    }
    return acc;
  }, -1);
}
