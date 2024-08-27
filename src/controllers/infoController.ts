import { Request, Response } from 'express';
import { InfoService } from '../services/infoService';

export class InfoController {
  public static async create(req: Request, res: Response): Promise<Response> {
    try {
      const userId = req.params.userId;
      const info = await InfoService.createInfo({ ...req.body, userId });
      return res.status(201).json(info);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating info', error });
    }
  }

  public static async get(req: Request, res: Response): Promise<Response> {
    try {
      const { userId, infoId } = req.params;
      const info = await InfoService.getInfoByIdAndUser(infoId, userId);
      if (!info) {
        return res.status(404).json({ message: 'Info not found' });
      }
      return res.status(200).json(info);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching info', error });
    }
  }

  public static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const userId = req.params.userId;
      const infos = await InfoService.getAllInfoByUser(userId);
      return res.status(200).json(infos);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching infos', error });
    }
  }

  public static async update(req: Request, res: Response): Promise<Response> {
    try {
      const { userId, infoId } = req.params;
      const info = await InfoService.updateInfoByUser(infoId, userId, req.body);
      if (!info) {
        return res.status(404).json({ message: 'Info not found' });
      }
      return res.status(200).json(info);
    } catch (error) {
      return res.status(500).json({ message: 'Error updating info', error });
    }
  }

  public static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { userId, infoId } = req.params;
      const info = await InfoService.deleteInfoByUser(infoId, userId);
      if (!info) {
        return res.status(404).json({ message: 'Info not found' });
      }
      return res.status(200).json({ message: 'Info deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting info', error });
    }
  }
}
