window.onload = () => {
  console.log(
    "every([2, 4, 5, 7, 8, 10], isEven): ",
    every([2, 4, 5, 7, 8, 10], isEven),
  );
  console.log(
    `some(
    ["Doggo", { name: "John" }, "Cat", 1],
    isObject
):\n`,
    some(["Doggo", { name: "John" }, "Cat", 1], isObject),
  );
};

/**
 *
 * @param {Array} array
 * @param {Function} f
 */
function every(array, f) {
  // declare local variables
  let condition = true,
    index = 0;

  // test function predicate on array elements
  while (condition && index < array.length) {
    condition = f(array[index]);
    index++;
  }

  return condition;
}

/**
 *
 * @param {Integer} number
 * @returns
 */
function isEven(number) {
  return number % 2 === 0;
}

/**
 *
 * @param {Thing} thing
 * @returns
 */
function isObject(thing) {
  return typeof thing === "object";
}

/**
 *
 * @param {Array} array
 * @param {Function} f
 * @returns
 */
function some(array, f) {
  // declare local variables
  let condition = false,
    index = 0;

  // test function predicate on array elements
  while (!condition && index < array.length) {
    condition = f(array[index]);
    index++;
  }

  return condition;
}
