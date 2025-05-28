function sharedDNA(person, fromMother, fromFather) {
  if (person.name === "Pauwels van Haverbeke") return 1;
  return (fromMother + fromFather) / 2;
}
