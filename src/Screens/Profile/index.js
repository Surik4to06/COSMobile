import React from "react";
import { Container, InfosProfile, InfoBtn, ContainerBtn } from './styles';
import { Image, View, Text } from 'react-native';

import Header from '../../components/Header';
import { Auth } from '../../../utils/firebase';

import { useNavigation } from "@react-navigation/native";

export default () => {

    const navigation = useNavigation();

    const user = Auth.currentUser;
    const displayName = user.displayName;
    const Email = user.email;
    const photoURL = user.photoURL;
    const phone = user.phoneNumber;

    const Logout = () => {
        Auth.signOut();
        navigation.reset({
            routes: [{name: 'Login'}]
        });
    }

    return (
        <Container>
            <Header title="Perfil" />
            <View style={{width: '100%', height: 210, backgroundColor: '#FD84F8'}}>
                <Image 
                    source={{}}
                    resizeMode="cover"
                    style={{
                        height: 228,
                        width: '100%',
                    }}
                    />
            </View>

            <View style={{
                flex: 1,
                alignItems: 'center',
            }}>
                <Image
                    source={{uri: photoURL}}
                    resizeMode="contain"
                    style={{
                        height: 155,
                        width: 155,
                        borderRadius: 999,
                        borderColor: '#FFFFFF',
                        borderWidth: 2,
                        marginTop: -90,
                    }}
                />
                <InfosProfile>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>
                        Nome: 
                    </Text>
                    <Text style={{
                        marginLeft: 10,
                    }}> {displayName}</Text>
                </InfosProfile>
                <InfosProfile>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>
                        E-mail: 
                    </Text>
                    <Text style={{
                        marginLeft: 10
                    }}> {Email}</Text>
                </InfosProfile>
                <InfosProfile>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>
                        Telefone: 
                    </Text>
                    <Text style={{
                        marginLeft: 10
                    }}> {phone}</Text>
                </InfosProfile>
                <ContainerBtn>
                    <InfoBtn onPress={() => {
                        navigation.navigate('EditProfile');
                    }}>
                        <Text style={{
                        color: '#FFFFFF',
                        fontSize: 18
                    }}>Editar Perfil</Text>
                    </InfoBtn>
                    <InfoBtn onPress={Logout}>
                        <Text style={{
                        color: '#FFFFFF',
                        fontSize: 18
                    }}>Sair da Conta</Text>
                    </InfoBtn>
                </ContainerBtn>
            </View>
        </Container>
    );
}