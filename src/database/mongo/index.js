import mongoose from 'mongoose';
import Logger from '../../core/loggerHandler.js';
import {mongoURI, mongoDB} from '../../config.js';

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: true,
  poolSize: 10, // Maintain up to 10 socket connections
  //If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

const mongoURL = `mongodb+srv://${mongoDB.mdbUser}:${mongoDB.mdbPassword}@${mongoDB.mdbHost}/${mongoDB.mdbDatabase}?retryWrites=true&w=majority`

// Create the database connection
// Exported to server.js file and is called into action when server starts
export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, options)
    Logger.info(`Mongo ☁ Cloud Atlas | ${mongoDB.mdbHost} | User: ${mongoDB.mdbUser} | Connection Established ✅`)

    // When successfully connected
    mongoose.connection.on('connected', () => {
      Logger.info(`Mongoose default open to ${mongoURL}`);
    });

    // If the connection throws an error
    mongoose.connection.on('error', (err) => {
      Logger.error('Mongoose default connection error: ' + err);
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', () => {
      Logger.info('Mongoose default connection disconnected');
    });

    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        Logger.info('Mongoose default connection disconnected through app termination');
        process.exit(0);
      });
    });

  } catch (e) {
    Logger.info('Mongoose connection error, if this is a fresh project maybe you forgot to set the env variables');
    Logger.error(e);
  }
}