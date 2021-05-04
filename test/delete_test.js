import assert from "assert";
import User from '../src/database/mongo/models/UserModel.js'

describe('Deleting a user', () => {
  let user

  beforeEach(async () => {
    user = new User({name: "Joe"})
    await user.save()
  })

  it('model instance remove', async () => {
    // uses the model instance user created above
    await user.remove()
    const resp = await User.findOne({name: 'Joe'})
    await assert(resp === null)
  })

  it('class method deleteMany', async () => {
    // uses User
    // Removes a bunch of records with some given criteria
    await User.deleteMany({name: "Joe"})
    const resp = await User.findOne({name: 'Joe'})
    await assert(resp === null)
  })

  it('class method deleteOne', () => {
    // uses User
  })

  it('class method findByIdAndRemove', async () => {

  })

})