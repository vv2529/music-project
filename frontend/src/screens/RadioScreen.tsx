import { styled } from "goober";
import { ReactElement, useMemo } from "react";
import { useObservable, useObservableState } from "observable-hooks";
import RadioController from "../components/radio/RadioController";

const RadioScreen = (): ReactElement => {
  const radio = useMemo(() => new RadioController(), []);
  const songs$ = useObservable(() => radio.getSongStream());
  const songs = useObservableState(songs$) ?? [];
  // console.log("Songs:", ...songs);

  const songOfTheDay$ = useObservable(() => radio.getSongOfTheDay());
  const songOfTheDay = useObservableState(songOfTheDay$);

  return (
    <Container>
      <Heading>Radio</Heading>
      <SongRow>Playing: {songs[0]?.name ?? "—"}</SongRow>
      <SongRow>Next: {songs[1]?.name ?? "—"}</SongRow>
      <SongRow $highlighted={songs[0]?.id === songOfTheDay?.id}>Song of the day: {songOfTheDay?.name ?? "—"}</SongRow>
    </Container>
  );
};

export default RadioScreen;

const Container = styled("div")`
  height: 100%;
  text-align: center;
`;
const Heading = styled("h1")``;
const SongRow = styled("div")<{ $highlighted?: boolean }>`
  margin: 0.5em 40%;
  /* text-align: left; */
  ${({ $highlighted }) => ($highlighted ? "color: #0c0;" : "")}
`;
