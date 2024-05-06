import * as rx from "rxjs";
import axios from "axios";
import { Song, SongOfTheDay } from "./types";

class RadioAPI {
  private httpClient = axios.create({ baseURL: `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/radio` });

  getCurrentSongs(station: string): rx.Observable<[Song, Song, Song]> {
    return rx.from(this.httpClient.get<[Song, Song, Song]>(`/current?station=${station}`).then(({ data }) => data));
  }

  getSongOfTheDay(): rx.Observable<SongOfTheDay> {
    return rx.from(this.httpClient.get<SongOfTheDay>("/song-of-the-day").then(({ data }) => data));
  }

  checkHealth(): rx.Observable<boolean> {
    return rx.of(true);
  }
}

export default RadioAPI;
