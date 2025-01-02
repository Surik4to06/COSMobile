import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;  
`;

export const InfosProfile = styled.Text`
    margin-top: 20px;
    font-size: 18px;
    flex-direction: row;
`;

export const ContainerBtn = styled.View`
    margin-top: 40px;
    width: 85%;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
`;

export const InfoBtn = styled.TouchableOpacity`
    border-radius: 20px;
    background-color: skyblue;
    width: 150px;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;