import React from 'react';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'; 

const InputArea = styled.View`
    width:100%;
    height:60px;
    flex-direction:row;
    align-items: center;
    border-radius:30px;
    margin-bottom: 15px;
    padding-left:15px;
    background-color: #ccc;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size:16px;
    color: #000;
    margin-left:10px;
`;

export default ({placeholder,value,onChangeText}) => {
    return(
        <InputArea>
            <MaterialIcons name="email" size={24} color="black" />
            <Input 
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            keyboardType={"email-address"}
            autoCorrect={false}
            />
        </InputArea>
    );
}