import assert from 'assert'
import User from '../src/components/users/userDAL.js'

describe('Creating records', () => {
  it('saves a user', async () => {
    const user = new User({name: 'Joe'})
    await user.save()
    await assert(!user.isNew)
  })
});