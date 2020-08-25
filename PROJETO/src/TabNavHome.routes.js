import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Feed from './pages/logado/home';
import Camping from './pages/logado/camping';
import Explorer from './pages/logado/explorer';
import Tips from './pages/logado/tips';
import Settings from './pages/logado/settings';

const Tab = createMaterialBottomTabNavigator();

export default function Routes(){
    return(
            <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#6ad06b"
            inactiveColor="#bfbfbf"  // bfbfbf
            barStyle={{ backgroundColor: '#f5fffa' }}
            screenOptions={{}}
            >
                <Tab.Screen name= 'Feed' component={Feed}
                options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="home" color={color} size={26} /> )}  } />
                <Tab.Screen name= 'Camping' component={Camping}
                options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="format-list-checkbox" color={color} size={26} /> )} } />
                <Tab.Screen name='Explorer' component={Explorer}
                options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="map-search" color={color} size={26} /> )} } />
                <Tab.Screen name= 'Tips' component={Tips}
                options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="google-keep" color={color} size={26} /> )}  } />
                <Tab.Screen name= 'Profile' component={Settings}
                options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="account-circle-outline" color={color} size={26} /> )} } />
            </Tab.Navigator>
    );
}