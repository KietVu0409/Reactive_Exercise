import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity,Image } from 'react-native';



export default function Lab02_d() {
  return (
    
    <View style={styles.container} >
      
      <View style={{ flex: 2.5, flexDirection:'row'}}>
        <Image style={{flex:1}} source={{ uri:'https://nhasachquangloi.vn/pub/media/catalog/product/cache/3bd4b739bad1f096e12e3a82b40e551a/s/b/sbgk20-l05-657-1.jpg'}}></Image>
        <View style={{flex:0.1}}></View>
      </View>

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  

});