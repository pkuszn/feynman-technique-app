import { Request, Response } from "express";
import logger from '../utils/logger';
import { authenticateUserAsync } from "../service/user.service";

export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = await authenticateUserAsync(req.body);     
        return user;
    } 
    catch(e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
}