import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity,FlatList } from 'react-native';


export default class Camping extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      refreshing: false,
    }
  };

  loadUsers = () => {

    fetch('http://localhost:3000/results?_embed=tasks')
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
          refreshing: false,
        })
      })
      .catch((error) => {
        console.log(error)
      });
  };

  componentDidMount() {
    this.loadUsers();
  };
  
  render(){
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <View style={{ padding: 5 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            Camping List
          </Text>
        </View>

        <View style={{flex:1}}>
           <FlatList 
           data={this.state.data.filter(function(item){
             return item.id == 1; 
           })}
           keyExtractor={item  => String(item.id)}
           renderItem={ ({ item }) => (
             <View style={{flex:1}}>

                <View>
                  { item.notepad.map( index => (
                    <TouchableOpacity
                    key={index.id}
                    onPress={ () => this.props.navigation.navigate('PageCamping',
                    {
                      conteudo: index.conteudo,
                      id: index.id,
                      data: item
                    })}
                    >
                      <View key={index.id} style={styles.card}>
                        <Text>{index.id}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>

            </View>
           )}
           />
        </View>

        {/* <FlatList 
        data={this.state.data.filter(function (item) {
          return item.id = 1;
        })}
        renderItem={({ item }) => (


        )}
        /> */}
      </SafeAreaView>

    )
  }
}


const styles = StyleSheet.create({
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    flex: 1
  },
  card: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
    margin: 5,
  },
  font: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});