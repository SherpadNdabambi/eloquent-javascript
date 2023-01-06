/**
 * 
 * @param {number} start
 * @param {number} end
 * @param {number} step
 * @returns {Array} an array containing all the numbers from start up to (and
 * including) end
 */
function range(start, end, step) {
   array = [];
   if (start < end) for (let i = start; i <= end; i += step) array.push(i);
   else for (let i = start; i >= end; i += step) array.push(i);
   return array;
}

/**
 * 
 * @param {Array} array
 * @returns {number} the sum of the numbers in array
 */
function sum(array) {
   let total = 0;

   array.forEach(element => {
      total += element;
   });

   return total;
}