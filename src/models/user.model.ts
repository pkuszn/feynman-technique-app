import { z } from "zod";

const userSchema = z.object({
    name: z.string(),
    role: z.number(),
    password: z.string(),
    created_date: z.string().datetime()
});

//TODO: bcrypt before parsing

export {
    userSchema
}