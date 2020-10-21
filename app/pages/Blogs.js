import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import ListItems from '../components/ListItems'

export default class Blogs extends Component {
  render(){
    return (
      <View style={styles.container}>

        <ListItems />

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
    padding: 5,
  }
});