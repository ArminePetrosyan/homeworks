const findDuplicates = (array) => {
  const seen = [];
  return array.filter(
    (item) => seen.includes(item) || (seen.push(item) && false)
  );
};
