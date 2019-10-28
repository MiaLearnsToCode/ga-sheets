const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/ga-sheets'
const secret = process.env.SECRET || 'ga'

module.exports = { port, dbURI, secret }