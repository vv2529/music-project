import { Song, Station } from "./types.js";

export const songs: Song[] = [
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
];

export const stations: Record<string, Station> = {
  central: {
    name: "Central",
    songs: [1, 2, 3, 4, 5, 6],
  },
  second: {
    name: "Second",
    songs: [1, 2],
  },
};

export const songOfTheDayHistory: Record<string, number> = {
  "2024-02-22": 1,
};
