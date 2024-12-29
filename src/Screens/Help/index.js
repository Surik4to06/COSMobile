import React from 'react';
import { Container, ContainerLinks, Links } from './styles';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import MainTab from '../../Stacks/MainTab';

import Header from '../../components/Header';

export default () => {

    const navigation = useNavigation();

    return (
        <Container>
                <Header title="Suporte" />
                <View style={{backgroundColor: 'skyblue', flex: 1}}>

                        <Text style={{
                            fontSize: 20, 
                            fontWeight: 'bold', 
                            marginLeft: 5,
                            color: '#FFFFFF',
                            }}>Suporte</Text>

                    <View style={{
                        marginBottom: 3, 
                        paddingLeft: 10, 
                        paddingRight: 10,
                        backgroundColor: "DF84F8",
                        }}>
                        <Text style={{fontSize: 16, color: '#FFFFFF',}}>Central de Atendimento</Text>
                        <View style={{
                            borderRadius: 12,
                            backgroundColor: '#4EADBE',
                            marginBottom: 1,
                            marginTop: 10,
                        }}></View>
                    </View>
                    
                    <View style={{
                            marginLeft: 10,
                            marginRight: 10,
                            borderRadius: 12,
                            backgroundColor: '#4EADBE',
                            marginBottom: 10,
                        }}>
                            <TouchableOpacity 
                            onPress={() => {
                                navigation.navigate('MainTab');
                            }}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 8,
                                paddingLeft: 12
                            }}>
                                <Ionicons name='chatbubble-ellipses-outline' size={24} color='#FFFFFF' />
                                <Text style={{
                                    marginLeft: 16, 
                                    fontWeight: 600, 
                                    fontSize: 16,
                                    color: '#FFFFFF',
                                }}>Fale com um atendente</Text>
                            </TouchableOpacity>

                        </View>
                    
                    <View style={{
                        marginBottom: 12, 
                        paddingLeft: 10, 
                        paddingRight: 10,
                        backgroundColor: "DF84F8",
                        }}>
                        <Text style={{fontSize: 16, color: '#FFFFFF',}}>Redes Sociais</Text>
                        <View style={{
                            borderRadius: 12,
                            backgroundColor: '#4EADBE',
                            marginBottom: 10,
                            marginTop: 10,
                        }}>
                            <TouchableOpacity 
                            onPress={() => {
                                Linking.openURL('https://www.instagram.com/zeni.jao/profilecard/?igsh=cDZjaG5hbmRlaTM3');
                            }}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 8,
                                paddingLeft: 12
                            }}>
                                <Ionicons name='logo-instagram' size={24} color='#FFFFFF' />
                                <Text style={{
                                    marginLeft: 16, 
                                    fontWeight: 600, 
                                    fontSize: 16,
                                    color: '#FFFFFF',
                                }}>Instagram</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{
                            borderRadius: 12,
                            backgroundColor: '#4EADBE',
                            marginBottom: 10,
                        }}>
                            <TouchableOpacity 
                            onPress={() => {
                                
                            }}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 8,
                                paddingLeft: 12
                            }}>
                                <Ionicons name='logo-facebook' size={24} color='#FFFFFF' />
                                <Text style={{
                                    marginLeft: 16, 
                                    fontWeight: 600, 
                                    fontSize: 16,
                                    color: '#FFFFFF',
                                }}>Facebook</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{
                            borderRadius: 12,
                            backgroundColor: '#4EADBE',
                            marginBottom: 10,
                        }}>
                            <TouchableOpacity 
                            onPress={() => {
                                Linking.openURL("https://wa.me/5515991985260");
                            }}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 8,
                                paddingLeft: 12
                            }}>
                                <Ionicons name='logo-whatsapp' size={24} color='#FFFFFF' />
                                <Text style={{
                                    marginLeft: 16, 
                                    fontWeight: 600, 
                                    fontSize: 16,
                                    color: '#FFFFFF',
                                }}>Whatsapp</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{
                            borderRadius: 12,
                            backgroundColor: '#4EADBE',
                            marginBottom: 10,
                        }}>
                            <TouchableOpacity 
                            onPress={() => {
                                
                            }}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 8,
                                paddingLeft: 12
                            }}>
                                <Ionicons name='logo-twitter' size={24} color='#FFFFFF' />
                                <Text style={{
                                    marginLeft: 16, 
                                    fontWeight: 600, 
                                    fontSize: 16,
                                    color: '#FFFFFF',
                                }}>Twitter</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{
                            borderRadius: 12,
                            backgroundColor: '#4EADBE',
                            marginBottom: 10,
                        }}>
                            <TouchableOpacity 
                            onPress={() => {
                                Linking.openURL('https://www.tiktok.com/@zenijao?_t=8sFjAKRJfeQ&_r=1');
                            }}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 8,
                                paddingLeft: 12
                            }}>
                                <Ionicons name='logo-tiktok' size={24} color='#FFFFFF' />
                                <Text style={{
                                    marginLeft: 16, 
                                    fontWeight: 600, 
                                    fontSize: 16,
                                    color: '#FFFFFF',
                                }}>Tik Tok</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{
                            borderRadius: 12,
                            backgroundColor: '#4EADBE',
                            marginBottom: 10,
                        }}>
                            <TouchableOpacity 
                            onPress={() => {
                                Linking.openURL('https://youtube.com/@zenijao?si=OR3JV_71JT4j1ZId');
                            }}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 8,
                                paddingLeft: 12
                            }}>
                                <Ionicons name='logo-youtube' size={24} color='#FFFFFF' />
                                <Text style={{
                                    marginLeft: 16, 
                                    fontWeight: 600, 
                                    fontSize: 16,
                                    color: '#FFFFFF',
                                }}>Youtube</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <Text style={{
                        color: '#FFFFFF',
                        textAlign: 'center',
                        fontSize: 18,
                        }}>© Surik4to06</Text>
                </View>
        </Container>
    );
}