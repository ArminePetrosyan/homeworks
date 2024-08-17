const countItems = (array) =>
  array.reduce(
    (count, item) =>
      Array.isArray(item) ? count + countItems(item) : count + 1,
    0
  );
