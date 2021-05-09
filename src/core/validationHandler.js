import Logger from "./loggerHandler.js";
import { BadRequestError } from "./apiErrors.js";
import { validationResult } from "express-validator";

export const validationHandler = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new BadRequestError(
      "Bad request error, validation failure",
      errors.errors
    );
  }
};