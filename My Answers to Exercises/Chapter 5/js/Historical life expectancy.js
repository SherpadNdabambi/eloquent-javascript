window.onload = () => {
  
    // declare local variables
    let ancestry = JSON.parse(ANCESTRY_FILE),
        centuries = {},
        lifeExpectancy,
        people;
    
    ancestry.forEach((ancestor) => {

        // declare local variables
        let centuryString = `${Math.ceil(ancestor.died / 100)}`;

        // create object to hold century members if it doesn't exist
        if (!centuries[centuryString]) centuries[centuryString] = [];

        // group ancestor by century
        centuries[centuryString].push(ancestor);
    });

    Object.keys(centuries).forEach((key) => {

        people = centuries[key];               // get the people from the century

        // calculate life expectancy
        lifeExpectancy = average(people.map((person) => {
          return person.died - person.born;
        }));

        // log output to console
        console.log(
          key,
          "century life expectancy: ",
          lifeExpectancy
        );
    });
}
