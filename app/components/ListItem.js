import React, { Component } from 'react';
import { ScrollView, Text, Alert, View, TextInput } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('TestDB');

const { render } = require("react-dom");

export default class ListItem extends Component {

    state = { allData: [], search: '' };

    async componentDidMount(){
        const { search } = this.state;
        await this.fetchData(search);
    }

    async handleSearch(val){
        this.setState({ search: val });
        await this.fetchData(val);
    }

    fetchData(search) {
        var query = "SELECT * FROM tbl_test WHERE name LIKE '%" + search + "%'";
        var params = [];
        db.transaction((tx) => {
            tx.executeSql(query, params, (tx, results) => {
                console.log(results);
                if(results.rows._array.length > 0){
                this.setState({
                    allData: results.rows._array
                });
                }
            }, function(tx, err) {
                Alert.alert("Welcome");
            });
        });
    }

    render(){
        {/* Mas componentes truchos de youtube */}

        const listItem = this.state.allData.map((item) =>
        <View key={item.id}>
            <View>
                <Text>{item.name}</Text>
            </View>
            <View>
                <Text>{item.age}</Text>
            </View>
        </View>
        )

        {/* Mas componentes truchos de youtube */}

        return(
            <ScrollView>
                <View>
                    <TextInput
                        onChangeText={(val) => this.handleSearch(val)} value={this.state.search} value={this.state.search}
                    />
                    {listItem}
                </View>
            </ScrollView>
        )
    }
}