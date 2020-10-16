import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Blogs from './app/components/Blogs';
import Edit from './app/components/Edit';
import Post from './app/components/Post';

const Stack = createStackNavigator();

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
