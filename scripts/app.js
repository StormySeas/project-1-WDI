let board
$(document).ready(function () {
  board = new Gameboard()
  board.minesweeper()
})
class Gameboard {
  minesweeper () {
    let matrix = []
    for (var i = 0; i < (9); i++) {
      matrix[i] = new Array(9)
      console.log(matrix[i])
    }
  }
  easy () {
    this.name = 'easy'
    this.grid = 7
    this.minesCount = 5
    this.width = 296
  }
  beginner () {
    this.name = 'beginner'
    this.grid = 9
    this.minesCount = 10
    this.width = 380
  }
  intermediate () {
    this.name = 'intermediate'
    this.grid = 12
    this.minesCount = 20
    this.width = 500
  }
}
$('#newGame').click(function () {

})
