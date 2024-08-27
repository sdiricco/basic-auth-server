import { Info, IInfo } from '../models/Info';

export class InfoService {
  public static async createInfo(data: Partial<IInfo>): Promise<IInfo> {
    const info = new Info(data);
    return await info.save();
  }

  public static async getInfoById(id: string): Promise<IInfo | null> {
    return await Info.findById(id).populate('userId');
  }

  public static async getAllInfo(): Promise<IInfo[]> {
    return await Info.find().populate('userId');
  }

  public static async updateInfo(id: string, data: Partial<IInfo>): Promise<IInfo | null> {
    return await Info.findByIdAndUpdate(id, data, { new: true }).populate('userId');
  }

  public static async deleteInfo(id: string): Promise<IInfo | null> {
    return await Info.findByIdAndDelete(id);
  }
}
