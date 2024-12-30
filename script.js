const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restart');
let currentPlayer = 'X';
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleCellClick(event) {
  const cell = event.target;
  const index = cell.dataset.index;
  if (!cell.textContent) {
    cell.textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
      alert(`${currentPlayer} wins!`);
      resetBoard();
    } else if (Array.from(cells).every(cell => cell.textContent)) {
      alert('It\'s a tie!');
      resetBoard();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin(player) {
  return winningCombinations.some(combination =>
    combination.every(index => cells[index].textContent === player)
  );
}

function resetBoard() {
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', resetBoard);
