import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, Image, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
          return item.id == 2;
        }).map((data) => (
         console.log(data),
            <View key={data.id} style={{ marginTop: 15, marginLeft: 10}}>
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
          return item.idade == 21;
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
            <Image 
            style={styles.itemImage}
            source={{ uri: item.fotoPerfil}} 
            />

          </TouchableOpacity>
          
          )} 
           refreshing={this.state.refreshing}
           onRefresh={this.handleRefresh}
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
      width:100,
      height:100,
      borderRadius:65,
      margin: 10
    },

    fontsize: {
      fontSize:15
    },

    fontsizeNome: {
      fontSize:20,
      fontWeight: 'bold'
    }
})