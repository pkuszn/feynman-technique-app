import {Request, Response, NextFunction} from "express";
import { AnyZodObject } from "zod";

const validate = (schema: AnyZodObject) => (req: Request, rest: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        })
    }
    catch(e: any) {
        return rest.status(400).send(e.error);
    }
}

export default validate;