import * as rx from "rxjs";
import { DateKey, InternalState, Song, State } from "./types.js";

const songs: Song[] = [
  {
    id: 1,
    name: "A - Song 1",
    url: "abc",
    duration: 3,
  },
  {
    id: 2,
    name: "B - Song 2",
    url: "bcd",
    duration: 4,
  },
  {
    id: 3,
    name: "C - Song 3",
    url: "cde",
    duration: 5,
  },
  {
    id: 4,
    name: "D - Song 4",
    url: "def",
    duration: 6,
  },
  {
    id: 5,
    name: "E - Song 5",
    url: "efg",
    duration: 7,
  },
  {
    id: 6,
    name: "F - Song 6",
    url: "fgh",
    duration: 8,
  },
  {
    id: 11,
    name: "A - Song 1",
    url: "abc",
    duration: 3,
  },
  {
    id: 12,
    name: "B - Song 2",
    url: "bcd",
    duration: 4,
  },
  {
    id: 13,
    name: "C - Song 3",
    url: "cde",
    duration: 5,
  },
  {
    id: 14,
    name: "D - Song 4",
    url: "def",
    duration: 6,
  },
  {
    id: 15,
    name: "E - Song 5",
    url: "efg",
    duration: 7,
  },
  {
    id: 16,
    name: "F - Song 6",
    url: "fgh",
    duration: 8,
  },
];

class RadioProvider {
  private state: InternalState = {
    startTime: 0,
    playlist: [],
  };
  private songOfTheDayHistory = new Map<string, number>([["2024-02-22", 1]]);

  getAllSongs(): rx.Observable<Song[]> {
    return rx.of(songs);
  }

  getState(): rx.Observable<InternalState> {
    return rx.of(this.state);
  }

  updateState(state: State): rx.Observable<void> {
    this.state = { ...state, playlist: state.playlist.map(({ id }) => id) };
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

  private makeDateString(date: DateKey): string {
    return date.map((n) => ("" + n).padStart(2, "0")).join("-");
  }
}

export default RadioProvider;
