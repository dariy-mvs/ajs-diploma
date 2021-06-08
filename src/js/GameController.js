import Daemon from "./Characters/Daemon";
import Swordsman from './Characters/Swordsman';
import Vampire from './Characters/Vampire';
import Magician from './Characters/Magician';
import Undead from './Characters/Undead';
import Bowman from './Characters/Bowman';
import PositionedCharacter from './PositionedCharacter';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    
    
  }
   getNumber(user) {
    let a = 0;
    if (user === 'gamer') {
      do {
        a = Math.round(0 - 0.5 + Math.random() * (56 + 1));
        a = Math.abs(a);
        if (a % 8 == 0 || a % 8 == 1) break
       } while (true);
    } else if (user === 'comp') {
      do {
        a = Math.round(0 - 0.5 + Math.random() * (56 + 1));
        a = Math.abs(a);
        if (a % 8 == 6 || a % 8 == 7) break
       } while (true);
    }
    return a
  }
  getCommand(user) {
    let command = [];
    let positions = [];
    for (let i = 0; i < 3; i++) {
      let numberPosition;
       do {
        numberPosition = this.getNumber(user);
      } while (positions.includes(numberPosition))
      console.log(numberPosition);
      positions.push(numberPosition);
      let person = new PositionedCharacter(new Vampire('vampire', 5), numberPosition);
      command.push(person);
    }
    return command;
  }

  init() {
    this.gamePlay.drawUi('prairie');
    // TODO: load saved stated from stateService
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    const commandComp = this.getCommand('comp');
    const commandGamer = this.getCommand('gamer');
    this.gamePlay.redrawPositions(commandComp);
    this.gamePlay.redrawPositions(commandGamer);
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    const icLevel = String.fromCodePoint(0x1F396);
    const icAttack = String.fromCodePoint(0x2694);
    const icDamage = String.fromCodePoint(0x1F6E1);
    const icHealth = String.fromCodePoint(0x2764);
    const message = `${icLevel} 1, ${icAttack} 10, ${icDamage} 40, ${icHealth} 5`;
    
    if (event.target.querySelector('.character')) {
      
      this.gamePlay.showCellTooltip(message ,index);
    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}

