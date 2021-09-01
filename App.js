import { StatusBar } from 'expo-status-bar';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { db } from './firebase';
import { auth } from './firebase'; 
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/sessions/LoginScreen';
import RegisterScreen from './screens/sessions/RegisterScreen';
import {  SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import ShopmindersTab from './screens/ShopmindersTab';
import SettingsTab from './screens/SettingsTab';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  const [signedIn, setSignedIn] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });
  
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
      backgroundColor: 'transparent',
    },
  });
  

  return (
    <NavigationContainer theme={DefaultTheme}>
      {signedIn
        ? (
          <Text>Signed in</Text>
        ) : (
          <>
            <StatusBar style="light" />
            <Stack.Navigator
              mode="card"
              screenOptions={{
              }}
            >
              <Stack.Screen
                name="signIn"
                component={LoginScreen}
                options={{
                  cardStyleInterpolator: forFade,
                  title: 'Sign in',
                  headerStyle: {
                    backgroundColor: '#29434e',
                    borderBottomColor: '#29434e',
                  },
                  headerTintColor: '#fff',
                }}
              />
              <Stack.Screen
                name="register"
                component={RegisterScreen}
                options={{
                  cardStyleInterpolator: forFade,
                  title: 'Register',
                  headerStyle: {
                    backgroundColor: '#29434e',
                    borderBottomColor: '#29434e',
                  },
                  headerTintColor: '#fff',
                }}
              />
            </Stack.Navigator>
          </>
        )}
    </NavigationContainer>

    
  );
}