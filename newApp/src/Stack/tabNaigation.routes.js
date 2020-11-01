import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Pages/Home/home';
import Explor from '../Pages/Explorer/explor';
import Settings from '../Pages/Settings/settings';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explor" component={Explor} />
        <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
)