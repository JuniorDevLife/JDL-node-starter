import express from 'express'
import userRoutes from "./profile/userRoutes.js";
import todoRoutes from './todos/todoRoutes.js'

const router = express.Router()

/*-------------------------------------------------------------------------*/
// Below all APIs are public APIs protected by api-key
// router.use('/', apikey);
/*-------------------------------------------------------------------------*/

router.use('/profiles', userRoutes)
router.use('/todos', todoRoutes)


export default router