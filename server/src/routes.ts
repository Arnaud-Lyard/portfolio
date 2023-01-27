const express = require("express");
import { Request, Response } from "express";

const router = express.Router();
export const routes = [
  router.get("/", (req: Request, res: Response) => res.send("Hello World!")),
  router.get("/login", (req: Request, res: Response) =>
    res.send("Hello login!")
  ),
];
