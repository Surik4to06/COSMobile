import React from "react";
import styled from "styled-components/native";

const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`;

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;

const InfoName = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;

const SeeProfileBtn = styled.View`
    width: 85px;
    height: 26px;
    border: 1px solid #4EADBE;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const SeeProfileBtnTxt = styled.Text`
    font-size: 13px;
    color: #268596;
`;

export default ({data}) => {
    return (
        <Area>
            <Avatar source={{uri: data.avatar}} />
            <InfoArea>
                <InfoName>{data.name}</InfoName>

                <SeeProfileBtn>
                    <SeeProfileBtnTxt>Ver Perfil</SeeProfileBtnTxt>
                </SeeProfileBtn>
            </InfoArea>
        </Area>
    );
}