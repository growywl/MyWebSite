import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from './firebase'; 
import LoginScreen from './screens/sessions/LoginScreen';

const Stack = createStackNavigator();
export default function App() {
  const [signedIn, setsignedIn] = useState(false);
  
  auth.onAuthStateChanged((use) => {
    if (user) {
      setsignedIn(true);
    } else {
      setsignedIn(false);
    }
  });

  return (
    <NavigationContainer theme={DefaultTheme}>
      {signedIn
        ? (
          <Text>Signed In</Text>
        ) : (
          <>
          <StatusBar style="light" />
          <Stack.Navigator
          mode="card"
          screenOptions={{}}
          >
            <Stack.Screen
            name="signIn"
            component={LoginScreen}
            options={{
              title: 'Sign In',
              headerStyle: {
                backgroundColor: '#29434e',
                borderBottomColor: '#29434e',
              },
              headerTintColor: '#fff'
            }}/>
            </Stack.Navigator>
            </>
        )
      }
      </NavigationContainer>
  );
}

