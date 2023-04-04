function longLivingPercentage(person) {

    let all = countAncestors(person, () => { return true }),
        longLiving = countAncestors(person, (person) => { return (person.died - person.born) >= 70 });

    return longLiving / all;
}
