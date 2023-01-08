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
 * @param {function} combine
 * @param {*} start
 * @returns a single value from the input array using the input function
 */
function reduce(array, combine, start) {

   let current = start;
   array.forEach( (element) => {
      current = combine(current, element);
   });
   return current;
}

// using our reduce function
console.log("Newest car:", reduce(fleet, (car1, car2) => {
   return (car1.year > car2.year) ? car1 : car2;
}, fleet[1]));

// using the standard array reduce function
console.log("Cheapest car", fleet.reduce((car1, car2) => {
   return (car1.price < car2.price) ? car1 : car2;
}));