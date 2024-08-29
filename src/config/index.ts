import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  auth: {
    jwt: {
      secretKey: process.env.JWT_SECRET_KEY || ''
    }
  },
  db: {
    uri: process.env.MONGO_URI
  }
};