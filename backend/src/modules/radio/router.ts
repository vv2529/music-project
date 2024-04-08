import express from "express";
import RadioManager from "./RadioManager.js";
import RadioProvider from "./RadioProvider.js";

const router = express.Router();
const radio = new RadioManager(new RadioProvider());

router.get("/current", (req, res) => {
  radio.getCurrentSongs().subscribe({
    next: (v) => {
      console.log("Current:", v);
      res.json(v);
    },
  });
});

router.get("/song-of-the-day", (req, res) => {
  radio.getSongOfTheDay().subscribe({
    next: (v) => {
      console.log("Song of the day:", v);
      res.json(v);
    },
  });
});

export default router;
