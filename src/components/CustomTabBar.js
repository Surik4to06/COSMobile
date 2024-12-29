import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const TabArea = styled.View`
    height: 60px;
    background-color: #FD84F8;
    flex-direction: row;
    bottom: 16;
    left: 16;
    right: 16;
    position: absolute;
    border-radius: 10px;
`;

const IconActive = styled.View`
    height: 54px;
    width: 54px;
    border-radius: 27px;
    background-color: #4EEDDF;
    border: 2px solid #FFFFFFFF;
    justify-content: center;
    align-items: center;
    top: -30px;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export default ({state, navigation}) => {
    
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                {state.index===0 ? <IconActive>
                    <Ionicons name="home" size={40} color='#FFFFFF' />
                    </IconActive> : <Ionicons name="home-outline" size={24} color='#FFFFFF' />}
            </TabItem>
            <TabItem onPress={()=>goTo('Search')}>
                {state.index===1 ? <IconActive>
                    <Ionicons name="search" size={40} color='#FFFFFF' />
                    </IconActive> : <Ionicons name="search-outline" size={24} color='#FFFFFF' />}
            </TabItem>  
            <TabItem onPress={()=>goTo('Shop')}>
                {state.index===2 ? <IconActive>
                    <Ionicons name="cart" size={40} color='#FFFFFF' />
                    </IconActive> : <Ionicons name="cart-outline" size={24} color='#FFFFFF' />}
            </TabItem>
            <TabItem onPress={()=>goTo('Settings')}>
                {state.index===3 ? <IconActive>
                    <Ionicons name="settings" size={40} color='#FFFFFF' />
                    </IconActive> : <Ionicons name="settings-outline" size={24} color='#FFFFFF' />}
            </TabItem>
            <TabItem onPress={()=>goTo('Profile')}>
                {state.index===4 ? <IconActive>
                    <Ionicons name="person" size={40} color='#FFFFFF' />
                    </IconActive> : <Ionicons name="person-outline" size={24} color='#FFFFFF' />}
            </TabItem>        
        </TabArea>
    );
}