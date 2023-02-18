/**
 * 
 * @param {string} text
 * @returns {number} the number of upper case 'B' characters in the string text
 */
function countBs(text) {
   return countChar(text, 'B');
}

/**
 * 
 * @param {string} text
 * @param {char} character
 * @returns the number of occurences of character in the string text
 */
function countChar(text, character) {
   let numOfChars = 0;

   for (let i = 0; i < text.length; i++) {
      if (text[i] === character) numOfChars++;
   }

   return numOfChars;
}