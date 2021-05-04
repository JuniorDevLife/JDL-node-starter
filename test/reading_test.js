import assert from 'assert'
import User from '../src/database/mongo/models/UserModel.js'

describe("Reading users out of the database", () => {
  let user

  beforeEach(async () => {
    user = new User({name: 'Joe'})
    await user.save()
  })

  it("finds all users with a name of joe", async() => {
    const resp = await User.find({name: 'Joe'})
    await assert(resp[0]._id.toString() === user._id.toString())
  });

  it("find a user with a particular id", async() => {
    const resp = await User.findOne({_id: user._id})
    await assert(resp.name === 'Joe')
  })

});