//Import dependencies
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import db from './app/FireBase'
//Firebase CRUD
import reducers from './app/reducers'

//Pages
import Blogs from './app/pages/Blogs';
import Edit from './app/pages/Edit';
import Post from './app/pages/Post';

//APP
/////////////////
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {
  render(){
    db.collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
    console.log('app started');

    const state = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={state}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Blogs">
            <Stack.Screen name="Blogs" component={Blogs} />
            <Stack.Screen name="Edit" component={Edit} />
            <Stack.Screen name="Post" component={Post} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
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
