import { Info, IInfo } from '../models/Info';

export class InfoService {
  public static async createInfo(data: Partial<IInfo>): Promise<IInfo> {
    const info = new Info(data);
    return await info.save();
  }

  public static async getInfoByIdAndUser(infoId: string, userId: string): Promise<IInfo | null> {
    return await Info.findOne({ _id: infoId, userId });
  }

  public static async getAllInfoByUser(userId: string): Promise<IInfo[]> {
    return await Info.find({ userId });
  }

  public static async updateInfoByUser(infoId: string, userId: string, data: Partial<IInfo>): Promise<IInfo | null> {
    return await Info.findOneAndUpdate({ _id: infoId, userId }, data, { new: true });
  }

  public static async deleteInfoByUser(infoId: string, userId: string): Promise<IInfo | null> {
    return await Info.findOneAndDelete({ _id: infoId, userId });
  }
}
