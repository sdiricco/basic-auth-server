import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export class AuthController {
  /**
   * Register a new user.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @return {Promise<Response>} The response object.
   */
  public static async register(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const result = await AuthService.loginUser(username, password);
    if (result.success) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const user = await AuthService.registerUser(username, password);
    return res.status(201).json({ message: 'User registered successfully', user });
  }

  
  /**
   * Authenticate a user.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @return {Promise<Response>} The response object.
   */
  public static async login(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

    const result = await AuthService.loginUser(username, password);
    if (!result.success) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    return res.status(200).json({ message: 'Login successful', user: result.user });
  }
}
