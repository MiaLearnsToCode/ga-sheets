const mongoose = require('mongoose') 
const { dbURI } = require('../config/environment')
const Sheet = require('../models/Sheet')
const User = require('../models/User')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err) // if connect fails, will send an error to the console and exit
    db.dropDatabase() // on a good connect, first drop all data in the database
      .then(() => {
        return User.create([
          {
            username: 'tal',
            email: 'tal@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'mia',
            email: 'mia@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          }
        ])
      })
      .then(users => {
        console.log(`${users.length} users created`)
        return Sheet.create([ // creating an array of new animals
          {
            name: 'First', 
            token: 'firstsheettest',
            users: [users[0], users[1]]
          },
          {
            name: 'Second',
            token: 'secondsheettest',
            users: [users[0], users[1]]
          }
        ]
        )
      })
      .then(sheets => console.log(`${sheets.length} sheets created`)) // if create goes well, log a sucess message
      .catch(err => console.log(err)) // if not log the error
      .finally(() => mongoose.connection.close()) // no matter what close the connction at the end, pass or fail
  }
)