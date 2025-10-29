import express from "express";
import cors from "cors";
import v1Router from "./Routes/v1/index";
import { User } from "@clerk/backend";
import { config } from "./config";
import healthRouter from "./Routes/health/index";
import "./Services/email.service"
import "./Services/UserSync.service"
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
const allowedOriginsRegex = config.NODE_ENV === "dev"
  ? /^http:\/\/([a-z0-9-]+)\.gitfolio\.test(:\d+)?$/
  : /^https:\/\/([a-z0-9-]+)\.gitfolio\.in$/;

const app = express();
app.set("trust proxy", true);
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      const allowedOrigins = [
        "http://localhost:3000",
        "http://localhost:4000",
        "https://gitfolio.in",
        "https://www.gitfolio.in",
        "https://portfolio.gitfolio.in/*",
        "https://gitfolio-template.vercel.app/*",
      ];

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin) || allowedOriginsRegex.test(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS :" + origin ));
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
