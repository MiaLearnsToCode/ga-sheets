const router = require('express').Router()
const users = require('../controllers/auth')
const sheets = require('../controllers/sheets')
const cells = require('../controllers/cells')
const secureRoute = require('../lib/secureRoute')

router.route('/sheets/:sheetId/:cellId/comments/:commentId')
  .delete(secureRoute, cells.resolveComment)

router.route('/sheets/:sheetId/:cellId/comments')
  .post(secureRoute, cells.createComment)

router.route('/sheets/:sheetId/:cellId')
  .put(secureRoute, cells.update)

router.route('/sheets/:sheetId')
  .get(secureRoute, sheets.show)
  .delete(secureRoute, sheets.deleteRoute)

router.route('/sheets')
  .post(secureRoute, sheets.create)
  .get(secureRoute, sheets.index)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

module.exports = router