import Logger from '../../core/loggerHandler.js'
import {Sequelize} from "sequelize-cockroachdb"
import {ccDB} from "../../config.js"
import {StudentModel} from './models/StudentModel.js'

if (!Sequelize.supportsCockroachDB) {
  throw new Error("CockroachDB dialect for Sequelize not installed");
}

// Connect to CockroachDB through Sequelize.
export const sequelize = new Sequelize({
  dialect: "postgres",
  username: ccDB.ccUser,
  password: ccDB.ccPassword,
  host: ccDB.ccHost,
  port: 26257,
  database: ccDB.ccDatabase,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
      // For secure connection:
      /*ca: fs.readFileSync('certs/ca.crt')
                .toString()*/
    },
  },
  logging: false,
});

export const models = {
  Student: StudentModel(sequelize),
  sequelize:sequelize
}

export const connectToCockroachDB = async () => {
  try {
    await sequelize.authenticate()
    //await sequelize.sync({force: true})
    Logger.info(`CockroachDB ☁ Cloud | ${ccDB.ccDatabase} | User: ${ccDB.ccUser} | Connection Established ✅`)
  } catch (e) {
    Logger.error(e)
  }
}