import React from 'react';
import { View, StyleSheet, TextInput,TouchableOpacity, Text, ActivityIndicator, Alert } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';

import FormRow from '../../components/FormRow'

export default class Login extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            email:'',
            password:'',
        }
    }

    componentDidMount(){

        var firebaseConfig = {
            apiKey: "AIzaSyA8_2nds6T3AZuuhNKdmTdE0zDim5JsQo8",
            authDomain: "appteste-d6f8f.firebaseapp.com",
            databaseURL: "https://appteste-d6f8f.firebaseio.com",
            projectId: "appteste-d6f8f",
            storageBucket: "appteste-d6f8f.appspot.com",
            messagingSenderId: "528755303869",
            appId: "1:528755303869:web:11955e0e9f50c75b061ed4"
          };
          // Initialize Firebase
          if ( ! firebase . apps . length ) {
            firebase . initializeApp (firebaseConfig);
       }
    }

    trySignIn(){
        const { email, password } = this.state;

        const loginUserFailed = error => {
          this.setState({
              message: this.getMessageByErrorCode(error.code)
          });
      }

        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then(() => {
          console.log(Alert.alert('Ssucesso','Usuário cadastrado, pode logar'));
        })
          .catch(loginUserFailed)
    }

    getMessageByErrorCode( errorCode ){
      switch( errorCode ){
          case 'auth/email-already-in-use': return 'Usuário já exixstente';
          case 'auth/invalid-email': return 'Email invalido';
          default:    return 'Erro desconhecido';
      }
  }


    onChangeHandler( field , value){        // Cuida dos inputs
        this.setState({
            [field] : value
        });
    }

    renderButtom(){
      if ( this.state.isLoading)
          return<ActivityIndicator style={{margin:15}}/>;

      return(

          <TouchableOpacity 
          style={styles.button}
          onPress={ () => this.trySignIn() }
          > 
          <Text style={styles.txtButton}>
              Cadastrar
          </Text>
          </TouchableOpacity>
      );
  };

  render(){
    return (
        <View style={styles.container}>
            
            <View style={{alignContent: 'center', alignItems: 'baseline', marginTop: 10}}>
                <Text style={{fontSize:16, fontWeight:'bold'}}>Email: </Text>
              <FormRow>
              <TextInput  
              style={styles.txtInput}
              // placeholder='email@email.com'
              value={this.state.email}
              onChangeText={ value => this.onChangeHandler( 'email', value)}
              keyboardType='email-address'
              />
              </FormRow>
            </View>


            <View style={{alignContent: 'center', alignItems: 'baseline', marginTop:10}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Nome completo:</Text>
              <FormRow>
                <TextInput 
                // placeholder="Nome Completo"
                style={styles.txtInput}
                />
              </FormRow>
            </View>

            <View style={{ alignContent: 'center', alignItems: 'baseline', marginTop:10}}>
                <Text style={{fontSize:16, fontWeight:'bold'}}>Senha: </Text>
                <FormRow>
                <TextInput  
                style={styles.txtInput}
                // placeholder='******'
                value={this.state.password}
                onChangeText={ value => this.onChangeHandler( 'password', value)}
                secureTextEntry={true}
                />
                </FormRow>
            </View>

            <View style={{alignContent: 'center', alignItems: 'baseline', marginTop:10}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Nome completo:</Text>
              <FormRow>
                <TextInput 
                // placeholder="Nome usuario"
                style={styles.txtInput}
                />
              </FormRow>
            </View>

            <View style={{alignContent: 'center', alignItems: 'baseline', marginTop:10}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Nome completo:</Text>
              <FormRow>
                <TextInput 
                // placeholder="Data nascimento"
                style={styles.txtInput}
                />
              </FormRow>
            </View>

           { this.renderButtom() }


        </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        justifyContent:'center', 
        alignItems:'center'
    },

    texto: {
        fontSize:25
    },

    txtInput: {
        alignSelf:'stretch',
        paddingLeft:5,
        paddingRight:5,
        alignItems:'center',
        justifyContent:'center',

    },
    
    txtButton: {
        fontSize:20,
        color:'#fff'
    },

    button: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'gray',
        paddingHorizontal: 25,
        height:45,
        marginTop:15,
        borderRadius:20,
    }

})
