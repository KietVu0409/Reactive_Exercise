import { StyleSheet, Text, View, Image, TextInput  } from 'react-native';
import React from 'react';
import LockImg from "../assets/lock.png";
import EmailImg from "../assets/email.png";
import { LinearGradient } from "expo-linear-gradient";

export default function Lab1_b() {
  return (
    <LinearGradient
      style={styles.a}
      locations={[0, 0.3, 0.8, 1]}
      colors={["#c7f4f6", "#d1f4f6", "#e5f4f5", "#00ccf9"]}
    >
        <View style={styles.container}>
          <View style={styles.viewLogo}>
            <Image source={LockImg}
                    style={{width: '130px', height: '160px'}}/>
          </View>
          <View style={styles.viewTextTitle}>
            <text>FORGET</text>
            <text>PASSWORD</text>
          </View>
          <View style={styles.viewText}>
            <text>Provide your account's email for which you want to reset your password</text>
          </View>
          <View style={styles.viewInput}>
            <Image source={EmailImg}
                    style={{width: '50px', height: '35px', marginTop: '8px', marginLeft: '10px'}}/>
            <text style={{marginTop: '15px', marginLeft: '10px'}}>Email</text>
          </View>
          <View style={styles.viewButton}>
            <input type="button" name="btnNext" id="btnNext" value="NEXT" style={{width: '300px', height: '50px', background: '#e3c000', fontSize: '20px', border: '1px solid #e3c000', borderRadius: '10px 10px 10px 10px'}}/>
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
    marginTop: '20px',
    textAlign: "center",
    fontSize: '40px',
    color: 'black'
  },
  viewText: {
    marginTop: '20px',
    textAlign: "center",
    fontSize: '20px',
    color: 'black'
  },
  viewButton: {
    marginTop: '20px',
    flexDirection: 'row',
  },
  viewInput: {
    flexDirection: 'row',
    marginTop: '20px',
    backgroundColor: '#c4c4c4',
    width: '300px', 
    height: '50px'
  }
});