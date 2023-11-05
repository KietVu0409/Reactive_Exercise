import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import Screen01 from './components/Screen_01.js'
import Screen02 from './components/Screen_02.js'
import Screen03 from './components/Screen_03.js'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen01' component={Screen01} options={{ headerShown: false }}/>
        <Stack.Screen name='Screen02' component={Screen02} options={{ headerShown: false }}/>
        <Stack.Screen name='Screen03' component={Screen03} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
