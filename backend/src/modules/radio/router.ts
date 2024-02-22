import express from "express";
import RadioManager from "./RadioManager.js";
import RadioProvider from "./RadioProvider.js";

const router = express.Router();
const radio = new RadioManager(new RadioProvider());

router.get("/current", (req, res) => {
  radio.getCurrentSongs().subscribe({
    next: (v) => {
      console.log("Next:", v);
      res.json(v);
    },
  });
});

export default router;
