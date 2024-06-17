import { Request, Response } from "express";

export function welcome(req: Request, res: Response): Response {
  console.log("Welcome to recording application");
  return res.json({ message: "Welcome to recording application!" });
}

