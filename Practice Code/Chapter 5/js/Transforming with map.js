/** @type {Array} */
let fleet = [
  {
    make: "Volkswagen",
    model: "Polo",
    numOfSeats: 4,
    transmission: "Manual",
    price: 649,
    year: 2010,
  },
  {
    make: "Mercedes-Benz",
    model: "SLK",
    numOfSeats: 2,
    transmission: "Automatic",
    price: 699,
    year: 2012,
  },
  {
    make: "BMW",
    model: "M4",
    numOfSeats: 2,
    transmission: "Hybrid",
    price: 739.9,
    year: 2014,
  },
  {
    make: "Audi",
    model: "A4",
    numOfSeats: 4,
    transmission: "Manual",
    price: 674.5,
    year: 2013,
  },
  {
    make: "Rolls-Royce",
    model: "Phantom",
    numOfSeats: 4,
    transmission: "Automatic",
    price: 999,
    year: 2009,
  },
];

/**
 *
 * @param {Array} array
 * @param {function} transform
 * @returns {Array} a new array built by applying a function to all of the
 * elements of the input array
 */
function map(array, transform) {
  let mapped = [];
  array.forEach((element) => {
    mapped.push(transform(element));
  });

  return mapped;
}

// using our map function
console.log(
  map(fleet, (car) => {
    return {
      make: car.make,
      model: car.model,
      price: car.price,
    };
  }),
);

// using the standard array map method
console.log(
  fleet.map((car) => {
    return {
      make: car.make,
      model: car.model,
      transmission: car.transmission,
    };
  }),
);
