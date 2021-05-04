import express from 'express'
import bodyParser from "body-parser";
import Logger from './core/logger.js'
import listEndpoints from 'express-list-endpoints'
import {corsHandler} from "./core/corsHandler.js";
import {NotFoundError} from "./core/apiErrors.js";
import {globalErrorHandler} from './core/globalErrors.js'
import routesV1 from './routes/v1/index.js';

// node process start error check
process.on('uncaughtException', (e) => {
  Logger.error(e);
});

const app = express()

// MIDDLEWARE
app.use(corsHandler)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// ROUTES
app.use('/v1', routesV1);
app.use((req, res, next) => {
  // handle routes not found
  next(new NotFoundError(`Requested URL ${req.path} not found!`))
})

// GLOBAL ERRORS
app.use(globalErrorHandler)

// extras
console.log(listEndpoints(app))

export default app