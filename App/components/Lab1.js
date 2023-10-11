import { StyleSheet, Text, View, Image, TextInput  } from 'react-native';
import React from 'react';
import CircleImg from "../assets/105152.png";
import { Button } from 'react-native-web';

export default function Lab1() {
  return (
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
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47dafb',
    alignItems: "center",
  },
  viewLogo: {
    marginTop: '100px',
  },
  viewTextTitle: {
    marginTop: '50px',
    textAlign: "center",
    fontSize: '40px',
    color: 'black'
  },
  viewText: {
    marginTop: '50px',
    textAlign: "center",
    fontSize: '20px',
    color: 'black'
  },
  viewButton: {
    margin: '60px',
    flexDirection: 'row',
  }
});