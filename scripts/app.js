
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
  $('option').each(function () {
    console.log($('.level').val())
    if ($('.level').val() === ('beginner')) {
      console.log('beginner works')
      board = new Gameboard('beginner').beginner
      createSquares(7)
      // setButtons()
      return false
    } else if ($('.level').val() === ('easy')) {
      console.log('easy works')
      board = new Gameboard('easy').easy
      createSquares(9)
      // animateTheBoxes()
      // setButtons()
      return false
    } else if ($('.level').val() === ('intermediate')) {
      console.log('intermediate works')
      board = new Gameboard('intermediate').intermediate
      createSquares(12)
      // setButtons()
      return false
    }
  })
}
)
const createSquares = (squareNum) => {
  for (let i = 0; i < squareNum; i++) {
    const $table = $('<th class= cool><button class=press value=/><th/>').on('click')
    $('.go').prepend($table)
    console.log('hiya')
  }
  for (let i = 1; i < squareNum; i++) {
    const $th = $('<td><button class=press value=/><td/>').on('click')
    $('.cool').append($th)
  }
  animateTheBoxes()
  clearInterval(animateTheBoxes, 500)
}

// $('.level').change(function () {
//   console.log('change')
// })
// const setButtons = (squareNum) => {
//   for (var j = 0; j < squareNum; j += 3) {
//     $('.press').toggleClass('.press bomb')
//     console.log('setButtons')
//   }
// }

function animateTheBoxes () {
  let classes = ['press ', 'bomb ']
  $(".press").each(function () {
    $(this).removeClass('bomb ' + classes.join(' ')).addClass(classes[~~(Math.random() * classes.length)])
    console.log('bombcreated')
  })
  setTimeout(animateTheBoxes, 500)
}
