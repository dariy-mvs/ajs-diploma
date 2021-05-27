export function calcTileType(index, boardSize) {
  // TODO: write logic here
  let borderString = '';
  
  if (index === 0) {
    borderString = 'top-left';
  } else if (index === boardSize ** 2 - 1) {
    borderString = 'bottom-right';
  } else if (index === boardSize ** 2 - boardSize) {
    borderString = 'bottom-left';
  } else if (index === boardSize -1) {
    borderString = 'top-right';
  } else if (index < boardSize - 1) {
    borderString = 'top';
  } else if (index % boardSize === 0) {
    borderString = 'left';
  } else if ((index + 1) % boardSize === 0) {
    borderString = 'right';
  } else if (index > (boardSize ** 2 - boardSize) && index < (boardSize ** 2 -1)) {
    borderString = 'bottom';
  } else {
    borderString = 'center';
  }
  return borderString;
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
