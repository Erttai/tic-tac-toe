"use strict";

const playerOne = {
  name: "luciano",
  selection: [],
};

const playerTwo = {
  name: "Jorge",
  selection: [],
};

const gameBoard = (() => {
  const grid = document.querySelector(".grid");
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  let squares = [];
  function _renderBoard() {
    arr.forEach(i => {
      const div = document.createElement("div");
      div.setAttribute("id", i);
      div.textContent = i;
      grid.append(div);
      squares.push(div);
    });
  }
  _renderBoard();

  // function _passTurn(playerTurn) {
  //   if (playerTurn === 1) {
  //     playerTurn = 2;
  //   }
  // }

  let playerTurn = 1;
  function _displaySelection(e) {
    const square = e.target.id;
    if (
      playerTurn === 1 &&
      !playerOne.selection.includes(square) &&
      !playerTwo.selection.includes(square)
    ) {
      playerOne.selection.push(square);
      this.textContent = "X";
      playerTurn = 2;

      console.log(playerOne.selection);
    } else if (
      playerTurn === 2 &&
      !playerTwo.selection.includes(square) &&
      !playerOne.selection.includes(square)
    ) {
      playerTwo.selection.push(square);
      this.textContent = "O";
      playerTurn = 1;
      console.log(playerTwo.selection);
    }
  }

  squares.forEach(el => {
    el.addEventListener("click", _displaySelection);
  });

  return {
    squares,
    playerTurn,
  };
})();
