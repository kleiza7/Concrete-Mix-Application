import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Home from './screens/home';
import DataInput from './screens/dataInput';
import DelicacyModuleCalc from './screens/delicacyModuleCalc';
import Calculation from './screens/calculation';
import About from './screens/about';
import Results from './screens/results';
const Stack = createStackNavigator();

export default function App() {

 return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home"  component={Home} />
      <Stack.Screen name="Data Input" component={DataInput} />
      <Stack.Screen name="Delicacy Module Calculator" component={DelicacyModuleCalc} />
      <Stack.Screen name="Calculation" component={Calculation} />
      <Stack.Screen name="Results" component={Results} />
      <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

