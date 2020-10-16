import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Blogs from './app/pages/Blogs';
import Edit from './app/pages/Edit';
import Post from './app/pages/Post';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {
  render(){
    console.log('app started');
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Blogs">
        <Stack.Screen name="Blogs" component={Blogs} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="Post" component={Post} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
