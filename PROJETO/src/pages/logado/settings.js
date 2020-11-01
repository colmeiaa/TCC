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
            return item.id == 1 ;
          })} 
          renderItem={({ item })=> (
            <View style={{flex:1}}>

              {/* PARTE RENDER TOP PERFIL */}
              <View style={{flex:1}}>
              { this.state.data.filter(function(item){
                return item.id == 1;
              }).map((data) => (
                
                <View key={data.id}>
                          <View style={{flexDirection: 'row'}}>
                            <Image 
                            key={data.id}
                            style={styles.avatar}
                            source={{ uri: data.fotoPerfil}}
                            />

                              <View style={{justifyContent:'center',flex:3, marginRight:15}}>
                                    <View key={item.id} style={{alignContent:'center',flexDirection:'row'}}>
                                        <View style={{flexDirection:'column', alignItems:'center', flex:1}}>
                                            <Text style={styles.fontNumbers}>2345</Text>
                                            <Text style={styles.fontCabecalho}>Post</Text>
                                        </View>
                                        <View style={{flexDirection:'column',alignItems:'center', flex:1}}>
                                            <Text style={styles.fontNumbers}>2345</Text>
                                            <Text style={styles.fontCabecalho}>Followers</Text>
                                        </View>
                                        <View  style={{flexDirection:'column', alignItems:'center', flex:1}}>
                                            <Text style={styles.fontNumbers}>23455</Text>
                                            <Text style={styles.fontCabecalho}>Following</Text>
                                        </View>
                                     </View>
                               </View>
                            
                          </View>

                            <View style={{justifyContent:'center',marginBottom:10,marginLeft:10}}>
                                <View key={data.id}>
                                  <Text style={styles.fontsizeNome}>{data.nome}</Text>
                                </View>
                                <View style={{marginTop:5}}>
                                  <Text style={styles.fontDesc}>{data.descricaoPerfil}</Text>
                                </View>
                            </View>

                            <TouchableOpacity 
                            style={styles.botaoEdit}
                            onPress={ () => this.props.navigation.navigate('Editar')}
                            >
                              <Text>Editar Profile</Text>
                            </TouchableOpacity>

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
      width:90,
      height:90,
      borderRadius:65,
      margin: 10
    },

    fontNumbers: {
      fontSize:16,
      fontWeight:'bold'
    },

    fontCabecalho:{
      fontSize:16,
    },

    fontDesc:{
      fontSize:16
    },

    fontsizeNome: {
      fontSize:18,
      fontWeight: 'bold'
    },

    botaoEdit: {
      borderColor:'#ccc',
      borderWidth:1,
      borderRadius:15,
      padding:6,
      alignItems:'center',
      margin:10
    }
})