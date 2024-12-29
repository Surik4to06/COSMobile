import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../../../utils/firebase";

import { UserContext } from "../../contexts/userContext";
import { Container, 
    InputAreaView, 
    CustomButton, 
    CustomButtoText, 
    CadastrarMessageButton, 
    CadastrarMessageButtonText, 
    BtnRedirecionar } from './styles';
import { Image } from "react-native";

import InputArea from '../../components/loginInput';



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleBtnClick = () => {
        navigation.reset({
            routes: [{name: 'Register'}]
        })
    };

    const handleLogin = async () => {
        if (email !== '' && password !== '') {
            try {
                const user = await signInWithEmailAndPassword(Auth, email, password);
                navigation.reset({
                    routes: [{name: 'MainTab'}]
                });
                console.log(user);

            } catch (error) {
                console.log(error);
            }

        } else {
            alert('Preencha todos os campos');
        }
    };


    return (
        <Container>
            <Image style={{width: '80%', height: '300'}} source={require('../../../assets/COSLogo.png')} />

            <InputAreaView>
                <InputArea 
                    Icon='mail-outline'
                    placeholder='Digite seu e-mail'
                    onChangeText={setEmail}
                    value={email}
                />

                <InputArea 
                    Icon="lock-closed-outline" 
                    placeholder='Digite sua senha'
                    onChangeText={setPassword}
                    value={password}
                    password={true}
                />
                

                <CustomButton onPress={handleLogin}>
                    <CustomButtoText>LOGIN</CustomButtoText>
                </CustomButton>
            </InputAreaView>

            <CadastrarMessageButton onPress={handleBtnClick}>
                <CadastrarMessageButtonText>Ainda não possui uma conta?</CadastrarMessageButtonText>
                <BtnRedirecionar>Cadastre-se</BtnRedirecionar>
            </CadastrarMessageButton>
        </Container>
    );
}

export default Login;