/**
 * 
 * @param {number} number
 * @returns {boolean} true if number is even or false if number is odd
 */
function isEven(number) {
   number = Math.abs(number);
   if (number === 0) return true;
   if (number === 1) return false;
   return isEven(number - 2);
}