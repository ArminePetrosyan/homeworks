function simpleFilter(array, callback) {
  return array.reduce((acc, element, index) => {
    if (callback(element, index, array)) {
      acc.push(element);
    }
    return acc;
  }, []);
}
