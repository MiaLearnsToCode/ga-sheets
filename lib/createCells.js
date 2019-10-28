const cells = []

for (let i = 0; i < 364; i++) {
  const cell = {
    row: '',
    column: '',
    text: '', 
    bold: false,
    cursive: false, 
    strikethrough: false,
    bkcolor: 'white',
    font: 'Cambria',
    color: 'black', 
    alignment: 'left'
  }

  const columns = {
    A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9, K: 10, L: 11, M: 12 
  }

  //  check what column the cell is in
  Object.keys(columns).map((key, index) => {
    if (i === index || (i - index) % 13 === 0 ) {
      cell.column = key
    }
  })

  //  check what row the cell is in
  for (let e = 1; e < 29; e++) {
    const lower = (e - 1) * 13
    const higher = e * 13
    
    if (i >= lower && i < higher) {
      cell.row = e.toString()
    }
  }

  cells.push(cell)
}

module.exports = cells

