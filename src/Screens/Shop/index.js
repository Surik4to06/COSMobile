import React from 'react';
import { Container } from './styles';
import { Text } from 'react-native';

import { Auth } from '../../../utils/firebase';
import Header from '../../components/Header';

export default async () => {


    return (
        <Container>
            <Header title='Meu Carinho' />
        </Container>



    );
}