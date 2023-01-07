/** @type {Array} */
let fleet = [
   {
      make: "Volkswagen",
      model: "Polo",
      numOfSeats: 4,
      transmission: "Manual",
      price: 649,
      year: 2010
   },
   {
      make: "Mercedes-Benz",
      model: "SLK",
      numOfSeats: 2,
      transmission: "Automatic",
      price: 699,
      year: 2012
   },
   {
      make: "BMW",
      model: "M4",
      numOfSeats: 2,
      transmission: "Hybrid",
      price: 739.9,
      year: 2014
   },
   {
      make: "Audi",
      model: "A4",
      numOfSeats: 4,
      transmission: "Manual",
      price: 674.5,
      year: 2013
   },
   {
      make: "Rolls-Royce",
      model: "Phantom",
      numOfSeats: 4,
      transmission: "Automatic",
      price: 999,
      year: 2009
   }
];

/**
 * 
 * @param {Array} array
 * @param {function} test
 * @returns a new array with only the elements that pass the test
 */
function filter(array, test) {

   let passed = [];
   array.forEach((element) => {
      if (test(element)) passed.push(element);
   });

   return passed;
}


// using our function
console.log(filter(fleet, (car) => {
   return car.year >= 2012;
}));

// using the standard array filter method
console.log(fleet.filter((car) => {
   return car.transmission == "Manual";
}));