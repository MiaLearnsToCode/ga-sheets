const Sheet = require('../models/Sheet')
const cells = require('../lib/createCells')

// CREATE controller function
function create(req, res) {
  req.body.cells = cells
  Sheet
    .create(req.body)
    .then(sheet => {
      res.status(201).json(sheet)
    })
    .catch(err => console.log(err))
}

module.exports = { create }