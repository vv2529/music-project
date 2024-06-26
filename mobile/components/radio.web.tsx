import { styled } from "goober";
import { ReactElement } from "react";
import stations from "./radio/stations";
import Select from "./common/Select.web";
import RangeInput from "./common/RangeInput.web";
import { BackNavigation } from "./common/navigation.web";
import { RadioProps } from "./radio/types";

const Radio = ({ station, setStation, volume, setVolume, songs, songOfTheDay }: RadioProps): ReactElement => {
  return (
    <Screen>
      <BackNavigation aria-label="Return to home" href="/" />
      <Container>
        <Section>
          <Heading>Radio</Heading>
        </Section>
        <Section $main>
          <Select aria-label="Select station" value={station} onChange={(e) => setStation(e.currentTarget.value)}>
            <option value="">--- Select station ---</option>
            {stations.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Select>
          <SongRow>
            <RowName>Playing:</RowName>
            <RowValue>{songs[0]?.name ?? "—"}</RowValue>
          </SongRow>
          <SongRow>
            <RowName>Next:</RowName>
            <RowValue>{songs[1]?.name ?? "—"}</RowValue>
          </SongRow>
          <SongRow>
            <RowName>Song of the day:</RowName>
            <RowValue $highlighted={!!songs[0]?.id && songs[0]?.id === songOfTheDay?.id}>
              {songOfTheDay?.name ?? "—"}
            </RowValue>
          </SongRow>
        </Section>
        <Section>
          <div>Volume: {Math.floor(volume)}%</div>
          <RangeInput
            aria-label="Volume"
            min="0"
            max="100"
            step="1"
            value={volume}
            onChange={(e) => setVolume(+e.currentTarget.value)}
          />
        </Section>
      </Container>
    </Screen>
  );
};

export default Radio;

const Screen = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;

  @media (min-width: 769px) {
    align-items: center;
  }
`;
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 35em;
  max-height: 100%;
  overflow-y: auto;

  & select {
    margin-bottom: 1.5em;
  }

  @media (min-width: 769px) {
    width: 769px;
    border: 1px solid #fff;
    border-radius: 1em;
  }
`;
const Section = styled("div")<{ $main?: boolean }>`
  ${({ $main }) => ($main ? "flex-grow: 1;" : "")}
  flex-shrink: 0;
  padding: 1.5em 3em;
  &:not(:last-child) {
    border-bottom: 1px solid #fff;
  }
`;
const Heading = styled("h1")`
  margin: 0;
  text-align: center;
`;
const SongRow = styled("div")`
  margin: 1em 0;
`;
const RowName = styled("span")`
  display: inline-block;
  width: 8.25em;
`;
const RowValue = styled("span")<{ $highlighted?: boolean }>`
  display: inline-block;
  ${({ $highlighted }) => ($highlighted ? "color: #0c0;" : "")}
`;
