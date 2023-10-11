import { StyleSheet, Text, View, Image, TextInput  } from 'react-native';
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";

export default function Lab1_c() {
  return (
    <LinearGradient
      style={styles.a}
      locations={[0, 0.3, 0.8, 1]}
      colors={["#c7f4f6", "#d1f4f6", "#e5f4f5", "#00ccf9"]}
    >
        <View style={styles.container}>
            <View style={styles.viewTextCode}>
                <text>CODE</text>
            </View>
            <View style={styles.viewTextTitle}>
                <text>VERIFICATION</text>
            </View>
            <View style={styles.viewText}>
                <text>Enter ontime password sent on</text>
                <text>++849092605798</text>
            </View>
            <View style={styles.viewInput}>
                <View style={styles.frameChildShadowBox}/>
                <View style={styles.frameChildShadowBox}/>
                <View style={styles.frameChildShadowBox}/>
                <View style={styles.frameChildShadowBox}/>
                <View style={styles.frameChildShadowBox}/>
                <View style={styles.frameChildShadowBox}/>
            </View>
            <View style={styles.viewButton}>
                <input type="button" name="btnVer" id="btnVer" value="VERIFY CODE" style={{width: '350px', height: '50px', background: '#e3c000', fontSize: '20px', border: '1px solid #e3c000', borderRadius: '10px 10px 10px 10px'}}/>
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
  viewTextCode: {
    marginTop: '70px',
    alignItems: 'center',
    fontSize: '80px'
  },
  viewTextTitle: {
    marginTop: '50px',
    textAlign: "center",
    fontSize: '30px',
    color: 'black'
  },
  viewText: {
    marginTop: '50px',
    textAlign: "center",
    fontSize: '20px',
    color: 'black'
  },
  viewButton: {
    marginTop: '40px',
    flexDirection: 'row',
  },
  viewInput: {
    flexDirection: 'row',
    marginTop: '40px',
  },
  frameChildShadowBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
  }
});