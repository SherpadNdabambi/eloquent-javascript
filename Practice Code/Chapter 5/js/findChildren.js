function findChildren(parent) {
  if (typeof parent === "object")
    return ancestry.filter((child) => {
      if (parent.sex === "f") return child.mother === parent.name;
      return child.father === parent.name;
    });
  return ancestry.filter((child) => {
    return child.father === parent || child.mother === parent;
  });
}

function findFirstChild(parent) {
  // declare local variables
  children = findChildren(parent);

  if (children.length > 0)
    return children.reduce((leftChild, rightChild) => {
      if (leftChild.born < rightChild.born) return leftChild;
      return rightChild;
    });
}
