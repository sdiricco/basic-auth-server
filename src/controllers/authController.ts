import { Request, Response } from 'express';

export class AuthController {
  public static getProtectedResource(req: Request, res: Response) {
    res.send('You have access to this protected resource.');
  }
}
