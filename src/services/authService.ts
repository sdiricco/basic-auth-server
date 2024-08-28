import bcrypt from 'bcryptjs';
import { User, IUser } from '../models/User';
import {config} from "../config"
import jwt from 'jsonwebtoken';




type ILoginResponseSuccess = {
  success: true,
  user: IUser
}

type ILoginResponseFail = {
  success: false
}

type ILoginResponse = ILoginResponseSuccess | ILoginResponseFail

export class AuthService {
  /**
   * Register a new user with the given username and password.
   *
   * @param {string} username - The username of the user to register.
   * @param {string} password - The password of the user to register.
   * @return {Promise<IUser>} A promise that resolves to the registered user.
   */
  public static async registerUser(username: string, password: string): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    return await user.save();
  }

  public static async checkUserExists(username: string): Promise<boolean> {
    const user = await User.findOne({ username });
    return !!user
  }

  public static generarateToken(user: IUser): string {
    return jwt.sign({ username: user.username, id: user._id }, config.auth.jwt.secretKey, { expiresIn: '1h' });
  }

  

  /**
   * Authenticates a user with the given username and password.
   *
   * @param {string} username - The username of the user to authenticate.
   * @param {string} password - The password of the user to authenticate.
   * @return {Promise<{success: boolean, user?: IUser}>} A promise that resolves to an object with a success flag and, if successful, the authenticated user.
   */
  public static async loginUser(username: string, password: string): Promise<ILoginResponse>  {
    const result: ILoginResponse = {
      success: false
    }
    const user = await User.findOne({ username });
    if (!user) {
      return result
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return result
    }

    return {
      success: true,
      user
    }
  }
}