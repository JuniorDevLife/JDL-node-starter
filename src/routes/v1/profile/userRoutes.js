import express from 'express'
import {asyncHandler} from "../../../core/asyncHandler.js";
import {BadRequestError, NotFoundError} from "../../../core/apiErrors.js";

const router = express.Router()

router.get('/', asyncHandler(async (req, res, next) => {
  var users = {}
  if (!users) {
    return next(new NotFoundError("Users not found"))
  }
  res.status(200).send(users)
}))


export default router