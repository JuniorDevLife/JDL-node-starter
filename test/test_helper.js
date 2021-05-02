import mongoose from 'mongoose'

// TEST database initializer file where we connect to the test mongo database
// using hooks we drop the database to reset the collections on each run of the test suite

// IMPORTANT INSTALL MOCHA GLOBALLY: npm i -g mocha

const run = (async () => {
  try {
    before(() => {
      // test database connection details make sure to update and insert the correct mongoDB details
      mongoose.connect("mongodb+srv://SKopsap:12345678910@users.5wnqo.mongodb.net/users", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
    })
    beforeEach(async () => {
      // update which database to drop      ''' here
      await mongoose.connection.collections.users.drop(() => {
      })
    })
  } catch (e) {
    console.error(e)
  }

})()