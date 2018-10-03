
class Gameboard {
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

let board
$('.newGame').click(function () {
  board = new Gameboard('')
  // if ($('option').attr('id') === 'beginner') {
  //
  //   console.log('please work')
  // }
  $('option').each(function (id) {
    console.log($('.level').val())
    if ($('.level').val() === ('beginner')) {
      console.log('beginner works')
      return false
    }
  })
}
)

$('.level').change(function () {
  console.log('change')
})
