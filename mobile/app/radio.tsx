import { ReactElement, useMemo, useState } from "react";
import { useObservable, useObservableState } from "observable-hooks";
import * as rx from "rxjs";
import Radio from "../components/radio";
import RadioController from "../components/radio/RadioController";

const RadioScreen = (): ReactElement => {
  const [volume, setVolume] = useState(100);
  const [station, setStation] = useState("");

  const radio = useMemo(() => new RadioController(), []);
  const songs$ = useObservable(
    (inputs$) => inputs$.pipe(rx.mergeMap(([station]) => radio.getSongStream(station))),
    [station]
  );
  const songs = useObservableState(songs$) ?? [];
  console.log("Log:", ...songs);

  const songOfTheDay$ = useObservable(() => radio.getSongOfTheDay());
  const songOfTheDay = useObservableState(songOfTheDay$);

  return <Radio {...{ station, setStation, volume, setVolume, songs, songOfTheDay }} />;
};

export default RadioScreen;
