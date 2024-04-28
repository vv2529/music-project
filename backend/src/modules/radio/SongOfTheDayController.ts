import * as rx from "rxjs";
import { Song, SongOfTheDay } from "./types.js";
import { random } from "../../utils.js";
import RadioProvider from "./RadioProvider.js";

class SongOfTheDayController {
  constructor(private readonly provider: RadioProvider) {}

  getSongOfTheDay(): rx.Observable<SongOfTheDay> {
    return rx.forkJoin([this.provider.getAllSongs()]).pipe(
      rx.mergeMap(([songs]) => {
        const date = new Date();
        const [y, m, d] = [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate()];
        const songId$ = this.provider.getSongOfTheDay([y, m, d]);
        return songId$.pipe(
          rx.mergeMap((id) => {
            if (id === undefined) {
              id = this.getRandomSongId(songs);
              this.provider.setSongOfTheDay([y, m, d], id);
            }
            const name = songs.find((s) => s.id === id)?.name ?? "";
            return rx.of({ id, name });
          })
        );
      })
    );
  }

  private getRandomSongId(songs: Song[]): number {
    return songs[random(songs.length)].id;
  }
}

export default SongOfTheDayController;
