import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, Image, SafeAreaView } from 'react-native';
let {width,height} = Dimensions.get('window')



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
      <SafeAreaView style={styles.container}>
        <View style={{flex:1}}>
              {/* PARTE DO HEADER */}
                {/* <View style={styles.heeader}>
                  {this.state.data.filter(function(item){
                return item.id == 1}).map((data) => (
                    <Text key={data.id} style={{fontWeight:'bold', fontSize:20}}>{data.nome}</Text>
                ))}
                </View> */}
          
        <FlatList
          numColumns={numberGrid} 
          data={this.state.data.filter(function(item){
            return item.id == 2 ;
          })} 
          renderItem={({ item })=> (
            <View style={{flex:1}}>

              {/* PARTE RENDER TOP PERFIL */}
              <View style={{flex:1}}>
              { this.state.data.filter(function(item){
                return item.id == 2;
              }).map((data) => (
                
                <View key={data.id}>
                          <View style={{flexDirection: 'row'}}>
                            <Image 
                            key={data.id}
                            style={styles.avatar}
                            source={{ uri: data.fotoPerfil}}
                            />
                            <View style={{justifyContent:'center'}}>
                                <View key={data.id}>
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

                  {/* PARTE RENDER IMAGENS */}
                      <View style={{flex:1,flexDirection:'row', flexWrap:'wrap'}}>
                      {item.publicacoes.map(index => (
                        <View key={index.key}>
                      <TouchableOpacity 
                        key={index.key}
                        onPress={ () => this.props.navigation.navigate('FotoView',
                        {
                          fotoPerfil: item.fotoPerfil,
                          nome:  item.nome,
                          img: index.img,
                          descr: index.descricao
                        })}
                        >

                            <View>
                                <Image 
                                key={index.key}
                                // style={{flex:1, height: undefined, width: undefined}}
                                style={styles.itemImage}
                                source={{uri: index.img}}
                                />
                            </View>

                      </TouchableOpacity>
                    </View>
                      ))}
                  </View>
                  
            </View>
            
          )} 


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
    heeader: {
      justifyContent:'center',
      alignItems:'center',
    },
    itemImage: {
      width:width / 3,
      height:(height / 3) / 2 ,
      justifyContent: 'space-between',

      // width: itemWidth,
      // height: itemWidth,
      // justifyContent: 'space-between',
      // margin:1,
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