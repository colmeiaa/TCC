import React, { Component } from 'react';
import { Card } from 'react-native-elements'
import { View, FlatList,  StyleSheet, Image, SafeAreaView, Text } from 'react-native';
 

export default class tips extends Component {
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>
            Hello world
          </Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
