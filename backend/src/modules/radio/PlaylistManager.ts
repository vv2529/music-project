import * as rx from "rxjs";
import { InternalState, Song, State } from "./types.js";
import { getCurrentTimestampInSeconds, random, round, shuffleArray } from "../../utils.js";
import RadioProvider from "./RadioProvider.js";

class PlaylistManager {
  private readonly SONG_INTERVAL = 4;
  private readonly MAX_PLAYLIST_LENGTH = 100;
  private readonly REMAINDER_CAP = 50;

  constructor(private readonly provider: RadioProvider) {}

  getCurrentSongs(): rx.Observable<[Song, Song, Song]> {
    return rx
      .forkJoin([this.provider.getAllSongs(), this.provider.getState()])
      .pipe(rx.mergeMap(([songs, istate]) => this.getUpToDateState(songs, this.populateState(songs, istate))));
  }

  private populateState(songs: Song[], istate: InternalState): State {
    const songMap = Object.fromEntries(songs.map((song) => [song.id, song]));
    return { ...istate, playlist: istate.playlist.map((id) => songMap[id]) };
  }

  private getUpToDateState(songs: Song[], state: State): rx.Observable<[Song, Song, Song]> {
    let { index: oldIndex, elapsed, startTime } = this.calculateCurrentIndex(state);
    const updateIndex = this.calculateUpdateIndex(songs.length, state.playlist.length);
    const needFullRefresh = oldIndex === -1;
    const needPartialRefresh = oldIndex >= updateIndex;

    if (needFullRefresh) {
      state = this.generateNewState(songs);
      elapsed = getCurrentTimestampInSeconds() - state.startTime;
    } else if (needPartialRefresh) {
      state = this.generateNewState(songs, state.playlist.slice(oldIndex), startTime);
    }

    const index = needFullRefresh || needPartialRefresh ? 0 : oldIndex;
    const current = state.playlist.slice(index, index + 3) as [Song, Song, Song];
    elapsed = round(elapsed, 2);
    current[0] = { ...current[0], elapsed };
    if (needFullRefresh || needPartialRefresh) this.provider.updateState(state).subscribe();
    // console.log("State:", state);
    return rx.of(current);
  }

  private generateNewState(songs: Song[], remainder?: Song[], startTime?: number): State {
    const playlist = this.generateNewPlaylist(songs, remainder);
    startTime ??= getCurrentTimestampInSeconds(0) - random(playlist[0].duration + this.SONG_INTERVAL);
    return {
      playlist,
      startTime,
    };
  }

  private generateNewPlaylist(allSongs: Song[], remainder: Song[] = []): Song[] {
    const excludedIds = Object.values(remainder).map(({ id }) => id);
    const songs = allSongs.filter(({ id }) => !excludedIds.includes(id));
    const n = allSongs.length;
    let generated: Song[];

    if (n === 1) {
      remainder = [];
      generated = Array(4).fill(allSongs[0]);
    } else if (n === 2) {
      const currentI = allSongs.findIndex(({ id }) => remainder[0]?.id === id);
      const i = currentI !== -1 ? currentI : random(2);
      remainder = [];
      generated = [allSongs[i], allSongs[1 - i], allSongs[i], allSongs[1 - i]];
    } else {
      generated = shuffleArray(songs, this.MAX_PLAYLIST_LENGTH - remainder.length);
      if (n === 3) generated.push(remainder[0] ?? generated[0]);
    }

    return [...remainder, ...generated];
  }

  private calculateCurrentIndex({ playlist, startTime }: State): { index: number; elapsed: number; startTime: number } {
    const now = getCurrentTimestampInSeconds();
    let t = startTime;
    const index =
      startTime > now
        ? -1
        : playlist.findIndex(({ duration }) => {
            const nextTime = t + duration + this.SONG_INTERVAL;
            if (nextTime > now) return true;
            t = nextTime;
          });
    const elapsed = index === -1 ? 0 : now - t;
    return { index, elapsed, startTime: t };
  }

  private calculateUpdateIndex(songsLength: number, playlistLength: number): number {
    return playlistLength - Math.max(Math.min(Math.round(songsLength / 3) + 1, this.REMAINDER_CAP), 2);
  }
}

export default PlaylistManager;
