import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default class FabButtom extends Component {
    render(){
        return(
            <View style={[styles.container, this.props.style]}>
                <TouchableOpacity>
                   <Animated.View style={[styles.buttom, styles.menu]}>
                    <AntDesign name="plus" size={20} color="#fff"/>
                   </Animated.View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        position: 'absolute'
    },
    buttom: {
        position: 'absolute',
        width:60,
        height:60,
        borderRadius: 60 / 2,
        justifyContent:'center',
        alignItems:'center',
        shadowRadius: 10,
        shadowColor: '#00213B',
        shadowOpacity: 0.3,
        shadowOffset: {
            height:10,
        }
    },
    menu: {
        backgroundColor: '#3CB371'
    }
})