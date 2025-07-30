import express from "express";
import cors from "cors";
import v1Router from "./Routes/v1/index";
import { User } from "@clerk/backend";
import { config } from "./config";
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
    origin: ["http://localhost:3000","http://localhost:4000", "https://gitfolio-dev.vercel.app","https://gitfolio-template.vercel.app"],
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

app.use("/api/v1", v1Router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
