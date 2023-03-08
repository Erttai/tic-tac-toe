"use strict";

const gameBoard = (() => {
  const players = [{ name: "playerOne" }, { name: "playerTwo" }];
  const grid = document.querySelector(".grid");
  const resetBtn = document.querySelector(".reset");
  let board = Array.from(Array(9).keys());
  console.log(board);
  let squares = [];
  let activePlayer = players[0];

  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  function _renderBoard() {
    board.forEach(i => {
      const div = document.createElement("div");
      div.setAttribute("id", Number(i));
      div.textContent = "";
      grid.append(div);
      squares.push(div);
    });
  }
  _renderBoard();

  squares.forEach(el => {
    el.addEventListener("click", turnClick);
  });

  function turnClick(square) {
    displaySelection(square.target.id, activePlayer);
  }

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  function displaySelection(squareId, activePlayer) {
    if (!gameWon) {
      if (typeof board[squareId] === "number") {
        board[squareId] = activePlayer.name;

        document.getElementById(squareId).textContent =
          activePlayer === players[0] ? "X" : "O";
        checkWin(activePlayer, board);
        gameWon ? gameOver(gameWon) : switchPlayerTurn();
      }
    }
  }

  let gameWon = null;
  function checkWin(player, board) {
    for (const element of winCombos.values()) {
      if (element.every(ele => board[ele] === player.name)) {
        gameWon = { element, player };
        break;
      }
    }
    return gameWon;
  }

  function gameOver(gameWon) {
    for (const element of gameWon.element.values()) {
      document.getElementById(element).classList.add("winner");
    }
  }

  const reset = () => {
    board = Array.from(Array(9).keys());
    gameWon = null;
    squares.forEach(element => {
      element.textContent = "";
      element.classList.remove("winner");
    });
    activePlayer = players[0];
  };

  resetBtn.addEventListener("click", reset);
})();
