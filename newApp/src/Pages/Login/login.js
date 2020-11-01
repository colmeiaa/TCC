import React, { useContext, useState } from 'react';
import { Image, KeyboardAvoidingView } from 'react-native';
import { Container, InputArea, Botao, BotaoText, MessageCad, Message, CadMessage } from './styles';
import  LoginInputEmail  from '../../Components/loginInputEmail';
import  LoginInputPassword  from '../../Components/loginInputPassword';
import { useNavigation } from '@react-navigation/native'
import Api from '../../Api' ;
import  {UserContext}  from '../../contexts/UserContext'
import AsyncStorage from '@react-native-community/async-storage';

const image = 'https://www.kindpng.com/picc/m/294-2945644_rocky-mountain-high-brands-inc-logo-hd-png.png'

export default  () => {

    const { dispatch: userDispatch } = useContext(UserContext);

    const navigation = useNavigation();

    const [usuarioField, setEmailFiel] = useState('');
    const [passwordField, setPasswordFiel] = useState('');

    const handleSignin = async () => {
        if(usuarioField !== '' && passwordField != ''){
            let res = await Api.signIn(usuarioField, passwordField);
            
            if(res.usuario){
                await AsyncStorage.setItem('user',res.usuario);

               userDispatch({
                   type: 'setNome',
                   payload: {
                       nome: res.usuario
                   }
               });

               navigation.reset({
                   routes: [{name: "MainTab"}]
               })
            }else{
                alert('Email e/ou senha errados')
            }
        }else{
            alert('Preencha os campos')
        }
    };

    const handleCadButtom = () => {
        navigation.reset({
            routes: [{name:'Cadastro'}]
        })
    };


    return(
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{flex:1}}>
            <Container>
                <Image 
                style={{width:300, height: 300, borderRadius: 300}}
                source={{uri: image}}
                />
                <InputArea>
                    <LoginInputEmail 
                    placeholder="Digite seu usuario"
                    value={usuarioField}
                    onChangeText={t=> setEmailFiel(t)}
                    />

                    <LoginInputPassword
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=> setPasswordFiel(t)}
                    password={true}
                    />
                    <Botao onPress={handleSignin}>
                        <BotaoText>LOGIN</BotaoText>
                    </Botao>
                </InputArea>

                <MessageCad onPress={handleCadButtom}>
                    <Message>Ainda não possui login?</Message>
                    <CadMessage>Cadastre-se</CadMessage>
                </MessageCad>

            </Container>
        </KeyboardAvoidingView>
    );
}