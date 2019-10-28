const mongoose = require('mongoose') 
const { dbURI } = require('../config/environment')
const Sheet = require('../models/Sheet')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err) // if connect fails, will send an error to the console and exit
    db.dropDatabase() // on a good connect, first drop all data in the database
      .then(() => { 
        return Sheet.create([ // creating an array of new animals
          {
            name: 'First', 
            token: 'firstsheettest'
          },
          {
            name: 'Second',
            token: 'secondsheettest'
          }
        ]
        )
      })
      .then(sheets => console.log(`${sheets.length} created`)) // if create goes well, log a sucess message
      .catch(err => console.log(err)) // if not log the error
      .finally(() => mongoose.connection.close()) // no matter what close the connction at the end, pass or fail
  }
)