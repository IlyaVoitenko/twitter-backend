import express, { Request, Response, NextFunction } from "express";
require("dotenv").config();

const app = express();

app.use(
  (
    err: { status: number; message: string },
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
  }
);

export default app;
