import React from "react";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
    flex: 1;
`;

export const AreaSetings = styled.View`
    flex: 1;
    flex-direction: colum;
    padding: 0 10px 20px 10px;
    background-color: skyblue;
`;

export const BtnsSetings = styled.TouchableOpacity`
    flex-direction: row;
    padding: 5px;
    align-items: center;
    background-color: #4EADBE;
    height: 50px;
    margin-bottom: 5px;
    border-radius: 30px;
    padding-left: 10px;
`;