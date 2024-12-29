import React, { useState, useEffect } from 'react';
import { 
    Container, 
    Body, 
    LocationArea, 
    LocationFinder, 
    LocationInput, 
    LoadingIcon,
    ListArea,
} from './styles';
import { Ionicons } from '@expo/vector-icons';
import { PermissionsAndroid, Platform } from 'react-native';
import { getCurrentPositionAsync } from 'expo-location';

import Header from '../../components/Header';
import COSItem from '../../components/COSItem';

export default () => {

    const [locate, setLocate] = useState(null);
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    
    // Get permissions for android to get current location
    const getPermissions = async () => {
        setCoords(null);
        if (Platform.OS === 'android') {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
                const currentPosition = await getCurrentPositionAsync();
                setCoords(currentPosition);
                console.log(currentPosition);
                setLoading(false);
        }
    }

    const handleLocationFinder = async () => {
        setLoading(true);
        getPermissions();       
    }

    const getCOSShop = async () => {

    }

    useEffect(()=>{
        getCOSShop();

    }, []);

    return (
        <Container>
                <Header title='Buscar Loja' />
            <Body>

                <LocationArea>
                    <LocationInput 
                        placeholder='Onde você está? ' 
                        placeholderTextColor='#FFFFFF'
                        value={locate}
                        onChangeText={setLocate}
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <Ionicons name='locate-outline' size={36} color='#FFFFFF' />
                    </LocationFinder>
                </LocationArea>
                {loading &&
                    <LoadingIcon size='large' color='#FFFFFF' />
                }

                <ListArea>
                    {list.map((item, k) => {
                        <COSItem key={k} data={item} />
                    })}
                </ListArea>

            </Body>
        </Container>
    );
}