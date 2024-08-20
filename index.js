function createChessBoard() {
  const chessboard = document.getElementById("chessboard");
  const pieces = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    [],
    [],
    [],
    [],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
  ];
  let isWhite = false;

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div");
      square.className = "square";
      square.classList.add(isWhite ? "white" : "black");
      square.textContent = pieces[row][col] || "";
      chessboard.appendChild(square);
      isWhite = !isWhite;
    }
    isWhite = !isWhite;
  }
}

createChessBoard();
