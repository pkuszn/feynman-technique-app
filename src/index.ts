import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 7000;

app.get("/", (req: Request, res: Response) => {
    res.send("hello world")
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})