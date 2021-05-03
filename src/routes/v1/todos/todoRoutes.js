import express from "express";
const router = express.Router()


router.get('/', (req, res, next) => {
  res.send({message: "get-all-todos route hit"})
})


export default router