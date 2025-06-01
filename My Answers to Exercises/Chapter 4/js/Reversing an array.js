/**
 *
 * @param {Array} array
 * @returns {Array} a new array with the same elements in the reverse order
 */
function reverseArray(array) {
  let newArray = [];

  for (let i = array.length - 1; i > -1; i--) {
    newArray.push(array[i]);
  }

  return newArray;
}

/**
 * reverses the elements of the array given as its argument
 * @param {Array} array
 */
function reverseArrayInPlace(array) {
  let temp;
  for (let i = 0; i < array.length / 2; i++) {
    temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }
}
