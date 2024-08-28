import { Todo, ITodo } from '../models/Todo';

export class TodoService {
  public static async createTodo(data: Partial<ITodo>): Promise<ITodo> {
    const info = new Todo(data);
    return await info.save();
  }

  public static async getTodoByIdAndUser(todoId: string, userId: string): Promise<ITodo | null> {
    return await Todo.findOne({ _id: todoId, userId });
  }

  public static async getAllTodoByUser(userId: string): Promise<ITodo[]> {
    return await Todo.find({ userId });
  }

  public static async updateTodoByUser(todoId: string, userId: string, data: Partial<ITodo>): Promise<ITodo | null> {
    return await Todo.findOneAndUpdate({ _id: todoId, userId }, data, { new: true });
  }

  public static async deleteTodoByUser(todoId: string, userId: string): Promise<ITodo | null> {
    return await Todo.findOneAndDelete({ _id: todoId, userId });
  }
}
