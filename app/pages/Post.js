import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('TestDB');

export default class Post extends Component {

  /* Mas componentes truchos de youtube */

  state = { name: '' }
  state = { age: '' }

  insert(name, age){
    var query = "INSERT INTO tbl_test (id,name,age) VALUES (null,?,?)";
    var params = [name, age];
    db.transaction((tx) => {
      tx.executeSql(query, params, (tx, results) => {
        console.log(results);
        Alert.alert("Sucess", "It has been saved");
      }, function (tx, err) {
        Alert.alert("Warning", "has not been saved");
        return;
      });
    });
  }
  handleSave() {
    const { name } = this.state;
    const { age } = this.state;

    if (name != "" && age != ""){
      this.insert(name, age);
    } else {
      Alert.alert("Warning", "has not been saved");
    }
  }

  /* Mas componentes truchos de youtube */

  render(){
    return (
      <View style={styles.container}>

        <Text>Post Page</Text>

        <Input
          onChangeText={(val) => this.setState({ name: val })} value={this.state.name}
          placeholder="Name"
          leftIconContainerStyle={{ marginRight: 15 }}
          inputContainerStyle={{ width: 330, marginTop: 45, marginLeft: 60 }}
        />

        <Input
          onChangeText={(val) => this.setState({ age: val })} value={this.state.age}
          placeholder="Age"
          leftIconContainerStyle={{ marginRight: 15 }}
          inputContainerStyle={{ width: 330, marginTop: 45, marginLeft: 60, marginBottom: 20 }}
        />

        <Button
          onPress= {() => {
            this.handleSave();
          }}
          title="Save information"
        />

        <StatusBar style="auto" />

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