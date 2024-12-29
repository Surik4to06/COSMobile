import React from "react";
import styled from "styled-components/native";

import IonIcons from "@expo/vector-icons/Ionicons";

export const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #4EEDDF;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #000;
    margin-left: 10px;
`;

export default ({Icon, placeholder, onChangeText, value, password}) => {
    return (
        <InputArea> 
            <IonIcons name={Icon}  size={24} color='#FFFFFF'/>
            <Input placeholder={placeholder} placeholderTextColor="#FFFFFF" onChangeText={onChangeText} value={value} secureTextEntry={password}/>
        </InputArea>
    );
}

