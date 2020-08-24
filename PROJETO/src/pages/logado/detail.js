import React from 'react';
import { View, Text, StyleSheet, Image }  from 'react-native';

export default function detail( { route } ){

  const { username } = route.params;
  const { title } = route.params;
  const { name } = route.params;
  const { img } = route.params;
  const { lastName } = route.params;
  const { email } = route.params;
  const { location } = route.params;
  const { locationNumber } = route.params;
  const { city } = route.params;
  const { country } = route.params;
  const { state } = route.params;
  
  return (
      <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image 
              style={styles.avatar}
              source={ { uri: img} }
            />
              <Text style={styles.txt}>Olá {username}</Text>

              <Text>
                <Text style={{fontWeight: 'bold', fontSize:20}}>Nome: </Text>
                <Text style={styles.txtInfo}>{title} {name} {lastName}</Text>
              </Text>

              <Text>
                <Text style={{fontWeight: 'bold', fontSize:20}}>Email: </Text>
                <Text style={styles.txtInfo}>{email}</Text>
              </Text> 

              <Text>
                <Text style={{fontWeight: 'bold', fontSize:20}}>Endereço: </Text>
                <Text style={styles.txtInfo}>{location}, N°{locationNumber}</Text>
              </Text>

              <Text>
                <Text style={{fontWeight: 'bold', fontSize:20}}>Cidade: </Text>
                <Text style={styles.txtInfo}>{city}</Text>
              </Text>

              <Text>
                <Text style={{fontWeight: 'bold', fontSize:20}}>Estado: </Text>
                <Text style={styles.txtInfo}>{state}</Text>
              </Text>

              <Text>
                <Text style={{fontWeight: 'bold', fontSize:20}}>País: </Text>
                <Text style={styles.txtInfo}>{country}</Text>
              </Text>
        
        </View>
       )
}

const styles = StyleSheet.create({
  
  avatar: {
    height:250,
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
  }
})