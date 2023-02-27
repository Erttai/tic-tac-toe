"use strict";
const gameBoard = (() => {
  const grid = document.querySelector(".grid");
  let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  function _renderBoard() {
    board.forEach(i => {
      const square = document.createElement("div");
      square.textContent = "";
      grid.append(square);
    });
  }

  _renderBoard();

  return {
    board,
  };
})();

console.log(gameBoard);
