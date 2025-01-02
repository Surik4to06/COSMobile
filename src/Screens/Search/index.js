import React, { useEffect, useState } from 'react';
import { Container, 
    Body, 
    HeaderBody, 
    SearchArea, 
    SearchFinder, 
    SearchInput,
    SearchList,
} from './styles';
import { TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { doc, collection, getDoc } from 'firebase/firestore';

import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Auth } from '../../../utils/firebase';

export default () => {
    const [search, setSearch] = useState();
    const [list, setList] = useState([]);

    const navigation = useNavigation();

    // useEffect(() => {
    //     db.collection("Pratos").onSnapshot((query) =>{
    //         const list = [];
    //         query.forEach((doc)=>{
    //             list.push({...doc.data(), id: doc.id})
    //         });
    //         setList(list);
    //         console.log(list);
    //     });
    // }, [])

    // console.log(getDoc('Pratos'));

    return (
        <Container>
                <Header title='Buscar Item' />
            <Body>

                <SearchArea>
                    <SearchInput 
                        placeholder='Digite o nome do item ' 
                        placeholderTextColor='#FFFFFF'
                        value={search}
                        onChangeText={setSearch}
                    />
                    <SearchFinder>
                        <Ionicons name='search-outline' size={36} color='#FFFFFF' />
                    </SearchFinder>
                </SearchArea>


            </Body>
        </Container>
    );
}