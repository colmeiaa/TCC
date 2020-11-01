import React from 'react';
import { View, Text, StyleSheet, Image,  ScrollView, Dimensions, TouchableOpacity}  from 'react-native';
let {width,height} = Dimensions.get('window')



let numberGrid = 3
let itemWidth = width / numberGrid

export default function detail( { navigation, route } ){

  const { data } = route.params;
  const { fotoPerfil } = route.params;
  const { feed } = route.params;
  const { nome } = route.params;

  
  return (
    <View style={styles.container}>
        <ScrollView style={{flex:1}}>

          <View style={{flex:1}}>
              <View style={{flex:1, alignItems:'center', margin:10}}>
                <Image
                style={styles.avatar}
                source={{uri: fotoPerfil}}
                />
                <View style={{justifyContent:'center', margin:10}}>
                  <Text style={{fontSize:25, fontWeight:'bold'}}>{nome}</Text>
                </View>
              </View>
          </View>

              <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
                { feed.map( index => (
                  // <TouchableOpacity key={index.key}>
                    <Image
                    key={index.key}
                    style={styles.itemImage}
                    source={{uri: index.img}}
                    />
                  // </TouchableOpacity>
                ))}
              </View>
          </ScrollView>
        </View>

       );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  avatar: {
    height:125,
    borderRadius:150,
    marginRight:5,
    aspectRatio: 1,
  },

  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    margin:15,
  },
  txtInfo: {
    fontSize: 18,
    flexDirection:'row',
  },
  itemImage:{
    width:width / 3,
    height:(height / 3) / 2 ,
    justifyContent: 'space-between',
  },
})