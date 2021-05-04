import {port} from "./config.js";
import Logger from "./core/logger.js";
import app from './app.js'

app.listen(port, () => {
  Logger.info(`server running on port : ${port}`)
}).on('error', (e) => Logger.error(e))