import {port} from "./config.js";
import Logger from "./core/logger.js";
import app from './app.js'
import {connectToMongoDB} from "./database/mongo/index.js"
import {connectToPostgres} from "./database/postgres/index.js";
import {connectToCockroachDB} from "./database/cockroachDB/index.js";

app.listen(port, async() => {
  Logger.info(`Server running on port : ${port}`)
  await connectToMongoDB()
  await connectToPostgres()
  await connectToCockroachDB()
}).on('error', (e) => Logger.error(e))