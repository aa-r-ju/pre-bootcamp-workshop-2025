// YOUR CODE BELOW
let ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  move: function (char, rowNum, colNum) {
    if (this.board[rowNum][colNum] === null) {
      this.board[rowNum][colNum] = char;

      return this.board;
    } else {
      console.log("Cell is already taken, choose another spot.");
      return this.board;
    }
  },
  clear: function () {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    console.log("Board cleared!");
    return this.board;
  },
};
console.log(ticTacToe.move("X", 0, 0));
console.log(ticTacToe.move("X", 0, 0));
console.log(ticTacToe.move("O", 1, 1));
console.log(ticTacToe.move("X", 0, 1));
console.log(ticTacToe.clear());
