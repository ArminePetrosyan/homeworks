// Task1

const checkAge = (age) => {
  const numAge = +age;
  return numAge !== numAge || numAge < 0
    ? "Invalid age value. Please provide a valid number."
    : numAge < 13
    ? "Child"
    : numAge >= 13 && numAge <= 19
    ? "Teen"
    : numAge >= 20 && numAge <= 59
    ? "Adult"
    : "Senior";
};

// console.log(checkAge("10"));

// Task2
// result - true && true will be true, so will stop and return '1'

// Task3
// canEnterClub - && will return first falsy value, so will return over18's value - false

// Task4
// condition - x<y && y<z will return last true, x>y is false, so x>y && y>z will be false, true||false - true

// Task5
// result - num<18 is true, so result will be - "1"

// Task6
// result - a>b is false so first one will be false, second one is true, false || true is - true

// Task7
// checkNumber - foo1(-4) is -2 - true,  foo2(-4) is false, true && false is - false
