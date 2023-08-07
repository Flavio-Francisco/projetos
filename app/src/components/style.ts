import { FlatList,FlatListProps} from "react-native";
import styled from "styled-components/native";



export const  Conteiner =  styled.View`
  flex:1;
  justify-content:center;
  text-align: center;
  background-color:#fff;
 
`;

export const List = styled(FlatList  as new (props:FlatListProps<string>) => FlatList<string> )`
 width:90%;
 height:72px;
 
`;

export const Tasks = styled.Text`
 font-size:22px;
`;   
export const TasksDate = styled.Text`
 font-size:12px;
`; 

export const ButtomRoute = styled.TouchableOpacity`
height:10px;
width:10%;
`;