import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  auth: {
    username: process.env.BASIC_AUTH_USERNAME || '',
    password: process.env.BASIC_AUTH_PASSWORD || '',
    jwt: {
      secretKey: process.env.JWT_SECRET_KEY || ''
    }
  },
  db: {
    uri: process.env.MONGO_URI
  }
};