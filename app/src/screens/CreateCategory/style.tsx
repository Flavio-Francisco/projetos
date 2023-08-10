import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";




export const  Conteiner =  styled.View`
  flex:1;
  background-color:#000;
  padding-left:15px;


`;
export const  Label = styled.TextInput.attrs({
    placeholder:'Category name',
    placeholderTextColor:'#AFAFAF',
    
})`

  width:90%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color:#535353;
  margin-top:15px;
 
  `;

export const Title = styled.Text`
font-size: 20px;
color: #ffffff;
font-weight: bold; 
margin-top:35px;


`;
export const TextCategory = styled.Text`
font-size: 16px;
color: #ffffff;
font-weight: bold; 
margin-top:25px;
`;
export const TextButton = styled.Text`
font-size: 12px;
color: #ffffff;
`;
export const  ButtomIconAdd = styled.TouchableOpacity`
 width:154px;
 height:37px;
 padding:10px;
 align-items:center;
 margin-top:25px;
 border-radius:5px;
 background-color:#979797;
 `;
 export const List = styled.FlatList`
 width:100%;
 height:72px;
 
`;