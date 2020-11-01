import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../Pages/Preload/preload';
import Login from '../Pages/Login/login';
import Cadastro from '../Pages/Cadastro/cadastro';
import MainTab from '../Stack/tabNaigation.routes';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
        headerShown: false
    }}
    >
        <Stack.Screen name="Preload" component={Preload}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="MainTab" component={MainTab}/>
    </Stack.Navigator>
);