import express from "express";
import "./worker";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Worker is running");
});
app.listen(3000, () => {
  console.log("Worker is running on port 3000");
});
