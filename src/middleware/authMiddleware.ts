import { Request, Response, NextFunction } from 'express';
import basicAuth from 'basic-auth';
import { config } from '../config';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const user = basicAuth(req);

  console.log(user)

  if (!user || user.name !== config.auth.username || user.pass !== config.auth.password) {
    res.set('WWW-Authenticate', 'Basic realm="example"');
    return res.status(401).send('Access denied');
  }

  next();
};
