import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { Link } from "expo-router";
import { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioProps } from "./radio/types";
import stations from "./radio/stations";

const Radio = ({ station, setStation, volume, setVolume, songs, songOfTheDay }: RadioProps): ReactElement => {
  return (
    <View style={styles.container}>
      <Link href="/" style={[styles.backLink]} />
      <Text style={[styles.text, styles.heading]}>Radio</Text>
      <View style={[styles.section, styles.mainSection]}>
        <Picker style={styles.picker} selectedValue={station} onValueChange={setStation}>
          <Picker.Item label="--- Select station ---" value="" />
          {stations.map(({ id, name }) => (
            <Picker.Item key={id} value={id} label={name} />
          ))}
        </Picker>
      </View>
      <View style={[styles.section, styles.mainSection]}>
        <Text style={[styles.text]}>Volume: {volume}%</Text>
        <Slider style={styles.slider} minimumValue={0} maximumValue={100} step={1} onValueChange={setVolume} />
      </View>
    </View>
  );
};

export default Radio;

const rem = 18;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#000",
  },
  section: {
    width: "100%",
    paddingVertical: 1.5 * rem,
    paddingHorizontal: 3 * rem,
  },
  mainSection: {
    height: 24 * rem,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#fff",
  },
  bottomSection: {
    textAlign: "left",
  },
  text: {
    fontFamily: "sans-serif",
    fontSize: rem,
    color: "#fff",
  },
  heading: {
    margin: 1.5 * rem,
    fontSize: 2 * rem,
    fontWeight: "bold",
  },
  picker: {
    maxWidth: "100%",
    width: 15 * rem,
    paddingVertical: 0.75 * rem,
    paddingHorizontal: 0.9 * rem,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "transparent",
    color: "#fff",
  },
  slider: {
    flexGrow: 0,
    width: 12 * rem,
    height: 3 * rem,
  },
  backLink: {
    position: "absolute",
    top: rem,
    left: rem,
    width: 0.75 * rem,
    height: 0.75 * rem,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderColor: "#fff",
    transform: "rotate(-45deg)",
  },
});
