export type Song = {
  id: number;
  name: string;
  url: string;
  duration: number;
  startTime?: number;
  elapsed?: number;
};

export type State = {
  startTime: number;
  playlist: Song[];
};

export type InternalState = {
  startTime: number;
  playlist: number[];
};

export type SongOfTheDay = {
  id: number;
  name: string;
};

export type DateKey = [number, number, number];
