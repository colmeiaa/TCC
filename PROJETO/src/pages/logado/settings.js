import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
let {width} = Dimensions.get('window')

const index = 1
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

      // tryLoginOut(){
      //   const loginOutSucess = user => {
      //       console.log('Deu certo DESLOGAR')
      //       this.props.navigation.navigate('Login');
      //   }
      // }

      // renderButtom(){
      //   return(
      //       <TouchableOpacity 
      //       style={styles.button}
      //       onPress={ () => this.tryLoginOut() }
      //       > 
      //       <Text style={styles.txtButton}>
      //           LoginOut
      //       </Text>
      //       </TouchableOpacity>
      //   );
      // };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        
        
        { this.state.data.map((data) => (
          // const first = data.id.filter(item => item.id --'id'[1]);
          
          //console.log(data),
        //  function(listaData){
        //   listaData.map((dt) =>{
        //     console.log(dt)
        //   })
        //  },
          <View keyExtractor={ data => data.id === 'id'+[1]} style={{ marginTop: 15, marginLeft: 10}}>
                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                      <Image 
                      style={styles.avatar}
                      source={{ uri: data.fotoPerfil}}
                      />
                      <View style={{flexDirection:'column'}}>
                          <View  key={data.id} style={{paddingLeft:10}}>
                            <Text style={{ fontWeight: 'bold' }}>{data.nome}</Text>
                          </View>
                          <View style={{paddingLeft:10}}>
                            <Text>{data.email}</Text>
                          </View>
                      </View>
                    </View>
              </View>
          ))}
        
        <View style={styles.container}>

       <FlatList  
        numColumns={numberGrid} 
        data={this.state.data} 
        renderItem={({ item})=> (

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
              source={{ uri: item.fotoPerfil}}
            />
          </View>

          </TouchableOpacity>
          
        )} 
        
        keyExtractor={ item => item.id} 

        // refreshing={this.state.refreshing}
        // onRefresh={this.handleRefresh}
        />

        </View>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent:'center',
      alignItems:'center'
    },
    itemImage: {
      width: itemWidth,
      height: itemWidth,
      justifyContent: 'space-between'
    },

    item: {
      flex:1
    },
    
    avatar: {
      width:100,
      height:100,
      borderRadius:55,
      padding:5
    },
})