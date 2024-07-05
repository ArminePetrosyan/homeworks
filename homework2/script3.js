const convertTemperature = (value, scale) => {
  const temperature = +value;

  if (temperature !== temperature) {
    return "Invalid temperature value. Please provide a valid number.";
  }

  switch (scale) {
    case "C":
      return (temperature - 32) / 1.8;
    case "F":
      return temperature * 1.8 + 32;
    default:
      return "Invalid scale. Please use 'C' for Celsius or 'F' for Fahrenheit.";
  }
};

// console.log(convertTemperature("100", "C"));
