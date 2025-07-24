import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();

app.use(cors({ origin: [process.env.LOCAL_HOST] as string[] }));
app.use(express.json());

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(
  (err: { status: number; message: string }, req: Request, res: Response) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
  }
);

export default app;
