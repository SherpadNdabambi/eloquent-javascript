function countAncestors(person, test) {
  function combine(current, fromMother, fromFather) {
    let thisOneCounts = current != person && test(current);

    return fromMother + fromFather + (thisOneCounts ? 1 : 0);
  }

  return reduceAncestors(person, combine, 0);
}
