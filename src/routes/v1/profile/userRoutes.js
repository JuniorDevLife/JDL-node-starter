import express from 'express'
const router = express.Router()
import UserModel from '../../../database/models/UserModel.js'


router.get('/', async (req, res, next) => {
  try {

    //const users = UserModel.find({eq: "name"})

    var users = {
      name: "sean"
    }

    // handle not found
    if (!users) {
      return next(new Error().message = "user not found")
    }

    res.status(200).send(users)
  } catch (e) {
    console.error(e)
    next(e)
  }
})


export default router