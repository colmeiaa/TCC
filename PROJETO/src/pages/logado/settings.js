import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
let {width} = Dimensions.get('window')

let numberGrid = 3
let itemWidth = width / numberGrid

export default class settings extends Component {
  
  constructor(props) {
    super(props);

    this.state ={
      dataInfo: [],
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
          dataInfo: res.results || [],
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

  //   var firebaseConfig = {
  //       apiKey: "AIzaSyA8_2nds6T3AZuuhNKdmTdE0zDim5JsQo8",
  //       authDomain: "appteste-d6f8f.firebaseapp.com",
  //       databaseURL: "https://appteste-d6f8f.firebaseio.com",
  //       projectId: "appteste-d6f8f",
  //       storageBucket: "appteste-d6f8f.appspot.com",
  //       messagingSenderId: "528755303869",
  //       appId: "1:528755303869:web:11955e0e9f50c75b061ed4"
  //     };
  //     // Initialize Firebase
  //     if ( ! firebase . apps . length ) {
  //       firebase . initializeApp (firebaseConfig);
  //  }
}

      tryLoginOut(){
        const loginOutSucess = user => {
            console.log('Deu certo DESLOGAR')
            this.props.navigation.navigate('Login');
        }

        firebase.auth().signOut()
          .then(loginOutSucess);
      }

      renderButtom(){
        return(
            <TouchableOpacity 
            style={styles.button}
            onPress={ () => this.tryLoginOut() }
            > 
            <Text style={styles.txtButton}>
                LoginOut
            </Text>
            </TouchableOpacity>
        );
      };


  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
      <FlatList 
      data={this.state.dataInfo}
      keyExtractor={ item => item.login.md5}
      renderItem={({ item }) => (
        <Text>
          {item.name.first}
        </Text>
      )}
      />
     
       <FlatList  
        // style={{marginBottom: 70}}
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
})