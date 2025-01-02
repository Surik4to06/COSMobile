import React from 'react';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from "@expo/vector-icons";

import MainTab from "./MainTab";
import { Image, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import { HeaderMenu } from '../components/CustomDrawer';
import Settings from '../Screens/Settings';
import FindShop from '../Screens/FindShop';
import Help from '../Screens/Help';

import { Auth } from '../../utils/firebase';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default () => {
    
    const navigation = useNavigation();

    const user = Auth.currentUser;
    const photoURL = user.photoURL;
    const nick = user.displayName;

    return (
        <Drawer.Navigator
            
            drawerContent={ (props) => {
                return(
                    <SafeAreaView style={{flex: 1}}>
                        <HeaderMenu style={{
                            marginTop: 10,
                        }}>
                            <Image 
                                source={{ uri: photoURL }}
                                style={{
                                    width: 100, 
                                    height: 100, 
                                    borderRadius: 50,
                                }}
                            />
                            <Text style={{
                                fontSize: 18,
                                color: '#FFFFFF',
                            }}>{nick}</Text>
                        </HeaderMenu>
                        <DrawerItemList {...props} />
                        <View style={{
                            marginTop: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                            
                        }}>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                backgroundColor: 'skyblue',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 70,
                                width: '80%',
                                borderRadius: 20,
                            }}
                            onPress={() => {
                                Auth.signOut();
                                navigation.reset({
                                    routes: [{name: 'Login'}]
                                });
                            }}>
                                <Ionicons name="log-out-outline" size={40} color='#FFFFFF' />
                                <Text style={{
                                    fontSize: 28,
                                    color: '#FFFFFF',
                                }} >Sair</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                )

            }}
            screenOptions={{ drawerStyle: { backgroundColor: '#FD84F8' }, 
            headerShown: false,
            drawerLabelStyle: {color: '#FFFFFF', fontSize: 16},
            }}>
            <Drawer.Screen
                name="Inicio" 
                component={MainTab} 
                options={{ 
                    drawerIcon: ()=>( 
                    <Ionicons name="home-outline" size={40} color='#FFFFFF' />
                    )
                }} 
            />
            <Drawer.Screen 
                name="Configurações" 
                component={Settings} 
                options={{ 
                    drawerIcon: ()=>( 
                    <Ionicons name="settings-outline" size={40} color='#FFFFFF' />
                    )
                }}
            />
            <Drawer.Screen 
                name="Detalhes do pedido" 
                component={MainTab} 
                options={{ 
                    drawerIcon: ()=>( 
                    <Ionicons name="document-outline" size={40} color='#FFFFFF' />
                    )
                }} 
            />
            <Drawer.Screen 
                name="Encontre uma loja" 
                component={FindShop} 
                options={{ 
                    drawerIcon: ()=>( 
                        <Ionicons name="location-outline" size={40} color='#FFFFFF' />
                    )
                }} 
            />
            <Drawer.Screen 
                name="Fale conosco" 
                component={Help} 
                options={{ 
                    drawerIcon: ()=>( 
                    <Ionicons name="call-outline" size={40} color='#FFFFFF' />
                    )
                }} 
            />
        </Drawer.Navigator>
    );
}