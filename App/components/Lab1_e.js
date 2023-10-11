import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import EyeIMG from "../assets/eye.png";


export default function Lab1_e() {
  return (
    <View style={styles.container}>
        
        <View style={styles.viewTextTitle}>
            <text>RESISTER</text>
        </View>
        <View style={styles.viewInputName}>
            <TextInput placeholder='Name' style={styles.btnText}/>
        </View>
        <View style={styles.viewInputPhone}>
            <TextInput placeholder='Phone' style={styles.btnText}/>
        </View>
        <View style={styles.viewInputPhone}>
            <TextInput placeholder='Email' style={styles.btnText}/>
        </View>
        <View style={styles.viewInputPass}>
            <TextInput placeholder='Password' style={styles.btnText}/>
            <Image source={EyeIMG} style={styles.imgEye}/>
        </View>
        <View style={styles.viewInputPhone}>
            <TextInput placeholder='Birthday' style={styles.btnText}/>
        </View>
        <View style={styles.viewRadio}>
            <TouchableOpacity>
                <View style={styles.radioWrapper1}>
                    <View style={styles.radio}></View>
                    <Text style={styles.radioText}>Male</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.radioWrapper2}>
                    <View style={styles.radio}></View>
                    <Text style={styles.radioText}>Female</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.viewButton}>
            <input type="button" name="btnRes" id="btnRes" value="RESISTER" style={{width: '350px', height: '50px', background: '#c34e3c', fontSize: '20px', border: '1px solid #c34e3c', borderRadius: '10px 10px 10px 10px', color: 'white'}}/>
        </View>
        <View style={styles.viewText}>
            <text style={styles.text1}>When you agree to terms and conditions</text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#d8efdf'
  },
  viewTextTitle: {
    marginTop: '50px',
    textAlign: "center",
    fontSize: '40px',
    color: 'black'
  },
  viewInputName: {
    width: '350px',
    backgroundColor: '#c9e0d0',
    marginTop: '40px',
  },
  viewInputPhone: {
    width: '350px',
    backgroundColor: '#c9e0d0',
    marginTop: '10px',
  },
  btnText: {
    height: '50px',
    width: '340px'
  },
  viewInputPass: {
    width: '350px',
    backgroundColor: '#c9e0d0',
    marginTop: '10px',
    flexDirection: 'row',
  },
  imgEye: {
    width: '60px',
    height: '30px',
    marginTop: '10px'
  },
  viewRadio: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: '20px',
    marginRight: '150px'
  },
  radioWrapper1: {
    flexDirection: "row",
    alignItems: "center"
  },
  radioWrapper2: {
    flexDirection: "row",
    alignItems: "center",
  },
  radio: {
    height: 30,
    width: 30,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 30,
    marginLeft: 30,
  },
  radioText: {
    marginLeft: '10px'
  },
  viewButton: {
    marginTop: '20px',
    flexDirection: 'row',
  },
  viewText: {
    alignItems: "center",
    marginTop: '10px',
  }
})