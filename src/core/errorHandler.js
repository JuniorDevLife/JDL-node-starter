import {environment} from "../config.js";
import Logger from "./loggerHandler.js";

export const errorHandler = (err, req, res, next) => {
  if (environment === "development") {
    Logger.error(err.message, err.errorsList);
    return res.status(err.statusCode).send({
      success: 0,
      statusCode: err.statusCode,
      message: err.message,
      errorsList: err.errorsList,
      stack: err.stack,
    });
  }
  // if node env === production returns non descriptive error for opsec
  return res.status(500).send({
    success: 0,
    message: "Something went wrong, please try again later...",
  });
};