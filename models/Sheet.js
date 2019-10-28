const mongoose = require('mongoose')

// comments embedded in a cell
const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
})

// cells embedded in a sheet
const cellSchema = new mongoose.Schema({
  row: { type: String, required: true },
  column: { type: String, required: true },
  text: { type: String, default: '' },
  bold: { type: Boolean, required: true, default: false },
  cursive: { type: Boolean, required: true, default: false },
  strikethrough: { type: Boolean, required: true, default: false },
  bkcolor: { type: String, required: true, default: 'white' },
  font: { type: String, required: true, default: 'Cambria' },
  color: { type: String, required: true, default: 'black' },
  alignment: { type: String, required: true, default: 'left' },
  comments: [commentSchema]
})

// sheet model
const sheetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cells: [cellSchema],
  users: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
})

sheetSchema.plugin(require('mongoose-unique-validator'))

module.exports = new mongoose.model('Sheet', sheetSchema)