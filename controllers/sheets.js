const Sheet = require('../models/Sheet')
const cells = require('../lib/createCells')

// CREATE-sheet controller function
function create(req, res) {
  req.body.cells = cells
  req.body.users[0] = req.currentUser

  Sheet
    .create(req.body)
    .then(sheet => {
      res.status(201).json(sheet) 
    })
    .catch(err => console.log(err))
}

// INDEX-sheets controller function
function index(req, res) {
  Sheet
    .find({ users: { '$in': [req.currentUser] } })
    .then(sheets => {
      if (!sheets) return res.status(200).json({ message: 'Nothing to see here' })
      const simplifiedSheets = sheets.map(sheet => {
        sheet.cells = []
        return sheet
      } )
      return res.status(200).json(simplifiedSheets)
    })
    .catch(err => console.log(err))
}

// SHOW-sheet controller function
function show(req, res) {
  Sheet
    .findById(req.params.sheetId)
    .then(sheet => {
      if (!sheet) throw new Error('Not Found')
      const user = sheet.users.filter(user => user.equals(req.currentUser._id))
      if (user.length === 0) {
        sheet.users.push(req.currentUser)
        return sheet.save()
      }
      return sheet
    })
    .then(sheet => {
      return res.status(200).json(sheet)
    })
    .catch(err => console.log(err))
}

// DELETE-sheet controller function
function deleteRoute(req, res) {
  Sheet
    .findById(req.params.sheetId)
    .then(sheet => {
      if (!sheet) throw new Error('Not Found')
      return sheet.remove()
    })
    .then(() => res.status(200).json({ message: 'Deleted successfully ' }))
    .catch(err => console.log(err))
}

module.exports = { create, index, show, deleteRoute }