const str = "hello";
const reserved = (function (str) {
  return str.split("").reduce((acc, char) => char + acc, "");
})(str);

console.log(reserved);
