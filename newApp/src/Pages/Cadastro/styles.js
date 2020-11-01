import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #f6f7f9
`;

export const InputArea = styled.ScrollView`
    padding: 50px;
    width: 100%;
`;

export const Botao = styled.TouchableOpacity`
    height:60px;
    background-color: #25A503;
    border-radius:30px;
    align-items: center;
    justify-content: center;
`;
export const BotaoText = styled.Text`
    color: #fff;
    font-size: 18px;
`;

export const MessageCad = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    margin-bottom:20px;
`;
export const Message = styled.Text`
    font-size:16px;
`;
export const CadMessage = styled.Text`
    font-size:16px;
    font-weight: bold;
    margin-left:5px
`;