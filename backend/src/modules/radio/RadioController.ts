import * as rx from "rxjs";
import { Song, SongOfTheDay } from "./types.js";
import RadioProvider from "./RadioProvider.js";
import PlaylistController from "./PlaylistController.js";
import SongOfTheDayController from "./SongOfTheDayController.js";

class RadioController {
  private readonly playlistController = new PlaylistController(this.provider);
  private readonly songOfTheDayController = new SongOfTheDayController(this.provider);

  constructor(private readonly provider: RadioProvider) {}

  getCurrentSongs(): rx.Observable<[Song, Song, Song]> {
    return this.playlistController.getCurrentSongs();
  }

  getSongOfTheDay(): rx.Observable<SongOfTheDay> {
    return this.songOfTheDayController.getSongOfTheDay();
  }
}

export default RadioController;
