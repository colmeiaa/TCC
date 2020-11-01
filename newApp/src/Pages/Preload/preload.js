import React, { useEffect, useContext } from 'react';
import { Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { Container,Loading } from './styles';
import { useNavigation } from '@react-navigation/native'
import Api from '../../Api';
import { UserContext } from '../../contexts/UserContext';

const image = 'https://www.kindpng.com/picc/m/294-2945644_rocky-mountain-high-brands-inc-logo-hd-png.png'

export default  () => {
    
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(() => {
        const checkUser = async () => {
            const user = await AsyncStorage.getItem('user');
            if(user != null){
                let res = await Api.checkUser(user);
                if(res.usuario){

                    await AsyncStorage.setItem('user', res.usuario);

                    userDispatch({
                        type: 'setNome',
                        payload:{
                            avatar: res.usuario
                        }
                    });

                    navigation.reset({
                        routes:[{name:'MainTab'}]
                    });
                }else{
                    navigation.navigate('Login')
                }
            }else{
                 navigation.navigate('Login')
            }
        }
        checkUser();
    },[]); 

    return(
        <Container>
            <Image 
            style={{width:300, height:300, borderRadius:300}}
            source={{uri:image}}
            />
            <Loading size="large" color="#008e00"/>
        </Container>
    );
}