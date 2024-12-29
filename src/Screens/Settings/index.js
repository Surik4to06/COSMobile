import React from 'react';
import { Container } from './styles';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import { AreaSetings, BtnsSetings } from '../../components/CustomSettings';

export default () => {

    const navigation = useNavigation();

    // const handleNavigate = (screen) => {
    //     navigation.navigate(screen);
    // }

    return (
        <Container>
            <Header title='Configurações' />

            <AreaSetings>
            <Text style={{
                marginBottom: 10,
                color: '#FFFFFF',
            }}>Conta</Text>
                <BtnsSetings onPress={() => {
                    navigation.navigate('EditProfile');
                }}>
                    <Ionicons name='create-outline' size={24} color='#FFFFFF' />
                    <Text style={{marginLeft: 10, color: '#FFFFFF'}}>Editar Perfil</Text>
                </BtnsSetings>
                <BtnsSetings>
                    <Ionicons name='shield-checkmark-outline' size={24} color='#FFFFFF' />
                    <Text style={{marginLeft: 10, color: '#FFFFFF'}}>Alterar Senha</Text>
                </BtnsSetings>
            </AreaSetings>
        </Container>
    );
}