function counterFunction() {
  const initialCount = 0;
  let count = initialCount;

  return {
    addCount: function (value) {
      count += value;
    },
    subTrackCount: function (value) {
      count -= value;
    },
    getCurrentCount: function () {
      return count;
    },
    resetCount: function () {
      count = initialCount;
    },
  };
}
const counter = counterFunction();
// console.log(counter.getCurrentCount());
// console.log(counter.addCount(5));
// console.log(counter.getCurrentCount());
// console.log(counter.subTrackCount(3));
// console.log(counter.getCurrentCount());
// console.log(counter.resetCount());
// console.log(counter.getCurrentCount());
