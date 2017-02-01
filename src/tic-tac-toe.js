class TicTacToe {
  constructor() {
    this.currentPlayerSymbol = "x";
    this.matrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
                  ];
    this.winnerSymbol = null;
    this.turnNumber = 0;


  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex] != null) {
      return
    }

    this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;

    if (this.turnNumber > 3) {
      this.checkResult();
    }

    if (this.currentPlayerSymbol == "x") {
      this.currentPlayerSymbol = "o"
    } else {
      this.currentPlayerSymbol = "x"
    }

    this.turnNumber++

  }


  checkResult() {
    var isWinner = false;

    if (this.matrix[0][0] == this.matrix[0][1] && this.matrix[0][1] == this.matrix[0][2] && this.matrix[0][0]!=null) {
      isWinner = true;
    }
    if (this.matrix[1][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[1][2] && this.matrix[1][0]!=null) {
      isWinner = true;
    }
    if (this.matrix[2][0] == this.matrix[2][1] && this.matrix[2][1] == this.matrix[2][2] && this.matrix[2][0]!=null) {
      isWinner = true;
    }


    if (this.matrix[0][0] == this.matrix[1][0] && this.matrix[1][0] == this.matrix[2][0] && this.matrix[0][0]!=null) {
      isWinner = true;
    }
    if (this.matrix[0][1] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][1] && this.matrix[0][1]!=null) {
      isWinner = true;
    }
    if (this.matrix[0][2] == this.matrix[1][2] && this.matrix[1][2] == this.matrix[2][2] && this.matrix[0][2]!=null) {
      isWinner = true;
    }


    if (this.matrix[0][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][2] && this.matrix[0][0]!=null) {
      isWinner = true;
    }
    if (this.matrix[2][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[0][2] && this.matrix[2][0]!=null) {
      isWinner = true;
    }



    if (isWinner) {
      this.winnerSymbol = this.currentPlayerSymbol;
    }
  }


  isFinished() {
    if (this.getWinner() != null) {
      return true;
    }
    return this.noMoreTurns();


  }

  getWinner() {

    return this.winnerSymbol;

  }

  noMoreTurns() {

    for (var row = 0; row < 3; row++) {
      for (var col = 0; col < 3; col++) {
        if (this.matrix[row][col] == null) {
          return false;
        }
      }

    }
    return true;
  }

  isDraw() {
    if (this.getWinner() != null) {
      return false;
    }

    return this.noMoreTurns();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;