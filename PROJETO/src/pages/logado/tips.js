import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native';
let {width} = Dimensions.get('window')

let numberGrid = 2
let itemWidth = width / numberGrid

const data = [
  {
    id: '1',
    title: 'Barraca',
    src: require('../../images/barraca.jpg'),
  },
  {
    id: '2',
    title: 'Fogueira',
    src: require('../../images/fogueira.jpg'),
  },
  {
    id: '3',
    title: '',
    src: require('../../images/fogueira.jpg'),
  },
  {
    id: '4',
    title: '',
    src: require('../../images/fogueira.jpg'),
  },
  {
    id: '5',
    title: 'Second Item',
    src: require('../../images/fogueira.jpg'),
  },
  {
    id: '6',
    title: 'Third Item',
    src: require('../../images/fogueira.jpg'),
  },
];
export default class camping extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <View style={{flex: 1}}>
              <View style={{alignItems: 'center', marginTop: 10}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>
                    Aqui é são suas CAMPING
                  </Text>
              </View>
            <FlatList 
            data={data}
            keyExtractor={ item => item.id}
            numColumns={numberGrid}
            renderItem={ ({ item }) => (
              <TouchableOpacity 
              onPress={ () => {}}>
                <View >
                  <Image 
                  style={styles.itemImage}
                  source={item.src}
                  />
                </View>
              </TouchableOpacity>
            )}
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
    justifyContent: 'space-between',
    margin: 1,
    // backgroundColor: "blue"
  },
  photo: {
    width: 180,
    height: 180
  }
});