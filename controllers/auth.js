const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')


// REGISTER CONTROLLER FUNCTION
function register(req, res) {
  User
    .create(req.body)
    .then(user => {
      res.status(201).json({ message: `Waheyyy! You've successfully registered ${user.username}` })
    })
    .catch(err => console.log(err))
}

// LOGIN CONTROLLER FUNCTION
function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        throw new Error('Unauthorised 1')
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '12h' })
      res.status(200).json({ message: `You're in ${user.username}, welcome back.`, token: token })
    })
    .catch(err => console.log(err))
}

module.exports = { register, login }