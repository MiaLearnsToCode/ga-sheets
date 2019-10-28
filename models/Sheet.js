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
  text: { type: String },
  bold: { type: Boolean, required: true },
  cursive: { type: Boolean, required: true },
  strikethrough: { type: Boolean, required: true },
  bkcolor: { type: String },
  color: { type: String }, 
  alignment: { type: String },
  comments: [commentSchema]
})

// sheet model
const sheetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true,
    unique: true
  }, 
  cells: [cellSchema]
})

sheetSchema.plugin(require('mongoose-unique-validator'))

module.exports = new mongoose.model('Sheet', sheetSchema)