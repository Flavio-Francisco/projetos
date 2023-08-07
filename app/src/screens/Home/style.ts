import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";



export const  Conteiner =  styled.View`
  flex:1;
  justify-content:center;
  text-align: center;
  background-color:#000;
 
`;
export const List = styled(FlatList  as new (props:FlatListProps<string>) => FlatList<string> )`
 width:90%;
 height:72px;
 
`;