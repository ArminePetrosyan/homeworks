const calculateDiscount = (price, discount) => {
  const priceNum = +price;
  const discountNum = +discount;

  return priceNum !== priceNum || discountNum !== discountNum
    ? "Invalid input: Price and discount must be numbers."
    : discountNum < 0 || discountNum > 100
    ? "Invalid input: Discount must be between 0 and 100."
    : priceNum - (priceNum * discountNum) / 100;
};

// console.log(calculateDiscount("100", "20"));
