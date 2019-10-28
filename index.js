const express = require('express')
const app = express()
const { port, dbURI } = require('./config/environment')

const mongoose = require('mongoose')
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Mongoose connected'))

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.listen(port, () => console.log(`App is listening on ${port} port`))