window.onload = () => {
  // declare local variables
  let ancestry = JSON.parse(ANCESTRY_FILE),
    byCentury = groupBy(ancestry, getCentury),
    lifeExpectancy,
    people;

  Object.entries(byCentury).forEach((century) => {
    // calculate life expectancy
    lifeExpectancy = average(
      century[1].map((person) => {
        return person.died - person.born;
      }),
    );

    // // log output to console
    console.log(century[0], "century life expectancy: ", lifeExpectancy);

    // console.log(
    //     key,
    //     "century life expectancy: ",
    //     lifeExpectancy
    // );
  });
};

/**
 *
 * @param {Array} array
 * @param {Function} f function to compute an element's group
 * @returns {Object}
 */
function groupBy(array, f) {
  // declare local variables
  let grouped = {};

  // goup elements
  array.forEach((element) => {
    let groupName = f(element);
    if (!grouped[groupName]) grouped[groupName] = [];
    grouped[groupName].push(element);
  });

  // return result
  return grouped;
}

function groupByCentury(person) {
  // declare local variables
  let centuryString = `${getCentury(person)}`;

  // create object to hold century members if it doesn't exist
  if (!group[centuryString]) centuries[centuryString] = [];

  // group person by century
  group[centuryString].push(person);
}

function getCentury(person) {
  return Math.ceil(person.died / 100);
}
