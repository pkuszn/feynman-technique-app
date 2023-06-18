import {object, z} from "zod";

export const createUserSchema = object({
    name: z.string(),
    role: z.number(),
    password: z.string(),
    created_date: z.string().datetime()
});

