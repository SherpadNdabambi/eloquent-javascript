let alphabet = ["a", "b"],
  numbers = [1, 2, 3];

let singleArray = alphabet.reduce(() => {
  return alphabet.concat(numbers);
});
console.log(singleArray);
