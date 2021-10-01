/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splashscreen from './src/pages/Splashscreen';
import LoginPage from './src/pages/LoginPage';
import Bottomtab from './src/component/Bottomtab';
import Trim from './src/pages/Trim';
import Template from './src/pages/Template';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splashscreen"
        screenOptions={{
          headerTintColor: '#black',
          headerStyle: {backgroundColor: '#ffffff'},
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splashscreen"
          component={Splashscreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginPage"
          component={LoginPage}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Bottomtab"
          component={Bottomtab}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Trim"
          component={Trim}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Template"
          component={Template}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headercontent: {
    justifyContent: 'center',
  },
});
