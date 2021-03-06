import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';


export default class home extends Component {
  
  constructor(props) {
    super(props);

    this.state ={
      data: [],
      refreshing: false
    }
  };

  loadUsers = () => {

    // fetch('https://randomuser.me/api/?results=15')
    fetch( 'http://localhost:3000/results')
        .then( res => res.json() )
        .then( res => {
          this.setState({
            data: res,
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
      <View style={{justifyContent:'center',alignItems:'center'}}>
             <Text style={styles.txt}>
                  AcampApp
             </Text>
             
        <FlatList 
        // style={{marginBottom:15}}
        data={this.state.data}
        keyExtractor={ item => String(item.id)}
        renderItem={({ item }) => (

          <View>
            {/* <TouchableOpacity 
          onPress={ () => this.props.navigation.navigate('Detail', 
          {
            img: item.picture.thumbnail,
            title: item.name.title, 
            name: item.name.first, 
            lastName: item.name.last,
            email: item.email,
            location: item.location.street.name,
            locationNumber: item.location.street.number,
            city: item.location.city,
            state: item.location.state,
            country: item.location.country,
            username: item.login.username
          }
            )}
          > */}
          <View style={{alignItems:"center"}}>
            <View style={styles.line}> 
              <Image 
                style={styles.avatar}
                // source={{ uri: item.picture.thumbnail}}
                source={{ uri: item.fotoPerfil}}
              />

              <View style={styles.info}>
                {/* <Text style={styles.name}> {item.name.first} {item.name.last}</Text> */}
                <Text style={styles.name}> {item.nome}</Text>
                {/* <Text style={styles.email}> {item.location.city}{","} {item.location.state} </Text> */}
                <Text style={styles.email}> {item.endereco} </Text>
              </View>
            </View>
            
          </View>
          
        {/* </TouchableOpacity> */}
            
            <View style={{alignItems: 'center'}}>
              <Image 
                style={styles.foto}
                source={{ uri: item.fotoPerfil}}
              />
            <View style={{ borderBottomColor: "#ccc",borderBottomWidth: 0.8, alignSelf:"stretch"}}>
              <Text style={{padding:5, marginBottom:15}}>{item.descricao}</Text>
            </View>
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

  txt: {
    fontSize:30,
    fontWeight:'bold',
    padding:10,
  },

  line: {
    height: 60,
    flexDirection:'row',
    // borderBottomColor: '#ccc',
    // borderBottomWidth:1,
  },

  avatar: {
    width:40,
    height:40,
    borderRadius:50,
    marginRight:5,
    alignSelf:'center'
  },
  
  info: {
    width: 300,
    flexDirection:'column',
    justifyContent:'center',
  },

  name: {
    fontSize:15,
    fontWeight: "bold",
  },

  email: {
    fontSize:12,
  },

  foto: {
    width:300,
    height:300,
  }

})