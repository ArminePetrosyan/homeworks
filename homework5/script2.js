const findMajorityElement = (arr) => {
  const counts = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  return (
    Object.keys(counts).find((num) => counts[num] > arr.length / 2) || null
  );
};
