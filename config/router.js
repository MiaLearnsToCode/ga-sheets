const router = require('express').Router()
const users = require('../controllers/auth')
const sheets = require('../controllers/sheets')

router.route('/sheets')
  .post(sheets.create)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)



module.exports = router