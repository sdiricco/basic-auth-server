import { Request, Response } from 'express';
import { InfoService } from '../services/infoService';

export class InfoController {
  public static async create(req: Request, res: Response): Promise<Response> {
    try {
      const info = await InfoService.createInfo(req.body);
      return res.status(201).json(info);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating info', error });
    }
  }

  public static async get(req: Request, res: Response): Promise<Response> {
    try {
      const info = await InfoService.getInfoById(req.params.id);
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
      const infos = await InfoService.getAllInfo();
      return res.status(200).json(infos);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching infos', error });
    }
  }

  public static async update(req: Request, res: Response): Promise<Response> {
    try {
      const info = await InfoService.updateInfo(req.params.id, req.body);
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
      const info = await InfoService.deleteInfo(req.params.id);
      if (!info) {
        return res.status(404).json({ message: 'Info not found' });
      }
      return res.status(200).json({ message: 'Info deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting info', error });
    }
  }
}
