// Mapper for environment variables
export const environment = process.env.NODE_ENV;
export const port = process.env.PORT;

// POSTGRES
export const pgDB = {
  pgPort: process.env.PGPORT,
  pgHost: process.env.PGHOST,
  pgUser: process.env.PGUSER,
  pgDatabase: process.env.PGDATABASE,
  pgPassword: process.env.PGPASSWORD
}

// MONGO
export const mongoURI = process.env.MONGO_URI

// CORS
export const corsUrlProduction = process.env.CORS_URL_PROD || "";
export const corsUrlDevelopment = process.env.CORS_URL_DEV || "";

// AUTH
// export const tokenInfo = {
//   accessTokenValidityDays: parseInt(process.env.ACCESS_TOKEN_VALIDITY_SEC || '0'),
//   refreshTokenValidityDays: parseInt(process.env.REFRESH_TOKEN_VALIDITY_SEC || '0'),
//   issuer: process.env.TOKEN_ISSUER || '',
//   audience: process.env.TOKEN_AUDIENCE || '',
// };


// DIRECTORIES
export const logDirectory = process.env.LOG_DIR;