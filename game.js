let currentPlayer = 'X';
let gameEnded = false;
let board = ['', '', '', '', '', '', '', '', ''];

function makeMove(index) {
  if (!gameEnded && board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].textContent = currentPlayer;
    if (checkWin()) {
      document.getElementById('result').textContent = `Player ${currentPlayer} wins!`;
      gameEnded = true;
    } else if (checkDraw()) {
      document.getElementById('result').textContent = 'It\'s a draw!';
      gameEnded = true;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (board[a] === currentPlayer && board[b] === currentPlayer && board[c] === currentPlayer) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  return board.every(cell => cell !== '');
}

function resetGame() {
  currentPlayer = 'X';
  gameEnded = false;
  board = ['', '', '', '', '', '', '', '', ''];
  document.getElementById('result').textContent = '';
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }
}
