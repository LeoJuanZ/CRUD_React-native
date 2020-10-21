import React, { Component } from 'react';
import { ScrollView, Text, Alert, View, StyleSheet } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';
import { Collapse, CollapseHeader, CollapseBody }
  from 'accordion-collapse-react-native';
import { ListItem, Separator } from 'native-base';
import IconF from 'react-native-vector-icons/FontAwesome';
import * as SQLite from 'expo-sqlite';

// CONST PARA DELETE

const AlertMsg = 'Are you sure you want to delete the information?';
const AlertCancel = 'You have cancelled the deletion';

//

// DataBase starts
const db = SQLite.openDatabase('TestDB');

const { render } = require("react-dom");

export default class ListItems extends Component {

    // Estado para el search bar
    state = { allData: [], search: '' };

    async componentDidMount(){
        const { search } = this.state;
        await this.fetchData(search);
    }

    async handleSearch(val){
        this.setState({ search: val });
        await this.fetchData(val);
    }

    //Principal funcion para search bar
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

    //Delete function
    deleteData(id){
        var query = "DELETE FROM tbl_prueba WHERE id = ?";
        var params = [id];
        db.transaction((tx) => {
            tx.executeSql(query, params, (tx, results) => {
                Alert.alert("Successs", "It has been removed correctly");
            }, function(tx, err){
                Alert.alert("Warning", "It has not been removed" + err);
            });
        });
    }

    async handleDelete(){
        const { search } = this.state;
        await this.deleteData(id);
        this.fetchData(search);
    }
    ///////////////////////////////

    render(){
        {/* Mapeado de la lista de objetos a mostrar */}

        const listItem = this.state.allData.map((item) =>
        <View key={item.id}>
            <Collapse style={{ marginTop: 10, marginBottom: 10 }}>
                <CollapseHeader>
                    <Separator bordered>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 14, color: '#000000' }}>{item.name}</Text>
                            <Button
                                onPress={() => 
                                    Alert.alert('WARNING', AlertMsg, [
                                        { text: 'Cancel', onPress: () => Alert.alert(AlertCancel) },
                                        { text: 'Ok', onPress: () => this.handleDelete(item.id) },
                                    ])
                                }
                                icon= {<IconF name='trash' color='white' size={21}/>}
                                buttonStyle= {{ height: 25, width: 80, backgroundColor: 'gray', marginLeft: 15 }}
                                titleStyle= {{ fontSize: 12, color: 'white' }}
                                title= ' Borrar'
                            />
                        </View>
                    </Separator>
                </CollapseHeader>
                <CollapseBody>
                    <ListItem style={{ marginBottom: 3, marginTop: 3 }} >
                        <Text><Text> Name : </Text> {item.name} </Text>
                    </ListItem>
                    <ListItem style={{ marginBottom: 3, marginTop: 3 }} >
                        <Text><Text> Age : </Text> {item.age} </Text>
                    </ListItem>
                </CollapseBody>
            </Collapse>
        </View>
        )

        {/* //////////////////////////////// */}
        return(
            <ScrollView>
                <View>
                    
                    <SearchBar
                        platform={"ios"}
                        placeholder="Search by name"
                        onChangeText={(val) => this.handleSearch(val)} value={this.state.search} value={this.state.search}
                        containerStyle={{ backgroundColor: 'none', marginTop: 10 }}
                    />

                    {listItem}

                </View>
            </ScrollView>
        )
    }
}