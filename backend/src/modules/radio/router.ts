import express from "express";
import RadioController from "./RadioController.js";
import RadioProvider from "./RadioProvider.js";

const router = express.Router();
const radio = new RadioController(new RadioProvider());

router.get("/current", (req, res) => {
  const station = req.query.station as string;
  radio.getCurrentSongs(station).subscribe({
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
