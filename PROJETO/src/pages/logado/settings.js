import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, Image, SafeAreaView } from 'react-native';
let {width} = Dimensions.get('window')

let numberGrid = 3
let itemWidth = width / numberGrid

export default class settings extends Component {
  
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
      <SafeAreaView style={{flex: 1}}>
        
        <View>
        { this.state.data.filter(function(item){
          return item.id == 1;
        }).map((data) => (
         console.log(data),
            <View key={data.id}ystyle={{ marginTop: 15, marginLeft: 10}}>
                    <View style={{flexDirection: 'row'}}>
                      <Image 
                      style={styles.avatar}
                      source={{ uri: data.fotoPerfil}}
                      />
                      <View style={{marginLeft:10, justifyContent:'center'}}>
                          <View  key={data.id}>
                            <Text style={styles.fontsizeNome}>{data.nome}</Text>
                          </View>
                          <View>
                            <Text style={styles.fontsize}>{data.email}</Text>
                          </View>
                      </View>
                    </View>
                </View>
          ))}
        </View>
        
       <FlatList  
        numColumns={numberGrid} 
        data={this.state.data.filter(function(item){
          return item.id == 1;
        })} 
        key={ item => item.id }
        renderItem={({item})=> (
          console.log("--------" +item.id+"--------"),
          
          <TouchableOpacity 
          onPress={ () => this.props.navigation.navigate('DetailExplo',
          {
            username: item.usuario,
            name: item.nome,
            img: item.fotoPerfil,
            country: item.endereco,
            state: item.endereco,
          })}
          >
            <View>
              <FlatList 
              style={{marginTop: 15}}
              numColumns={numberGrid}
              data={this.state.data.filter(function(item){
                return item.id == 1;
              })}
              keyExtractor={ item => String(item.id) }
              renderItem={({ item }) => (
              <Image 
                style={styles.itemImage}
                source={{ uri: item.fotoPerfil}}
                />
              )}
              />
            </View>

          </TouchableOpacity>
          
          )} 
          // refreshing={this.state.refreshing}
          // onRefresh={this.handleRefresh}
          />
       </SafeAreaView> 
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    itemImage: {
      width: itemWidth,
      height: itemWidth,
      justifyContent: 'space-between'
    },
    
    avatar: {
      width:120,
      height:120,
      borderRadius:65,
      margin: 10
    },

    fontsize: {
      fontSize:20
    },

    fontsizeNome: {
      fontSize:25,
      fontWeight: 'bold'
    }
})