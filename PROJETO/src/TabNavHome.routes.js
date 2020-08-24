import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Feed from './pages/logado/home';
import Search from './pages/logado/explor';
import Profile from './pages/logado/settings';

const Tab = createMaterialBottomTabNavigator();

export default function Routes(){
    return(
            <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#00ace6"
            inactiveColor="#bfbfbf"
            barStyle={{ backgroundColor: '#FFF' }}
            screenOptions={{}}
            >
                <Tab.Screen name= 'Feed' component={Feed}
                options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="newspaper" color={color} size={26} /> )}  } />
                <Tab.Screen name= 'Explorer' component={Search}
                options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="map-search" color={color} size={26} /> )} } />
                <Tab.Screen name='Profile' component={Profile}
                options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="settings" color={color} size={26} /> )} } />
            </Tab.Navigator>
    );
}