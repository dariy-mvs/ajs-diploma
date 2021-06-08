import Character from '../Character';

export default class Daemon extends Character {
  constructor(level, type = 'daemon') {
    super(level, type);
    if (type !== 'daemon') {
      throw new Error('неправильный тип персонажа');
    }
    this.attack = 10;
    this.defence = 40;
  }
}
