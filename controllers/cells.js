const Sheet = require('../models/Sheet')

// PUT-cells controller function
function update(req,res) {
  Sheet
    .findById(req.params.sheetId)
    .then(sheet => {
      if (!sheet) throw new Error('Not Found')
      const cell = sheet.cells.filter(cell => cell._id.equals(req.params.cellId))[0]
      Object.assign(cell, req.body)
      return sheet.save()
    })
    .then(sheet => res.status(202).json(sheet))
    .catch(err => console.log(err))
}

// POST-comment controller function
function createComment(req, res) {
  req.body.user = req.currentUser
  Sheet
    .findById(req.params.sheetId)
    .then(sheet => {
      if (!sheet) throw new Error('Not Found')
      const cell = sheet.cells.filter(cell => cell._id.equals(req.params.cellId))[0]
      if (!cell) throw new Error('Not Found')
      cell.comments.push(req.body)
      return sheet.save()
    })
    .then(sheet => res.status(201).json(sheet))
    .catch(err => console.log(err))
}

// DELETE-comment controller function
function resolveComment(req, res) {
  req.body.user = req.currentUser
  Sheet
    .findById(req.params.sheetId)
    .then(sheet => {
      if (!sheet) throw new Error('Not Found')
      const cell = sheet.cells.filter(cell => cell._id.equals(req.params.cellId))[0]
      if (!cell) throw new Error('Not Found')
      const comment = cell.comments.filter(comment => comment._id.equals(req.params.commentId))[0]
      if (!comment) throw new Error('Not Found')
      comment.remove()
      return sheet.save()
    })
    .then(() => res.status(200).json({ message: 'Deleted successfully ' }))
    .catch(err => console.log(err))
}

module.exports = { update, createComment, resolveComment }



