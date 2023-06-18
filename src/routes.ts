import {Express, Request, Response} from "express";
import { createUserHandler } from "./controller/user.controller";

function routes(app: Express) {
    app.get('/health-check', (req: Request, res: Response) =>  res.sendStatus(200));
    app.post('api/user', createUserHandler);
}

export default routes;