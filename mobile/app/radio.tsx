import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";

const Radio = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Link href="/" style={[styles.backLink]} />
      <Text style={[styles.text, styles.heading]}>Radio</Text>
      <View style={[styles.section, styles.mainSection]}>
        <Picker style={styles.picker}>
          <Picker.Item label="--- Select station ---" value="" />
          <Picker.Item label="Central" value="1" />
          <Picker.Item label="Second" value="2" />
        </Picker>
        {/* <Text style={[styles.text]}>S</Text> */}
      </View>
      <View style={[styles.section, styles.mainSection]}>
        <Text style={[styles.text]}>Volume: 100%</Text>
        <Slider style={styles.slider} minimumValue={0} maximumValue={100} step={1} />
      </View>
      <StatusBar style="auto" />
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
