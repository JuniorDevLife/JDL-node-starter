import express from 'express'
import {asyncHandler} from "../../../core/asyncHandler.js";
import {BadRequestError, NotFoundError} from "../../../core/apiErrors.js";
import {query} from "../../../database/postgres/index.js";

const router = express.Router()

router.get('/', asyncHandler(async (req, res, next) => {

  const users = await query('SELECT * FROM public.students')

  if (!users) next(new NotFoundError("Users not found"))

  res.status(200).send({rows: {users}})
}))


export default router