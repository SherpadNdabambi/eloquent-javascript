function reduceAncestors(person, f, defaultValue) {

    function valueFor(person) {
        if (person == null) return defaultValue;
        return f(person, valueFor(byName[person.mother]), valueFor(byName[person.father]));
    }

    return valueFor(person);
}
