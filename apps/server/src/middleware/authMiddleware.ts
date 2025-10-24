// authMiddleware.ts
import { createClerkClient, verifyToken } from "@clerk/backend";
import type { Request, Response, NextFunction } from "express";
import { config } from "../config";

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Missing or invalid token" });
    }

    const token = authHeader.split("Bearer ")[1];
    const clerkClient = createClerkClient({
      secretKey: config.CLERK_SECRET_KEY,
    });
    try {
      const { sid, sub } = await verifyToken(token!, {
        jwtKey: config.CLERK_JWT_KEY,
      });

      const user = await clerkClient.users.getUser(sub);
      // Attach auth info to the request
      req.auth = { sessionId: sid, userId: sub, user };

      next();
    } catch (e) {
      console.log("clerk auth error:" + e);
      return res.status(401).json({ status: false, message: "Unauthorized" });
    }
  } catch (err) {
    console.error("Internal Server Error " + err);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
}
