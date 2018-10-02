let board
$('#newGame').click(function () {
  board = new Gameboard('')
  if ('#level'.val() === 'easy') {
    console.log()
  }
})
class Gameboard {
  // minesweeper () {
  //   let matrix = []
  //   for (var i = 0; i < (9); i++) {
  //     matrix[i] = new Array(9)
  //     console.log(matrix[i])
  //   }
  // }
  beginner () {
    this.name = 'beginner'
    this.grid = 7
    this.minesCount = 5
    this.width = 296
    let matrix = []
    for (var i = 0; i < (this.grid); i++) {
      matrix[i] = new Array(this.grid)
      console.log(matrix[i])
    }
  }
  easy () {
    this.name = 'easy'
    this.grid = 9
    this.minesCount = 10
    this.width = 380
    let matrix = []
    for (var i = 0; i < (this.grid); i++) {
      matrix[i] = new Array(this.grid)
      console.log(matrix[i])
    }
  }
  intermediate () {
    this.name = 'intermediate'
    this.grid = 12
    this.minesCount = 20
    this.width = 500
    let matrix = []
    for (var i = 0; i < (this.grid); i++) {
      matrix[i] = new Array(this.grid)
      console.log(matrix[i])
    }
  }
}
