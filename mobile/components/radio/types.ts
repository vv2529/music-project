import { Dispatch, SetStateAction } from "react";

export type RadioProps = {
  station: string;
  setStation: Dispatch<SetStateAction<string>>;
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>;
  songs: [Song, Song] | [];
  songOfTheDay: SongOfTheDay;
};

export type Song = {
  id: number;
  name: string;
  url: string;
  duration: number;
  startTime?: number;
  elapsed?: number;
};

export type SongOfTheDay = {
  id: number;
  name: string;
};

export type Station = {
  id: string;
  name: string;
};
