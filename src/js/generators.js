/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here

    const randIndex = Math.floor(Math.random() * allowedTypes.length);
    const randLevel = Math.floor(Math.random() * maxLevel);
    const randCharacterClass = allowedTypes[randIndex];
    let returnCharacter = new randCharacterClass(randLevel);
    // повышение уровня надо прописать
    yield returnCharacter;
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  let arrayTeam = [];
  for (let i=0; i<=characterCount; i++) {
    const newCharacter = characterGenerator(allowedTypes, maxLevel);
    arrayTeam.push(newCharacter.next().value);

  }
  return arrayTeam;
}
