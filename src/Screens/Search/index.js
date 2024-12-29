import React, { useState } from 'react';
import { Container, Body, HeaderBody, LocationArea, LocationFinder, LocationInput } from './styles';
import { TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const [search, setSearch] = useState();

    const navigation = useNavigation();

    return (
        <Container>
                <Header title='Buscar Item' />
            <Body>

                <LocationArea>
                    <LocationInput 
                        placeholder='Digite o nome do item ' 
                        placeholderTextColor='#FFFFFF'
                        value={search}
                        onChangeText={setSearch}
                    />
                    <LocationFinder>
                        <Ionicons name='search-outline' size={36} color='#FFFFFF' />
                    </LocationFinder>
                </LocationArea>

            </Body>
        </Container>
    );
}