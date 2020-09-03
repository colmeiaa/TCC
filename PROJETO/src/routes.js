import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/loginTest';
import Home from './TabNavHome.routes';
import tabNav from './TabNavCadastro.routes';
import Detail from './pages/logado/detail';
import DetailExplo from './pages/logado/detailExplo';
import CheckBox from '../src/pages/cadastros/checkbox';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name='Login' component={Login} options={{title:null, headerTransparent: true, gestureEnabled:false, headerLeft:null}}/> */}
                <Stack.Screen name='Home' component={Home} options={{title: null, headerTransparent: true, gestureEnabled:false, headerLeft:null}}/>
                <Stack.Screen name='CheckBox' component={CheckBox} />
                <Stack.Screen name='Cadastro' component={tabNav} />
                <Stack.Screen name='Detail' component={Detail} />
                <Stack.Screen name='DetailExplo' component={DetailExplo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}