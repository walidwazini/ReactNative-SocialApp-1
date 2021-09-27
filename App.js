import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase'

import LandingScreen from './components/auth/Landing'

const firebaseConfig = {
  apiKey: "AIzaSyC2C-v-IHFbdE9bSKK0qlBGp_VrnoZJtqI",
  authDomain: "reactnative-socialapp-1.firebaseapp.com",
  projectId: "reactnative-socialapp-1",
  storageBucket: "reactnative-socialapp-1.appspot.com",
  messagingSenderId: "728294444362",
  appId: "1:728294444362:web:3c6be9d28c43f607e7c5b3"
};

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" >
        <Stack.Screen name="Landing" component={LandingScreen} />
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
