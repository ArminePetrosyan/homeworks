const flattenArray = (nestedArray) => {
  const flattenedArray = [];

  for (const element of nestedArray) {
    if (Array.isArray(element)) {
      flattenedArray.push(...flattenArray(element));
    } else {
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
};

// const nestedArray = [1, [2, [3, [4]], 5]];
// const result = flattenArray(nestedArray);
// console.log(result);
