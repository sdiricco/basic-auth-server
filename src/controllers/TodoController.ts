import { Request, Response } from 'express';
import { TodoService } from '../services/todoService';

export class TodoController {
  /**
   * Creates a new Todo for a given user.
   *
   * @param {Request} req - The request object containing the user ID and todo data.
   * @param {Response} res - The response object.
   * @return {Promise<Response>} The response object containing the created todo.
   * @throws {Error} If there is an error creating the todo.
   */
  public static async create(req: Request, res: Response): Promise<Response> {
    try {
      const userId = req.params.userId;
      const todo = await TodoService.createTodo({ ...req.body, userId });
      return res.status(201).json(todo);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating todo', error });
    }
  }

  /**
   * Get a todo by user.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @return {Promise<Response>} The response object.
   */
  public static async get(req: Request, res: Response): Promise<Response> {
    try {
      const { userId, todoId } = req.params;
      const todo = await TodoService.getTodoByIdAndUser(todoId, userId);
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      return res.status(200).json(todo);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching todo', error });
    }
  }

  /**
   * Get all todos by user.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @return {Promise<Response>} The response object.
   */
  public static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const userId = req.params.userId;
      const todos = await TodoService.getAllTodoByUser(userId);
      return res.status(200).json(todos);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching todos', error });
    }
  }

  /**
   * Update a todo by user.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @return {Promise<Response>} The response object.
   */
  public static async update(req: Request, res: Response): Promise<Response> {
    try {
      const { userId, todoId } = req.params;
      const todo = await TodoService.updateTodoByUser(todoId, userId, req.body);
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      return res.status(200).json(todo);
    } catch (error) {
      return res.status(500).json({ message: 'Error updating todo', error });
    }
  }

  /**
   * Delete a todo by user.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @return {Promise<Response>} The response object.
   */
  public static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { userId, todoId } = req.params;
      const todo = await TodoService.deleteTodoByUser(todoId, userId);
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      return res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting todo', error });
    }
  }
}
