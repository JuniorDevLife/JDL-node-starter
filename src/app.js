import express from 'express'
import bodyParser from "body-parser";
import Logger from './core/logger.js'
import cors from 'cors'
import listEndpoints from 'express-list-endpoints'
import routesV1 from './routes/v1/index.js';
import {environment} from "./config.js";

// TODO question? what is this?
process.on('uncaughtException', (e) => {
  Logger.error(e);
});

const app = express()

// MIDDLEWARE
// cors
app.use(cors())
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use('/v1', routesV1);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error()
  error.message = "404 error not found"
  next(error)
})

app.use((err, req, res, next,) => {
  if (environment === 'development') {
    Logger.error(err);
    return res.status(err.statusCode).send(err.message);
  }
  return res.status(500).send(new Error().message = "Something went seriously wrong :( we are really sorry")
})
;

console.log(listEndpoints(app))

export default app