import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Axios from "axios";

export default function Upload() {
  const [fotoPerfil, setfotoPerfil] = useState();

  async function imagePickerCall() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      
      if (status !== "granted") {
          alert("Nós precisamos dessa permissão.");
          return;
        }
    }
    
    const data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    
    if (data.cancelled) {
        return;
    }
    
    if (!data.uri) {
        return;
    }
    
    setfotoPerfil(data);
}

   function uploadImage() {
    const data = new FormData();

    data.append("fotoPerfil", {
      uri: fotoPerfil.uri,
    //   type: fotoPerfil.type
    });

    fetch('http://localhost:3000/results/1',{
        method: 'patch',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: data
        }).then(response => {
          console.log("image uploaded")
        }).catch(err => {
          console.log(err)
        });  
      
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: fotoPerfil
            ? fotoPerfil.uri
            : "https://w7.pngwing.com/pngs/831/216/png-transparent-computer-icons-youtube-youtube-logo-profile-avatar-area.png"
        }}
        style={styles.fotoPerfil}
      />
      <TouchableOpacity style={styles.button} onPress={imagePickerCall}>
        <Text style={styles.buttonText}>Escolher imagem</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={uploadImage}>
        <Text style={styles.buttonText}>Enviar imagem</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 3,
    backgroundColor: "#7159c1",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  fotoPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});