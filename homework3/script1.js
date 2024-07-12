const lettersDigitsCounter = (string) => {
  let letterCount = 0;
  let digitCount = 0;
  let symbolCount = 0;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    switch (true) {
      case /[a-zA-Z]/.test(char):
        letterCount++;
        break;
      case /[0-9]/.test(char):
        digitCount++;
        break;
      default:
        symbolCount++;
        break;
    }
  }
  return {
    letters: letterCount,
    digits: digitCount,
    symbols: symbolCount,
  };
};

// console.log(lettersDigitsCounter("Hello333World##"));
