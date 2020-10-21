import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Alert, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SQLite from 'expo-sqlite';

import Blogs from './app/pages/Blogs';
import Edit from './app/pages/Edit';
import Post from './app/pages/Post';
import Delete from './app/pages/Delete';
import Menu from './app/pages/Menu';

const db = SQLite.openDatabase('TestDB');

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {

  // Tuto trucho de youtube //

  async componentDidMount(){ //componentWillMount
    db.transaction(tx => {
      tx.executeSql(
        'Create table if not exists tbl_test (id integer primary key not null, name text, age text);'
      );
    });
    this.setState({ loading: false })
  }

  ////////////////////////

  render(){
    console.log('app started');

    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Blogs" component={Blogs} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Delete" component={Delete} />
        <Stack.Screen name="Menu" component={Menu} />
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
