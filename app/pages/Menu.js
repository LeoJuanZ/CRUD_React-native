import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';

export default class Delete extends Component {
    render(){
        return (
            <View style={styles.container}>

              <Text>PRINCIPAL MENU</Text>

              <View style={styles.container}>
                <Button title='Go to Blogs' onPress={() => this.props.navigation.navigate('Blogs')} />
              </View>

              <View style={styles.container}>
                <Button title='Go to Post' onPress={() => this.props.navigation.navigate('Post')} />
              </View>

              <View style={styles.container}>
                <Button title='Go to Edit' onPress={() => this.props.navigation.navigate('Edit')} />
              </View>

              <View style={styles.container}>
                <Button title='Go to Delete' onPress={() => this.props.navigation.navigate('Delete')} />
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: '100%'
  }
});