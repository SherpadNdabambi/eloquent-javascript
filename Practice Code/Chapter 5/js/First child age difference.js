window.onload = () => {
  let parents = ancestry.filter((candidate) => {
    return hasChild(candidate);
  });

  firstChildAgeDifferences = parents.map((parent) => {
    parent.firstChildAgeDifference = Math.abs(
      parent.born - findFirstChild(parent).born,
    );
    return parent;
  });

  console.log(firstChildAgeDifferences);
};

function firstChildAgeDifference(parent) {
  // declare local variables
  let parentBirthYear = parent.born,
    firstChildBirthYear = findFirstChild(parent).born;

  return firstChildBirthYear - parentBirthYear;
}

function hasChild(candidate) {
  return findChildren(candidate).length > 0;
}
