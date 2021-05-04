import cors from 'cors'
import {corsUrlDevelopment, corsUrlProduction} from '../config.js'

export const corsHandler = (req, res, next) => {

  const whiteListedDomains = [
    corsUrlDevelopment,
    corsUrlProduction
  ]

  const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (whiteListedDomains.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true, optionsSuccessStatus: 200} // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
  }

  return cors(corsOptionsDelegate)
}