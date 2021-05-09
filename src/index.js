import {port} from "./config.js";
import Logger from "./core/loggerHandler.js";
import app from './app.js'
import {connectToMongoDB} from "./database/mongo/index.js"

app.listen(port, async() => {
  Logger.info(`Server running on port : ${port}`)
  await connectToMongoDB()
}).on('error', (e) => Logger.error(e))