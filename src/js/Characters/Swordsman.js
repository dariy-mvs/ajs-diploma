import Character from '../Character';

export default class Swordsman extends Character {
  constructor(level, type = 'swordsman') {
    super(level, type);
    if (type !== 'swordsman') {
      throw new Error('неправильный тип персонажа');
    }
    this.attack = 40;
    this.defence = 10;
  }
}
