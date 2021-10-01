/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome5';


import Trim from '../pages/Trim';
import Template from '../pages/Template';
import Camerapage from './Camerapage';

const Tab = createBottomTabNavigator();

const Bottomtab=({navigation})=> {
  return (
    
      <Tab.Navigator  
      screenOptions={{ headerShown: false }}
      initialRouteName='Trim'
      backBehavior='initialRoute'
      tabBarOptions={{
      
      activeTintColor: '#F7971E',
      inactiveTintColor:'#b3b3b3',
      labelStyle: {  fontWeight: 'bold' },          
      style: { backgroundColor: '#199591',}, 
    }}>
        <Tab.Screen name="Trim" component={Trim} 
          options={{
            tabBarLabel: 'Trim',
            tabBarIcon: ({ color }) => (
              <Icon name="clapperboard" color={color} size={27} />),}} />

        <Tab.Screen name="Camerapage" component={Camerapage}
          options={{
            tabBarLabel: 'Camera',
            tabBarIcon: ({ color, size }) => (
              <Icon2 name="record-vinyl" color={color} size={30} />
              ),}} />

        <Tab.Screen name="Template" component={Template}
          options={{
            tabBarLabel: 'Template',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="folder" color={color} size={30} />
              ),}} />

          
           
      </Tab.Navigator>
  
  );
}
export default Bottomtab;