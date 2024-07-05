const calculateBMI = (weight, height) => {
  const weightNum = +weight;
  const heightNum = +height;

  switch (true) {
    case weightNum !== weightNum || heightNum !== heightNum:
      return "Invalid input: Weight and height must be numbers.";
    case heightNum <= 0:
      return "Invalid input: Height must be a positive number.";
    case weightNum <= 0:
      return "Invalid input: Weight must be a positive number.";
    default:
      return weightNum / (heightNum * heightNum);
  }
};

// console.log(calculateBMI("-70", "1.8"));
