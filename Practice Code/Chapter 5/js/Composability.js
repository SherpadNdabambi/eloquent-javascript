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
 * @param {Array} car
 * @returns {Boolean} true if car transmission is "Automatic" or false if not
 */
function automatic(car) {
  return car.transmission == "Automatic";
}

/**
 *
 * @param {Array} array
 * @returns {number} average
 */
function average(array) {
  function plus(a, b) {
    return a + b;
  }
  return array.reduce(plus) / array.length;
}

/**
 *
 * @param {Array} car
 * @returns {Boolean} true if car transmission is "Manual" or false if not
 */
function manual(car) {
  return car.transmission == "Manual";
}

/**
 *
 * @param {Array} car
 * @returns car price
 */
function price(car) {
  return car.price;
}

console.log(
  "Average manual car price: R",
  average(fleet.filter(manual).map(price)),
);

console.log(
  "Average automatic car price: R",
  average(fleet.filter(automatic).map(price)),
);
