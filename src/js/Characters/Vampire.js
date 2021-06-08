import Character from '../Character';

export default class Vampire extends Character {
  constructor(type = 'vampire', level) {
    super(level, type);
    if (type !== 'vampire') {
      throw new Error('неправильный тип персонажа');
    }
    this.attack = 25;
    this.defence = 25;
  }
}
