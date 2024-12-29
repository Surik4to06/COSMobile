import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, onPress }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
                <TouchableOpacity onPress={onPress}>
                    
                    <Image style={{height: 56, width: 56, marginTop: 10, }} source={require('../../assets/COSLogo.png')}  />

                </TouchableOpacity>

                <Text style={styles.txt}>{title}</Text>

                <TouchableOpacity onPress={()=>navigation.toggleDrawer()} style={styles.iconContainer}>
                    
                    <Ionicons name='menu' size={24} color='#FFFFFF' />

                </TouchableOpacity>
            
        </View>
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
});

export default Header;