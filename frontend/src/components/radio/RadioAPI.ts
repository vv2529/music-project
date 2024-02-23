import * as rx from "rxjs";
import axios from "axios";
import { Song } from "./types";

class RadioAPI {
  private httpClient = axios.create({ baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/radio` });

  getCurrentSongs(): rx.Observable<[Song, Song, Song]> {
    return rx.from(this.httpClient.get<[Song, Song, Song]>("/current").then(({ data }) => data));
  }

  checkHealth(): rx.Observable<boolean> {
    return rx.of(true);
  }
}

export default RadioAPI;
