import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { createUserWithEmailAndPassword, userCredential, updateProfile } from "firebase/auth";
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

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleBtnClick = () => {
        navigation.reset({
            routes: [{name: 'Login'}]
        })
    };

    const handleRegister = async () => {
        if (name !== '' && email !== '' && password !== '') {
            try {
                await createUserWithEmailAndPassword(Auth, email, password)
                updateProfile(Auth.currentUser, {
                    displayName: name, 
                    photoURL: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
                })

                navigation.reset({
                    routes: [{name: 'MainTab'}]
                });
            
            }
            catch (error) {
                console.log(error);
                if (error.code === 'auth/email-already-in-use') {
                    alert('Email já cadastrado');
                }
                if (error.code === 'auth/invalid-email') {
                    alert('Email inválido');
                }
            }

        } else {
            alert('Preencha todos os campos');
        }
    };


    return (
        <Container>
            <Image style={{width: '80%', height: '300', marginBottom: '-24'}} source={require('../../../assets/COSLogo.png')} />

            <InputAreaView>
                <InputArea 
                    Icon='person-outline'
                    placeholder='Digite seu nome'
                    onChangeText={setName}
                    value={name}
                />

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
                

                <CustomButton onPress={handleRegister}>
                    <CustomButtoText>CADASTRAR</CustomButtoText>
                </CustomButton>
            </InputAreaView>

            <CadastrarMessageButton onPress={handleBtnClick}>
                <CadastrarMessageButtonText>Já possui uma conta?</CadastrarMessageButtonText>
                <BtnRedirecionar>Faça Login</BtnRedirecionar>
            </CadastrarMessageButton>
        </Container>
    );
}

export default Register;