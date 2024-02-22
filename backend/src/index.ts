import "dotenv/config";
import express from "express";
import cors from "cors";
import radioRouter from "./modules/radio/router.js";

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL }));

app.get("/", (req, res) => {
  res.send("API server is running");
});

app.use("/api/radio", radioRouter);

app.listen(process.env.PORT);
