import { StyleSheet, Text, View, Image, TextInput  } from 'react-native';
import React from 'react';
import EyeIMG from "../assets/eye.png";
import FaceIMG from "../assets/face.png";
import ZaloIMG from "../assets/zalo.png";
import GoogleIMG from "../assets/google.png";

export default function Lab1_d() {
  return (
    <View style={styles.container}>
        
        <View style={styles.viewTextTitle}>
            <text>LOGIN</text>
        </View>
        <View style={styles.viewInputEmail}>
            <TextInput placeholder='Email' style={styles.btnText}/>
        </View>
        <View style={styles.viewInputPass}>
            <TextInput placeholder='Password' style={styles.btnText}/>
            <Image source={EyeIMG} style={styles.imgEye}/>
        </View>
        <View style={styles.viewButton}>
            <input type="button" name="btnLogin" id="btnLogin" value="LOGIN" style={{width: '350px', height: '50px', background: '#c34e3c', fontSize: '20px', border: '1px solid #c34e3c', borderRadius: '10px 10px 10px 10px', color: 'white'}}/>
        </View>
        <View style={styles.viewText}>
            <text style={styles.text1}>When you agree to terms and conditions</text>
            <text style={styles.text2}>For got your password?</text>
            <text style={styles.text3}>Or login with</text>
        </View>
        <View style={styles.viewLogo}>
            <Image source={FaceIMG} style={styles.logoFace}/>
            <Image source={ZaloIMG} style={styles.logoZalo}/>
            <Image source={GoogleIMG} style={styles.logoGoogle}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#d8efdf'
  },
  viewTextTitle: {
    marginTop: '30px',
    textAlign: "center",
    fontSize: '40px',
    color: 'black'
  },
  viewInputEmail: {
    width: '350px',
    backgroundColor: '#c9e0d0',
    marginTop: '50px',
  },
  btnText: {
    height: '50px',
    width: '340px'
  },
  viewInputPass: {
    width: '350px',
    backgroundColor: '#c9e0d0',
    marginTop: '30px',
    flexDirection: 'row',
  },
  imgEye: {
    width: '60px',
    height: '30px',
    marginTop: '10px'
  },
  viewButton: {
    marginTop: '50px',
    flexDirection: 'row',
  },
  viewText: {
    alignItems: "center",
    marginTop: '20px',
  },
  text1: {
    marginTop: '20px',
  },
  text2: {
    marginTop: '20px',
    color: '#9d9be1'
  },
  text3: {
    marginTop: '20px',
  },
  viewLogo: {
    marginTop: '50px',
    flexDirection: 'row',
    border: '1px solid #84c2d9'
  },
  logoFace: {
    width: '110px',
    height: '75px'
  },
  logoZalo: {
    width: '110px',
    height: '75px'
  },
  logoGoogle: {
    width: '110px',
    height: '75px'
  }
});