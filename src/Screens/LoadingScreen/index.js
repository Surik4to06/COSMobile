import React, { useEffect, useContext, useState } from "react";
import { Container, LoadingIcon } from './styles';
import { Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

// import { UserContext } from "../../contexts/userContext";
import { Auth } from "../../../utils/firebase";

const LoadingScreen = () => {

    const navigation = useNavigation();

    let token = AsyncStorage.getItem(token);

    if (token) {
        navigation.reset({
            routes: [{name: 'MainTab'}]
        });
    } else {
        navigation.reset({
            routes: [{name: 'Login'}]
        });

    }

    return (
        <Container>
            <Image style={{width: '80%', height: '300'}} source={require('../../../assets/COSLogo.png')} />
            <LoadingIcon size='large' color='#FFFFFF' />
        </Container>
    );
}

export default LoadingScreen;