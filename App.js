import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UsersScreen from './src/screen/UsersScreen';
import HomeScreen from './src/screen/HomeScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Users" component={UsersScreen} />
  
    </Stack.Navigator>

  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2f2f2'
},
})