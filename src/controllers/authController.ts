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

    // Validate the request body
    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    // Check if the user already exists
    const userAlreadyExists = await AuthService.checkUserExists(username);
    if (userAlreadyExists) {
      return res.status(400).json({ success: false, message: 'Username already exists' });
    }

    // Register the user
    await AuthService.registerUser(username, password);
    return res.status(201).json({ success: true, message: 'User registered successfully'});
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

    // Validate the request body
    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    // Authenticate the user
    const result = await AuthService.loginUser(username, password);

    // Check if the authentication was successful
    if (!result.success) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = AuthService.generarateToken(result.user);

    // Return the token
    return res.status(200).json({ success: true, message: 'Login successful', token });
  }
}
