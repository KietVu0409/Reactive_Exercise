import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';

import Email_img from '../assets/email.png'

export default function Screen01({navigation}) {

  const [id, setId] = useState('');
  const [idErr, setIdErr] = useState('');

  const goToScreen02 = async () => {
    try {
      const response = await fetch(`https://65485652dd8ebcd4ab22bd72.mockapi.io/api/user/todos/${id}`);
      if (response.ok) {
        const userData = await response.json();
        navigation.navigate('Screen02', { userData });
      } else {
        setIdErr('Thông báo: Không có người dùng với id này.');
      }
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu người dùng', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', marginTop: 200}}>
        <Text style={{color: '#8353E2', fontFamily: 'Epilogue', fontSize: 24, fontWeight: 700}}>MANAGE YOUR</Text>
        <Text style={{color: '#8353E2', fontFamily: 'Epilogue', fontSize: 24, fontWeight: 700, marginTop: 10}}>TASK</Text>
      </View>
      <View style={{width: 334, height: 43, marginTop: 50, alignItems: 'center', justifyContent: 'center', border: '1px solid grey', borderRadius: 12, flexDirection: 'row'}}>
        <Image source={Email_img} style={{width: 20, height: 20, margin: 15}}/>
        <TextInput style={{width: 280, height: 43, alignItems: 'center', justifyContent: 'center', borderRadius: 12, padding: 10}} placeholder='Enter your id' value={id}
        onChangeText={text => setId(text)}>
        </TextInput>
      </View>
      <Text>{idErr}</Text>
      <TouchableOpacity style={{width: 190, height: 44, borderRadius: 12, backgroundColor: '#00BDD6', alignItems: 'center', justifyContent: 'center', marginTop: 80}} onPress={goToScreen02}>
        <Text style={{fontFamily: 'Inter', fontSize: 16, fontWeight: 400, color: '#FFFFFF'}}>GET STARTED</Text>
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

