import express from "express";
import cors from "cors";
import v1Router from "./Routes/v1/index";
import { User } from "@clerk/backend";
import { config } from "./config";
import healthRouter from "./Routes/health/index";
declare global {
  namespace Express {
    interface Request {
      auth?: {
        sessionId: string;
        userId: string;
        user: User;
      };
    }
  }
}

const app = express();
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      const allowedOrigins = [
        "http://localhost:3000",
        "http://localhost:4000",
        "https://gitfolio.in",
      ];

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      if (/^https:\/\/([a-z0-9-]+)\.gitfolio\.in$/.test(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

const port = config.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/health", healthRouter);
app.use("/api/v1", v1Router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
