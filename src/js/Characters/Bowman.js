import Character from '../Character';

export default class Bowman extends Character {
  constructor(level, type = 'bowman') {
    super(level, type);
    if (type !== 'bowman') {
      throw new Error('неправильный тип персонажа');
    }
    this.attack = 25;
    this.defence = 25;
  }
}
