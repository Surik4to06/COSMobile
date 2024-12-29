import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #1f4db8;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputAreaView = styled.View`
    padding: 40px;
    width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #FD84F8;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
export const CustomButtoText = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
`;

export const CadastrarMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
`;
export const CadastrarMessageButtonText = styled.Text`
    font-size: 16px;
    color: #FFFFFF;
`;
export const BtnRedirecionar = styled.Text`
    font-size: 16px;
    color: #FFFFFF;
    font-weight: bold;
    margin-left: 5px;
`;
