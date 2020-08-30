import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';
let {width} = Dimensions.get('window')

let numberGrid = 3
let itemWidth = width / numberGrid
export default class explorer extends Component {
    
  constructor(props) {
    super(props);

    this.state ={
      data: [],
      refreshing: false
    }
  };

    loadUsers = () => {

      fetch('https://randomuser.me/api/?results=40')
        .then( res => res.json() )
        .then( res => {
          this.setState({
            data: res.results || [],
            refreshing: false,
          })
        })
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true,
      },
      () => {
        this.loadUsers();
      }
    )
  };

  componentDidMount(){
    this.loadUsers();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={{fontSize:30, fontWeight: 'bold'}}>
            Explorer
          </Text>
        <FlatList  
          style={{marginBottom: 70}}
          numColumns={numberGrid} 
          data={this.state.data} 
          renderItem={({ item })=> (
            <TouchableOpacity 
            onPress={ () => this.props.navigation.navigate('DetailExplo',
            {
              username: item.login.username,
              name: item.name.first,
              lastName: item.name.last,
              img: item.picture.large,
              country: item.location.country,
              state: item.location.state,
            })}
            >
              <View>
              <Image 
                style={styles.itemImage}
                source={{ uri: item.picture.large}}
              />
            </View>

            </TouchableOpacity>
          )} 
          
          keyExtractor={ item => item.login.uuid} 

          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          />

      </View>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemImage:{
    width: itemWidth,
    height: itemWidth,
    justifyContent: 'space-between'
  }
});