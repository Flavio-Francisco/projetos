import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';



export const  Conteiner =  styled.View`
  flex:1;
  justify-content:center;
  text-align: center;
  background-color:#000;
 
`;
export const List = styled(FlatList  as new (props:FlatListProps<string>) => FlatList<string> )`
 width:100%;
 height:72px;
 
`;
export const  ConteinerSearch =  styled.View`

  justify-content:center;
  flex-direction:row;
  width:90%;
  margin:10px;


`;
export const SearchButtom = styled.TouchableOpacity`
 width:21%;
 height:52px; 
 background-color:#1D1D1D;
 align-items:center;
 justify-content:center;
 border-radius:5px;

 
`; 

export const  Search = styled.TextInput.attrs({
  placeholder:"Search for your task..",
  inputMode:"search",
  placeholderTextColor:'#AFAFAF',

  
})`
 color:#AFAFAF;
 background-color:#1D1D1D;
 width:80%;
 height:52px;
 justify-content:center;
 border-radius:5px;
 margin-left:-5px;
`; 