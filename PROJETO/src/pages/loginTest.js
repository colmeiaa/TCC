import React, { Component } from 'react';
import api from './api';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  AsyncStorage,
} from 'react-native';

export default class App extends Component {
  state = {
    usuario: null,
    errorMessage: '',
  };

  signIn = async () => {
    try {
      console.log("error")
      const response = await api.post('/results', {
        email: 'gabrielmk@gmail.com',
        password: '123456',
      }).success(function(ahe){
        console.log("sucesspo")
        response.ok
        Alert.alert('Logado com sucesso!');
        this.props.navigation('home')
      }).error(function(sts){
        Alert.alert('erro' + sts);
        console.log("erro: "+ sts)
      });


    } catch (err) {
      this.setState({ errorMessage: err.data.error });
      Alert.alert('Erro aqui '+err);
    }
  };

  async componentDidMount() {
    await AsyncStorage.clear();

    // const id = await AsyncStorage.getItem('@CodeApi:id');
    const usuario = JSON.parse(await AsyncStorage.getItem('@CodeApi:usuario')) || null;

    if (usuario) 
      this.setState({ usuario: usuario });
  }

  render() {
    return (
      <View style={styles.container}>
        { !!this.state.errorMessage && <Text>{this.state.errorMessage}</Text> }
        { this.state.usuario
          ? <Button onPress={this.getProjectList} title="Carregar projetos" />
          : <Button onPress={this.signIn} title="Entrar" /> }

        {/* { this.state.projects.map(project => (
          <View key={project._id} style={{ marginTop: 15 }}>
            <Text style={{ fontWeight: 'bold' }}>{project.title}</Text>
            <Text>{project.description}</Text>
          </View>
        ))} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});