import express, { Express, Request, Response } from "express";
import dotenv from "dotenv"
import logger from "./utils/logger";
import routes from "./routes";

dotenv.config()
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("hello world")
});

const port: string | undefined = process.env.PORT;
app.listen(port, () => {
    logger.info(`App is running at http://localhost:${port}`);
    routes(app);
})