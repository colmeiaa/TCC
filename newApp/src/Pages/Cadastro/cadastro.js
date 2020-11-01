import React, { useState, useContext } from 'react';
import { Image } from 'react-native';
import { Container, InputArea, Botao, BotaoText, MessageCad, Message, CadMessage } from './styles';
import  LoginInputEmail  from '../../Components/loginInputEmail';
import  LoginInputPassword  from '../../Components/loginInputPassword';
import  NomeInputText  from '../../Components/nomeInputText';
import { useNavigation } from '@react-navigation/native'
import Api from '../../Api';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../../contexts/UserContext'

const image = 'https://www.kindpng.com/picc/m/294-2945644_rocky-mountain-high-brands-inc-logo-hd-png.png'

export default  () => {
    const {dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [nomeField, setNomeFiel] = useState('');
    const [emailField, setEmailFiel] = useState('');
    const [passwordField, setPasswordFiel] = useState('');

    const handleCadButtom = async () => {
        if(nomeField != '' && emailField != '' && passwordField != ''){
            let res = await Api.signUp(nomeField,emailField,passwordField);

            if(res.usuario){
                await AsyncStorage.setItem('user',res.user)

                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: res.fotoPerfil
                    }
                });
                navigation.reset({
                    routes: [{name: "MainTab"}]
                })
            }else{
                alert("erro "+res.error);
            }
        }else{
            alert("Preencha os campos!")
        }
    };

    const handleSignin = () => {
        navigation.reset({
            routes: [{name:'Login'}]
        })
    };

    return(
        <Container>
            <Image 
            style={{width:200, height: 200, borderRadius: 200}}
            source={{uri: image}}
            />
            <InputArea>
                
                <NomeInputText 
                placeholder="Digite seu nome"
                value={nomeField}
                onChangeText={t=> setNomeFiel(t)}
                />

                <LoginInputEmail 
                placeholder="Digite seu e-mail"
                value={emailField}
                onChangeText={t=> setEmailFiel(t)}
                />

                <LoginInputPassword
                placeholder="Digite sua senha"
                value={passwordField}
                onChangeText={t=> setPasswordFiel(t)}
                password={true}
                />

                <Botao onPress={handleCadButtom}>
                    <BotaoText>CADASTRAR</BotaoText>
                </Botao>
            <MessageCad onPress={handleSignin}>
                <Message>Já possui uma conta?</Message>
                <CadMessage>Faça o login</CadMessage>
            </MessageCad>
            </InputArea>


            
        </Container>
    );
}