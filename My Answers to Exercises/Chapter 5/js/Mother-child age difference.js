function hasMother(candidate) {
	return byName[candidate.mother];
}

function motherChildAgeDifference(child) {
	let childBirthYear = child.born,
	motherBirthYear = byName[child.mother].born;

	return childBirthYear - motherBirthYear;
}

let motherChildAgeDifferences = ancestry.filter(hasMother).map((person) => {
	return motherChildAgeDifference(person);
});

let averageAgeDifference = average(motherChildAgeDifferences);

console.log(averageAgeDifference);