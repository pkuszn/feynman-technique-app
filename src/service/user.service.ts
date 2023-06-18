import { userSchema} from "../models/user.model";

export async function authenticateUserAsync(input: typeof userSchema) {
    try{
        return await userSchema.parseAsync(input);
    }
    catch(e: any) {
        throw new Error(e);
    }
}