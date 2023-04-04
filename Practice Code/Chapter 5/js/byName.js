let ancestry = JSON.parse(ANCESTRY_FILE);
let byName = {};

ancestry.forEach(person => {
    byName[person.name] = person;
});