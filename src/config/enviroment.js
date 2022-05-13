require('dotenv').config()

export const env = {
    MONGODB_URI: process.env.MONGOBD_URI,
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    JWT_ACCESS_KEY: process.env.JWT_ACCESS_KEY,
    JWT_REFRESH_KEY: process.env.JWT_REFRESH_KEY,
}