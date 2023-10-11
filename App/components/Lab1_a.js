import { StyleSheet, Text, View, Image, TextInput  } from 'react-native';
import React from 'react';
import CircleImg from "../assets/105152.png";
import { LinearGradient } from "expo-linear-gradient";

export default function Lab1_a() {
  return (
    <LinearGradient
      style={styles.a}
      locations={[0, 0.3, 0.8, 1]}
      colors={["#c7f4f6", "#d1f4f6", "#e5f4f5", "#00ccf9"]}
    >
      <View style={styles.container}>
        <View style={styles.viewLogo}>
          <Image source={CircleImg}
                  style={{width: '130px', height: '130px'}}/>
        </View>
        <View style={styles.viewTextTitle}>
          <text>GROW</text>
          <text>YOUR BUSINESS</text>
        </View>
        <View style={styles.viewText}>
          <text>We will help you to grow your business using online server</text>
        </View>
        <View style={styles.viewButton}>
          <input type="button" name="btnLogin" id="btnLogin" value="LOGIN" style={{width: '130px', height: '50px', background: '#e3c000', fontSize: '20px', border: '1px solid #e3c000', borderRadius: '10px 10px 10px 10px'}}/>
          <input type="button" name="btnSignUp" id="btnSignUp" value="SIGN UP" style={{width: '130px', height: '50px', background: '#e3c000', marginLeft: '50px', fontSize: '20px', border: '1px solid #e3c000', borderRadius: '10px 10px 10px 10px'}}/>
        </View>
        <View style={styles.viewTextFinal}>
          <text>HOW WE WORK?</text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  a: {
    height: "100%",
    alignItems: "center",
  },
  viewLogo: {
    marginTop: '70px',
    alignItems: 'center'
  },
  viewTextTitle: {
    marginTop: '30px',
    textAlign: "center",
    fontSize: '40px',
    color: 'black'
  },
  viewText: {
    marginTop: '40px',
    textAlign: "center",
    fontSize: '20px',
    color: 'black'
  },
  viewButton: {
    marginTop: '40px',
    flexDirection: 'row',
  },
  viewTextFinal: {
    marginTop: '20px',
    textAlign: "center",
    fontSize: '20px',
    color: 'black'
  }
});