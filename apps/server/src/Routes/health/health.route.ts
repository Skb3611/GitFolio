import { Router, Request, Response } from "express";
import { config } from "../../config";
import prisma from "@workspace/db";
const router: Router = Router();

router.get("/server", (req: Request, res: Response) => {
  res.status(200).json({ status: true, message: "Server Up" });
});

router.get("/db", async (req: Request, res: Response) => {
  if (!req.query.secret || req.query.secret != config.DB_API_SECRET) {
    res.status(403).json({ status: false, message: "Forbidden" });
    return;
  } else {
    try {
      await prisma.$queryRaw`SELECT 1`;
      res.status(200).json({ status: true, message: "DB Alive" });
    } catch (err) {
      res.status(500).json({ status: false, message: "DB Down" });
    }
  }
});

export default router;
