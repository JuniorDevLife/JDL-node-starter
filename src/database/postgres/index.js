import pg from 'pg'
import Logger from '../../core/loggerHandler.js';
import {Sequelize} from 'sequelize'
import {pgDB} from "../../config.js";

const sequelize = new Sequelize(
  pgDB.pgDatabase,
  pgDB.pgUser,
  pgDB.pgPassword,
  { port: pgDB.pgPort, host: pgDB.pgHost, dialect: "postgres"}
)

export const connectToPostgres = async () => {
  try {
      await sequelize.authenticate()
      Logger.info("Postgres connection established")
  } catch (e) {
      Logger.error(e)
  }
}


// export const pool = new pg.Pool()
//
// export const query = async function (queryText, params) {
//   const start = Date.now()
//   const result = await pool.query(queryText, params)
//   const duration = Date.now() - start
//   console.log(`Query executed in ${duration} ms`)
//   return result
// }