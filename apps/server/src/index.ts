import  express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import v1Router from "./Routes/v1/index";
dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT ||3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1",v1Router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
