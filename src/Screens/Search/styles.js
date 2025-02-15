import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Body = styled.ScrollView`
    flex: 1;
    background-color: skyblue;
`;


export const HeaderBody = styled.View`
    
`;

export const SearchArea = styled.View`
    margin-top: 20px;
    height: 60px;
    background-color: #4EADBE;
    justify-content: center;
    margin-left: 13px;
    margin-right: 13px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
`;

export const SearchInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #FFFFFF;
`;

export const SearchFinder = styled.TouchableOpacity`
    
`;

export const SearchList = styled.FlatList`

`;