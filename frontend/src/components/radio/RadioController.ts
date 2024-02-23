import * as rx from "rxjs";
import RadioAPI from "./RadioAPI";
import { Song } from "./types";

class RadioController {
  private readonly SONG_INTERVAL = 4;
  private readonly FETCH_NEXT_DELAY = 1;
  private api = new RadioAPI();

  getSongStream(): rx.Observable<[Song, Song]> {
    return this.updateSongStream();
  }

  updateSongStream(counter = 0): rx.Observable<[Song, Song]> {
    return new rx.Observable((sub) => {
      if (counter >= 5) return undefined;
      this.api
        .getCurrentSongs()
        .pipe(
          rx.concatMap((songs) => {
            if (counter === 0) sub.next(songs.slice(0, 2) as [Song, Song]);
            const left = songs[0].duration + this.SONG_INTERVAL - (songs[0].elapsed ?? 0);
            delete songs[0].elapsed;

            return rx.timer(left * 1000).pipe(
              rx.concatMap(() => {
                console.log("Timer:", left * 1000, counter);
                sub.next(songs.slice(1, 3) as [Song, Song]);
                return rx
                  .timer(this.FETCH_NEXT_DELAY * 1000)
                  .pipe(rx.concatMap(() => this.updateSongStream(++counter)));
              })
            );
          })
        )
        .subscribe(sub);
    });
  }
}

export default RadioController;
