import express from 'express'
const router = express.Router()
import User from './userDAL.js'


router.get('/:id', async (req, res, next) => {
  try {

    const users = User.find(req.params.id)

    // handle not found
    if (!users) {
      const error = new Error()
      error.httpStatusCode = 404
      return next(error)

    }

    res.status(200).send(users)

  } catch (e) {
    console.error(e)
    next(e)
  }
})


export default router