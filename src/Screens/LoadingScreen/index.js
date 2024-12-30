import React, { useEffect, useContext, useState } from "react";
import { Container, LoadingIcon } from './styles';
import { Image } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

// import { UserContext } from "../../contexts/userContext";
import { Auth } from "../../../utils/firebase";

const LoadingScreen = () => {

    const navigation = useNavigation();

    // const [user, setUser] = useState(null);
    
    // useEffect(() => {
    //     Auth.onAuthStateChanged((_user) => {
    //         setUser(_user);
    //     })

    // }, []);

    // if (user) {
        // navigation.reset({
        //     routes: [{name: 'Home'}]
        // });
    // }
    
        navigation.reset({
            routes: [{name: 'Login'}]
        });

    return (
        <Container>
            <Image style={{width: '80%', height: '300'}} source={require('../../../assets/COSLogo.png')} />
            <LoadingIcon size='large' color='#FFFFFF' />
        </Container>
    );
}

export default LoadingScreen;