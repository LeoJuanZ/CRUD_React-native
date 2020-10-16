import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Post extends Component {
  state={
    title: "",
    content:"",
  }
  render(){
    return (
        <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput placeholder="title" onChangeText={title => thix.setState({title})} />
        </View>
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