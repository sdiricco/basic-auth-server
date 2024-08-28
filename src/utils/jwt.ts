import {config} from "../config"
const jwt = require('jsonwebtoken');

export const generateToken = (user:any) => {
    return jwt.sign({ username: user.username }, config.auth.jwt.secretKey, { expiresIn: '1h' });
};