import express from 'express'
import bodyParser from "body-parser";
import listEndpoints from 'express-list-endpoints'
import cors from 'cors'

import userRoutes from "./components/users/userRoutes.js";

const app = express()
const port = process.env.PORT || 5000

// cors
app.use(cors())
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.use('/users', userRoutes)

app.use('/', (req, res) => {
  res.send({message: "application is working"})
})


console.log(listEndpoints(app))
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})