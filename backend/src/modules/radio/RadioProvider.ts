import * as rx from "rxjs";
import { InternalState, Song, State } from "./types.js";

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
}

export default RadioProvider;
