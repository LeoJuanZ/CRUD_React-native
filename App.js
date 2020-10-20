import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Alert, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SQLite from 'expo-sqlite';

import ListItem from './app/components/ListItem'
import Blogs from './app/pages/Blogs';
import Edit from './app/pages/Edit';
import Post from './app/pages/Post';
import { TextInput } from 'react-native-gesture-handler';

const db = SQLite.openDatabase('TestDB');

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {

  // Tuto trucho de youtube //

  // state = { allData: [], search: '' };

  async componentDidMount(){ //componentWillMount
    db.transaction(tx => {
      tx.executeSql(
        'Create table if not exists tbl_test (id integer primary key not null, name text, age text);'
      );
    });
    this.setState({ loading: false })
  }

  // async componentDidMount(){
  //   const { search } = this.state;
  //   await this.fetchData(search);
  // }

  // async handleSearch(val){
  //   this.setState({ search: val });
  //   await this.fetchData(val);
  // }

  // fetchData(search) {
  //   var query = "SELECT * FROM tbl_test WHERE name LIKE '%" + search + "%'";
  //   var params = [];
  //   db.transaction((tx) => {
  //     tx.executeSql(query, params, (tx, results) => {
  //       console.log(results);
  //       if(results.rows._array.length > 0){
  //         this.setState({
  //           allData: results.rows._array
  //         });
  //       }
  //     }, function(tx, err) {
  //       Alert.alert("Welcome");
  //     });
  //   });
  // }

  ////////////////////////

  render(){
    console.log('app started');

      {/* Mas componentes truchos de youtube */}

      // const listItem = this.state.allData.map((item) =>
      //   <View key={item.id}>
      //     <View>
      //       <Text>{item.name}</Text>
      //     </View>
      //     <View>
      //       <Text>{item.age}</Text>
      //     </View>
      //   </View>
      // )

      {/* Mas componentes truchos de youtube */}

    return (
      <NavigationContainer>
        
      {/* <ScrollView>
        <View>
          <TextInput
            onChangeText={(val) => this.handleSearch(val)} value={this.state.search} value={this.state.search}
          />
          {listItem}
        </View>
      </ScrollView> */}

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
