const boardRegions = document.querySelectorAll('#gameBoard span');
let virtualBoard = [];
let playerTurn = '';

function updateTitle() {
  const playerInput = document.getElementById(playerTurn);
  document.getElementById('playerTurn').innerText = playerInput.value;
}

function initializeGame() {
  virtualBoard = [['', '', ''], ['', '', ''], ['', '', '']];
  playerTurn = 'player1';
  document.querySelector('h2').innerHTML = 'Vez de: <span id="playerTurn"></span>';
  updateTitle();
  boardRegions.forEach(function (element) {
    element.classList.remove('win');
    element.innerText = '';
    element.classList.add('cursor-pointer');
    element.addEventListener('click', handleBoardClick);
  })
}
function getWinRegions() {
  const winRegions = [];
  if (virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[0][1] && virtualBoard[0][0] === virtualBoard[0][2])
    winRegions.push("0.0", "0.1", "0.2");
  if (virtualBoard[1][0] && virtualBoard[1][0] === virtualBoard[1][1] && virtualBoard[1][0] === virtualBoard[1][2])
    winRegions.push("1.0", "1.1", "1.2");
  if (virtualBoard[2][0] && virtualBoard[2][0] === virtualBoard[2][1] && virtualBoard[2][0] === virtualBoard[2][2])
    winRegions.push("2.0", "2.1", "2.2");
  if (virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[1][0] && virtualBoard[0][0] === virtualBoard[2][0])
    winRegions.push("0.0", "1.0", "2.0");
  if (virtualBoard[0][1] && virtualBoard[0][1] === virtualBoard[1][1] && virtualBoard[0][1] === virtualBoard[2][1])
    winRegions.push("0.1", "1.1", "2.1");
  if (virtualBoard[0][2] && virtualBoard[0][2] === virtualBoard[1][2] && virtualBoard[0][2] === virtualBoard[2][2])
    winRegions.push("0.2", "1.2", "2.2");
  if (virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[1][1] && virtualBoard[0][0] === virtualBoard[2][2])
    winRegions.push("0.0", "1.1", "2.2");
  if (virtualBoard[0][2] && virtualBoard[0][2] === virtualBoard[1][1] && virtualBoard[0][2] === virtualBoard[2][0])
    winRegions.push("0.2", "1.1", "2.0");
  return winRegions
}
function disableRegion(element) {
  element.classList.remove('cursor-pointer');
  element.removeEventListener('click', handleBoardClick);
}
function handleWin(regions) {
  regions.forEach(function (region) {
    document.querySelector('[data-region="' + region + '"]').classList.add('win');
  })
  const playerName = document.getElementById(playerTurn).value
  document.querySelector('h2').innerHTML = playerName + ' venceu!';
}

function handleBoardClick(ev) {
  const span = ev.currentTarget;
  const region = span.dataset.region ;
  const rowColumnPair = region.split('.') ;
  const row = rowColumnPair[0];
  const column = rowColumnPair[1];
  if (playerTurn === 'player1') {
    span.innerText = 'X';
    virtualBoard[row][column] = 'X';
  } else {
    span.innerText = 'O';
    virtualBoard[row][column] = 'O';
  }
  console.clear();
  console.table(virtualBoard);
  disableRegion(span);
  const winRegions = getWinRegions();
  if (winRegions.length > 0) {
    handleWin(winRegions);
  } else if (virtualBoard.flat().includes('')) {
    playerTurn = playerTurn === 'player1' ? 'player2' : 'player1';
    updateTitle();
  } else {
    document.querySelector('h2').innerHTML = 'Empate!';
  }
}
document.getElementById('start').addEventListener('click', initializeGame);