import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoadingScreen from "../Screens/LoadingScreen";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import MainDrawer from "./MainDrawer";
import EditProfile from "../Screens/EditProfile";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="Preload" component={LoadingScreen}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainTab" component={MainDrawer} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
    </Stack.Navigator>
);