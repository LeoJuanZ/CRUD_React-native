import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Blogs extends Component {
    render(){
        return (
            <View style={styles.container}>
              <Text>Open up App.js to start working on your app!</Text>
              <Button title='Go to Edit' onPress={() => this.props.navigation.navigate('Edit')} />
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