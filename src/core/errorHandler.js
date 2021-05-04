import {environment} from "../config.js"
import Logger from './logger.js'

export const globalErrorHandler = (err, req, res, next) => {
  if (environment === 'development') {
    Logger.error(err, err.message);
    return res.status(err.statusCode).send({
      success: 0,
      message: err.message,
      stack: err.stack,
      statusCode: err.statusCode
    });
  }
  // if node env === production returns non descriptive error for opsec
  return res.status(500).send({
    success: 0,
    message: "Something went wrong, please try again later..."
  })
}