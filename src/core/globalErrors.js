import {environment} from "../config.js"
import Logger from './logger.js'

export const globalErrorHandler = (err, req, res, next) => {
  if (environment === 'development') {
    Logger.error(err);
    return res.status(err.statusCode).send({
      success: false,
      message: err.message,
      stack: err.stack
    });
  }
  // if node env === production returns non descriptive error for opsec
  return res.status(500).send({
    success: false,
    message: "Something went wrong, please try again later..."
  })
}