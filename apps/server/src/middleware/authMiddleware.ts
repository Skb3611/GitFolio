// authMiddleware.ts
import { createClerkClient, verifyToken } from "@clerk/backend";
import type { Request, Response, NextFunction } from "express";



export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Missing or invalid token" });
    }

    const token = authHeader.split("Bearer ")[1];
    const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

    const {sid,sub} = await verifyToken(token!,{
        jwtKey: process.env.CLERK_JWT_KEY,
    });
    
    const user = await clerkClient.users.getUser(sub);
    // Attach auth info to the request
    req.auth = { sessionId:sid, userId:sub, user };

    next();
  } catch (err) {
    console.error("Clerk auth error:", err);
    res.status(401).json({ message: "Unauthorized" });
  }
}
