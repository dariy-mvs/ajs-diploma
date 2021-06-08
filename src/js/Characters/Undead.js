import Character from '../Character';


export default class Undead extends Character {
  constructor(level, type = 'undead') {
    super(level, type);
    if (type !== 'undead') {
      throw new Error('неправильный тип персонажа');
    }
    this.attack = 40;
    this.defence = 10;
  }
}
