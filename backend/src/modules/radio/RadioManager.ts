import * as rx from "rxjs";
import { Song, SongOfTheDay } from "./types.js";
import RadioProvider from "./RadioProvider.js";
import PlaylistManager from "./PlaylistManager.js";
import SongOfTheDayManager from "./SongOfTheDayManager.js";

class RadioManager {
  private readonly playlistManager = new PlaylistManager(this.provider);
  private readonly songOfTheDayManager = new SongOfTheDayManager(this.provider);

  constructor(private readonly provider: RadioProvider) {}

  getCurrentSongs(): rx.Observable<[Song, Song, Song]> {
    return this.playlistManager.getCurrentSongs();
  }

  getSongOfTheDay(): rx.Observable<SongOfTheDay> {
    return this.songOfTheDayManager.getSongOfTheDay();
  }
}

export default RadioManager;
