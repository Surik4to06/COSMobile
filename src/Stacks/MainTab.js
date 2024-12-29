import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/CustomTabBar";

import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Shop from '../Screens/Shop';
import Settings from '../Screens/Settings';
import Help from '../Screens/Help';
import Profile from "../Screens/Profile";

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <Tab.Navigator tabBar={props=><CustomTabBar {...props} />} screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Search' component={Search} />
            <Tab.Screen name='Shop' component={Shop} />
            <Tab.Screen name='Settings' component={Settings} />
            <Tab.Screen name='Help' component={Help} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}