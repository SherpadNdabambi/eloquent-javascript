function countBs(text) {
   return countChar(text, 'B');
}

function countChar(text, character) {
   let numOfChars = 0;

   for (let i = 0; i < text.length; i++) {
      if (text[i] === character) numOfChars++;
   }

   return numOfChars;
}