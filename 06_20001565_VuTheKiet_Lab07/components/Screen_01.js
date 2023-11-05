import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Email_img from '../assets/email.png'

export default function Screen01({navigation}) {
  const [name, setName] = React.useState('')
  const goToScreen2 = () => {
    navigation.navigate('Screen02', {name});
  };
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', marginTop: 200}}>
        <Text style={{color: '#8353E2', fontFamily: 'Epilogue', fontSize: 24, fontWeight: 700}}>MANAGE YOUR</Text>
        <Text style={{color: '#8353E2', fontFamily: 'Epilogue', fontSize: 24, fontWeight: 700, marginTop: 10}}>TASK</Text>
      </View>
      <View style={{width: 334, height: 43, marginTop: 50, alignItems: 'center', justifyContent: 'center', border: '1px solid grey', borderRadius: 12, flexDirection: 'row'}}>
        <Image source={Email_img} style={{width: 20, height: 20, margin: 15}}/>
        <TextInput style={{width: 280, height: 43, alignItems: 'center', justifyContent: 'center', borderRadius: 12, padding: 10}} placeholder='Enter your name' value={name}
        onChangeText={text => setName(text)}>
        </TextInput>
      </View>
      <TouchableOpacity style={{width: 190, height: 44, borderRadius: 12, backgroundColor: '#00BDD6', alignItems: 'center', justifyContent: 'center', marginTop: 80}} onPress={goToScreen2}>
        <Text style={{fontFamily: 'Inter', fontSize: 16, fontWeight: 400, color: '#FFFFFF'}}>GET STARTED -></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

