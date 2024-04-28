import * as rx from "rxjs";
import RadioAPI from "./RadioAPI";
import { Song, SongOfTheDay } from "./types";

class RadioController {
  private readonly SONG_INTERVAL = 4;
  private readonly FETCH_NEXT_DELAY = 1;
  private api = new RadioAPI();
  private subscription?: rx.Subscription;

  getSongStream(station: string): rx.Observable<[Song, Song] | []> {
    this.subscription?.unsubscribe();
    return station ? this.updateSongStream(station) : rx.of([]);
  }

  private updateSongStream(station: string, counter = 0): rx.Observable<[Song, Song]> {
    return new rx.Observable((sub) => {
      if (counter >= 3) return;
      this.subscription = this.api
        .getCurrentSongs(station)
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
                  .pipe(rx.concatMap(() => this.updateSongStream(station, ++counter)));
              })
            );
          })
        )
        .subscribe(sub);
    });
  }

  getSongOfTheDay(): rx.Observable<SongOfTheDay> {
    return this.api.getSongOfTheDay();
  }
}

export default RadioController;
