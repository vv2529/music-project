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
