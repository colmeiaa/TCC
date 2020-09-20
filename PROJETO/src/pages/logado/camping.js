import React, { Component } from 'react';
import { View, FlatList, Text,  StyleSheet, SafeAreaView} from 'react-native';

export default class camping extends Component {
  
  constructor(props) {
    super(props);
  
    this.state ={
      data: [],
      refreshing: false
    }
  };

  loadUsers = () => {

    fetch('http://localhost:3000/results')
      .then( res => res.json() )
      .then( res => {
        this.setState({
          data: res,
          refreshing: false,
        })
      })
      .catch((error) => {
        console.log(error)
      });
    };

    componentDidMount(){
      this.loadUsers();
      };
  

  render() {
    return (
      <SafeAreaView stlye={{flex:1}}>

        <View>
            { this.state.data.filter(function(item){
              return item.id == 1;
            }).map((data) => (
              console.log("passou do 1° view"),
              <View key={data.id}>
              <Text style={{fontSize:20, fontWeight: 'bold'}}> 
                Meu nome {data.nome} minha id {data.id}
              </Text>
            </View>
            ))
          } 
        </View>
              <View>
                  <FlatList
                  data={this.state.data.filter(function(item){
                    return item.id == 1;
                  })}
                  keyExtractor={item => item.toString()}
                  renderItem={ ({ item }) => (
                    console.log("passou do flatlist"),

                    <View style={{flex:1, marginTop:10}}>
                      <Text> Olá {item.id} | {item.nome} | {item.email}</Text>
                    </View>

                  )}
                  />
              </View>
      </SafeAreaView>
      
    )
  }
}


const styles = StyleSheet.create({
  
});