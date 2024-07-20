const zipperMerge = (array1, array2) => {
  const mergedArray = [];
  for (let i = 0; i < array1.length || i < array2.length; i++) {
    if (i < array1.length) mergedArray.push(array1[i]);
    if (i < array2.length) mergedArray.push(array2[i]);
  }
  return mergedArray;
};

// const result = zipperMerge([1, 2, 3], ["a", "b", "c"]);
// console.log(result);
