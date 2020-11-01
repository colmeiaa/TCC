import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/loginTest';
import Home from './TabNavHome.routes';
import tabNav from './TabNavCadastro.routes';
import Detail from './pages/logado/detail';
import DetailExplo from './pages/logado/detailExplo';
import CheckBox from '../src/pages/cadastros/checkbox';
import PageCamping from './components/PageCamping';
import FotoView from './pages/logado/fotoView';
import Settings from './pages/logado/settings';
import Editar from './pages/logado/settingsPart2';
// import Pdf from '../src/components/pdf';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                
                {/* <Stack.Screen name='Login' 
                component={Login} 
                options={{title:null, headerTransparent: true, gestureEnabled:false, headerLeft:null}}/> */}

                <Stack.Screen name='Home' 
                component={Home} 
                options={{title: null, headerTransparent: true, gestureEnabled:false, headerLeft:null}}
                />

                <Stack.Screen name='CheckBox' 
                component={CheckBox} 
                />

                <Stack.Screen name='Cadastro' 
                component={tabNav} 
                />

                <Stack.Screen name='Detail' 
                component={Detail} 
                options={{title:null}}
                />

                <Stack.Screen name='DetailExplo' 
                component={DetailExplo} 
                />

                <Stack.Screen name='PageCamping' 
                component={PageCamping} 
                options={{title: null, headerTransparent: true}}
                />

                <Stack.Screen name='FotoView' 
                component={FotoView} 
                options={{title: null}}
                />

                <Stack.Screen name='Settings' 
                component={Settings} 
                options={{title: null}}
                />
                
                <Stack.Screen name='Editar' 
                component={Editar} 
                options={{title: null}}
                />
                {/* 
                <Stack.Screen name='Pdf' 
                component={Pdf} 
                options={{title: null}}
                /> */}

            </Stack.Navigator>
        </NavigationContainer>
    );
}