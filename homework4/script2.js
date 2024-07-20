const data = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 22 },
  { name: "Alice", age: 23 },
];
const groupBy = (array, property) => {
  return array.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};
// const groupedData = groupBy(data, "name");
// console.log(groupedData);
