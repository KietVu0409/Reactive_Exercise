import { Button, Image, StyleSheet, Text, View, ViewBase } from "react-native";
import Lab1 from './components/Lab1';
import Lab1_a from './components/Lab1_a';
import Lab1_b from './components/Lab1_b';
import Lab1_c from './components/Lab1_c';
import Lab1_d from './components/Lab1_d';
import Lab1_e from './components/Lab1_e';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Lab1/>;*/}
      {/*<Lab1_a/>;*/}
      {/*<Lab1_b/>;*/}
      {/*<Lab1_c/>;*/}
      {/*<Lab1_d/>;*/}
      <Lab1_e/>;
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
});