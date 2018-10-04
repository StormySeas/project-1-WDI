
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
// const createGrid = (gridSize) => {
//   for (let i = 0; i < this.grid; i++) {
//     const square = $('<square/>')
//     $('.board').append(square)
//   }
// }

let board
$('.newGame').click(function () {
  $('option').each(function () {
    console.log($('.level').val())
    if ($('.level').val() === ('beginner')) {
      console.log('beginner works')
      board = new Gameboard('beginner').beginner
      createSquares(7)
      return false
    } else if ($('.level').val() === ('easy')) {
      console.log('easy works')
      board = new Gameboard('easy').easy
      createSquares(9)
      return false
    } else if ($('.level').val() === ('intermediate')) {
      console.log('intermediate works')
      board = new Gameboard('intermediate').intermediate
      createSquares(12)
      return false
    }
  })
}
)
const createSquares = (squareNum) => {
  for (let i = 0; i < squareNum * squareNum; i++) {
    const $section = $('<button/>').on('click')
    $('.gameGrid').append($section)
    console.log('hiya')
  }
}

$('.level').change(function () {
  console.log('change')
})
//
// const createSquares = (numberOfSquares) => {
//   console.log('poop')
//   for (let i = 0; i < [i].length; i++) {
//     const square = $('<div/>')
//     $('.board').append(square)
//   }
// }
