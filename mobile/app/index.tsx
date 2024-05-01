import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.heading]}>The Music Project</Text>
      <Link href="/radio" style={[styles.text, styles.link]}>
        Radio
      </Link>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;

const rem = 18;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    fontFamily: "sans-serif",
    fontSize: rem,
    color: "#fff",
  },
  heading: {
    position: "absolute",
    top: 4 * rem,
    fontSize: 2 * rem,
    fontWeight: "bold",
  },
  link: {
    position: "absolute",
    top: "39%",
    padding: 3 * rem,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: rem,
  },
});
