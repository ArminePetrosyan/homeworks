const chunkArray = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

// const result = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
// console.log(result);
