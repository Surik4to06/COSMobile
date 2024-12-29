import React from 'react';
import { HeaderBody, Body, Cards, Void } from './styles';
import { Text, View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

export default () => {

    const navigation = useNavigation();

    return (
        <View>
            <Header title='Início' onPress={()=>navigation.reset('Home')} />
            
            <Body>
                <HeaderBody>

                </HeaderBody>
                <View style={styles.containerTxt}>
                    <Text style={styles.txt}>Mais Vendidos</Text>
                </View>
                <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                </View>
                <View style={styles.containerTxt}>
                    <Text style={styles.txt}>Opções Infantis</Text>
                </View>
                <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                </View>
                <HeaderBody>
                    
                </HeaderBody>
                <Void />
            </Body>
        </View>
    );
}

const styles = StyleSheet.create({
    containerTxt: {
        height: 25,
        marginTop: 20,
        backgroundColor: '#DF84F8',
        width: '90%',
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    txt: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
})