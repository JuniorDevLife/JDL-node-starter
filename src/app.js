import express from 'express'
import bodyParser from "body-parser";
import Logger from './core/logger/logger.js'
import listEndpoints from 'express-list-endpoints'
import cors from 'cors'
import { port } from './config.js';
import routesV1 from './routes/v1/index.js';

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
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/v1', routesV1);

// catch 404 and forward to error handler
app.use((req, res, next) => next(new Error()))

console.log(listEndpoints(app))

export default app