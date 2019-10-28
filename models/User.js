const mongoose = require('mongoose')
const sheets = require('./Sheet')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
  sheets: [{ type: Schema.Types.ObjectId, ref: 'Sheet' }]
})

userSchema.plugin(require('mongoose-unique-validator'))

userSchema.virtual('passwordConfirmation').set(function setPasswordConfirmation(passwordConfirmation) {
  this._passwordConfirmation = passwordConfirmation
})

// userSchema.pre('validate', function checkPassword(next) {
//   if (this.isModified)
//     next()
// })

module.exports = mongoose.model('User', userSchema)