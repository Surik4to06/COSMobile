import React, { useState } from 'react';
import { Container, HeaderSettings, Body } from './styles';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { Auth } from '../../../utils/firebase';
import { updateEmail, sendEmailVerification, updateProfile } from 'firebase/auth';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';


export default () => {

    const navigation = useNavigation();

    const user = Auth.currentUser;
    const displayName = user.displayName;
    const Email = user.email;
    const photoURL = user.photoURL;
    const phone = user.phoneNumber;

    if (photoURL === null) {
        updateProfile(Auth.currentUser, {
            photoURL: 'https://i.pinimg.com/236x/74/58/f6/7458f61c3de2104c0406b3a8d9ebb6cc.jpg',
        })
    }

    const [selectedImage, setSelectedImage] = useState(photoURL);
    const [name, setName] = useState('');
    const [nick, setNick] = useState(displayName);
    const [email, setEmail] = useState(Email);
    const [password, setPassword] = useState('');
    const [CPF, setCPF] = useState('');
    const [telephone, setPhone] = useState('');
    
    const handleImageSelection = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,4],
            quality: 1,
        });

        photo = result.assets[0].uri;

        setSelectedImage(photo);
        console.log(photo);

        if (!result.canceled) {
            setSelectedImage(photo)
        }
    }

    const handleSaveDataProfile = async () => {
        if (selectedImage != '' && nick != '' && email != '') {
            updateProfile(Auth.currentUser, {
                displayName: nick, 
                photoURL: selectedImage
              })
              sendEmailVerification(Auth.currentUser)
              updateEmail(Auth.currentUser, email)
              .then(() => {
                console.log('foi'),
                alert('foi')
              }).catch((error) => {
                alert('deu merda');
                console.log(error);
              });
        }
    }

    return (
        <Container>
            <View style={styles.container}>
                        
                <TouchableOpacity>
                    
                    <Image style={{height: 56, width: 56, marginTop: 10, }} source={require('../../../assets/COSLogo.png')}  />

                </TouchableOpacity>

                <Text style={styles.txt}>Editar Perfil</Text>

                <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.iconContainer}>
                    
                    <Ionicons name='chevron-back-outline' size={24} color='#FFFFFF' />

                </TouchableOpacity>
                        
            </View> 
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
            <ScrollView style={{backgroundColor: 'skyblue'}}>
                <View style={{
                    alignItems: 'center',
                    marginVertical: 22,
                }}>
                    <TouchableOpacity onPress={handleImageSelection}>
                        <Image source={{uri: selectedImage}} style={{
                            height: 170, 
                            width: 170,
                            borderRadius: 85,
                            borderWidth: 2,
                            borderColor: '#FFFFFF',
                        }}/>
                        <View style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 10,
                            zIndex: 9999,
                        }}>
                            <Ionicons name='camera' size={32} color='#FFFFFF'/>

                        </View>
                    </TouchableOpacity>

                </View>

                <View style={styles.containerView}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 10, color: '#FFFFFF'}}>Nome</Text>
                    <View style={styles.input}>
                        <TextInput  
                            style={{fontSize: 20, color: '#FFFFFF', color: '#FFFFFF'}}
                            value={name}
                            onChangeText={setName}
                            editable={true}
                        />

                    </View>
                </View>
                
                <View style={styles.containerView}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 10, color: '#FFFFFF'}}>Apelido</Text>
                    <View style={styles.input}>
                        <TextInput  
                            style={{fontSize: 20, color: '#FFFFFF'}}
                            value={nick}
                            onChangeText={setNick}
                            editable={true}
                        />

                    </View>
                </View>
                <View style={styles.containerView}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 10, color: '#FFFFFF'}}>Email</Text>
                    <View style={styles.input}>
                        <TextInput 
                            style={{fontSize: 20, color: '#FFFFFF'}} 
                            value={email}
                            onChangeText={setEmail}
                            editable={true}
                        />

                    </View>
                </View>
                <View style={styles.containerView}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 10, color: '#FFFFFF'}}>Senha</Text>
                    <View style={styles.input}>
                        <TextInput  
                            style={{fontSize: 20, color: '#FFFFFF'}}
                            value={password}
                            onChangeText={setPassword}
                            editable={true}
                            secureTextEntry={true}
                        />

                    </View>
                </View>
                <View style={styles.containerView}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 10, color: '#FFFFFF'}}>CPF</Text>
                    <View style={styles.input}>
                        <TextInput  
                            style={{fontSize: 20, color: '#FFFFFF'}}
                            value={CPF}
                            onChangeText={setCPF}
                            editable={true}
                            keyboardType={'numeric'}
                        />

                    </View>
                </View>
                <View style={styles.containerView}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 10, color: '#FFFFFF'}}>Telefone</Text>
                    <View style={styles.input}>
                        <TextInput  
                            style={{fontSize: 20, color: '#FFFFFF'}}
                            value={telephone}
                            onChangeText={setPhone}
                            editable={true}
                            keyboardType={'numeric'}
                        />

                    </View>
                </View>
                <View style={{height: 100}}>

                </View>
                <TouchableOpacity 
                    onPress={handleSaveDataProfile}
                    style={styles.btn}    
                >
                    <Text style={{
                        color: "#FFFFFF", 
                        textAlign: 'center', 
                        fontSize: 20,
                    }}>Salvar alterações</Text>
                </TouchableOpacity>
            </ScrollView>
            <Body />
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 28,
        marginHorizontal: 16,
        backgroundColor: '#FFFFFF',
        width: '100%',
        marginLeft: -1,
    },
    iconContainer: {
        height: 45,
        width: 45,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FD84F8',
    },
    txt: {
        marginLeft: 12,
        fontSize: 17,
        fontWeight: 'bold',
    },
    containerView: {
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'column',
        marginBottom: 6,
    },
    input: {
        width: '100%',
        height: 60,
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 30,
        marginVertical: 6,
        justifyContent: 'center',
        paddingLeft: 8,
        backgroundColor: '#4EADBE',
    },
    btn: {
        marginTop: -70,    
        width: '90%',
        height: 60,
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 30,
        marginVertical: 6,
        justifyContent: 'center',
        paddingLeft: 8,
        backgroundColor: '#FD84F8',
        marginLeft: 20,
        marginRight: 20,
    },
});
