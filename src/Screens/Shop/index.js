import React from 'react';
import { Container } from './styles';
import { Text } from 'react-native';

import Header from '../../components/Header';

export default () => {
    return (
        <Container>
            <Header title='Meu Carinho' />
        </Container>
    );
}