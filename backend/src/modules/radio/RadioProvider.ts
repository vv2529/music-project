import * as rx from "rxjs";
import { DateKey, InternalState, Song, State } from "./types.js";
import { songOfTheDayHistory, songs, stations } from "./data.js";

const emptyState: InternalState = {
  startTime: 0,
  playlist: [],
};

class RadioProvider {
  private state: Record<string, InternalState> = {
    central: emptyState,
    second: emptyState,
  };
  private songOfTheDayHistory = new Map<string, number>(Object.entries(songOfTheDayHistory));

  getAllSongs(station: string): rx.Observable<Song[]> {
    return rx.of(songs.filter(({ id }) => stations[station].songs.includes(id)));
  }

  getState(station: string): rx.Observable<InternalState> {
    return rx.of(this.state[station]);
  }

  updateState(state: State, station: string): rx.Observable<void> {
    this.state[station] = { ...state, playlist: state.playlist.map(({ id }) => id) };
    return rx.of();
  }

  getSongOfTheDay(date: DateKey): rx.Observable<number | undefined> {
    console.log("get:", this.songOfTheDayHistory);
    return rx.of(this.songOfTheDayHistory.get(this.makeDateString(date)));
  }

  setSongOfTheDay(date: DateKey, songId: number): rx.Observable<void> {
    this.songOfTheDayHistory.set(this.makeDateString(date), songId);
    console.log("set:", this.songOfTheDayHistory);
    return rx.of();
  }

  doesStationExist(station: string): boolean {
    return Object.keys(stations).includes(station);
  }

  private makeDateString(date: DateKey): string {
    return date.map((n) => ("" + n).padStart(2, "0")).join("-");
  }
}

export default RadioProvider;
