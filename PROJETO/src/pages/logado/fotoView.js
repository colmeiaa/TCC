import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
let {width} = Dimensions.get('window')

export default function FotoView({ route }){
    const { fotoPerfil } = route.params;
    const { nome } = route.params;
    const { img } = route.params;
    const { descr } = route.params;
    
        return(
            <View style={styles.container}>

                <View style={{flexDirection:'row'}}>
                    <Image 
                    style={styles.avatar}
                    source={{uri: fotoPerfil}}
                    />
                    <View style={{justifyContent:'center'}}>
                        <Text style={styles.nome}>{nome}</Text>
                    </View>

                </View>
                <View>
                    <Image
                    style={styles.foto} 
                    source={{uri: img}}
                    />
                </View>
                    <View   style={{margin:5}}>
                            <Text style={{fontWeight:'bold', fontSize:15}}>{nome}</Text>
                            <Text style={{flexWrap:'wrap'}}>{descr}</Text>
                    </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }, 
    foto: {
        width:width,
        height:width,
      },
      avatar: {
        width:45,
        height:45,
        borderRadius:90 /2,
        margin:5,
        alignSelf:'center'
      },
      nome:{
          fontSize:15,
          fontWeight:'bold'
      },
})