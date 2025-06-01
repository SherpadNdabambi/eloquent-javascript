/**
 *
 * @param {Array} array
 * @returns {list} a list built from the given array
 */
function arrayToList(array) {
  let list = {
    value: array[array.length - 1],
    rest: null,
  };
  for (let i = array.length - 2; array[i]; i--) {
    list = {
      value: array[i],
      rest: list,
    };
  }

  return list;
}

/**
 *
 * @param {list} list
 * @returns {Array} an array built from a list
 */
function listToArray(list) {
  let array = [];
  for (node = list; node; node = node.rest) array.push(node.value);

  return array;
}

/**
 *
 * @param {list} list
 * @param {number} n
 * @returns the element at the given position in the given list or undefined
 * when there is no such element
 */
function nth(list, n) {
  if (list) {
    if (n === 1) return list.value;
    return nth(list.rest, n - 1);
  }
  return undefined;
}

/**
 *
 * @param {*} element
 * @param {list} list
 * @returns {list} a new list that adds the given element to the front of the
 * given list
 */
function prepend(element, list) {
  return {
    value: element,
    rest: list,
  };
}
