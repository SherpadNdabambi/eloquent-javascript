function deepEqual(a, b) {

   if (a === b) return true;
   if (!((typeof a === 'object') && a))
      return false;
   for (let property in a)
      if (!b || !deepEqual(a[property], b[property]))
         return false;
   return true;
}