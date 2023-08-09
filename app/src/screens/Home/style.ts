import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";




export const  Conteiner =  styled.View`
  flex:1;
  justify-content:center;
  background-color:#000;
  height:100%;
 
`;
export const List = styled(FlatList  as new (props:FlatListProps<string>) => FlatList<string> )`
 width:100%;
 height:72px;
 
`;
export const  ConteinerList =  styled.View`
  height:43%;
  justify-content:center;
  text-align: center;

`;
export const  ConteinerList2 =  styled.View`
  height:23%;
  justify-content:center;
  text-align: center;

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
 margin-bottom:10px;

`; 

export const SearchButtomList = styled.TouchableOpacity`
 width:21%;
 flex-direction:row;
 align-items:center;
 justify-content:center;
 margin-left:15px;
 margin-bottom:10px;
 background-color:#979797;
 border-radius:5px;

`; 
export const SearchButtomList2 = styled.TouchableOpacity`
 width:21%;
 flex-direction:row;
 align-items:center;
 justify-content:center;
 margin-left:15px;
 background-color:#979797;
 border-radius:5px;

`; 
export const  HeaderHome =  styled.View`
flex-direction:row;
align-items:center;
justify-content:space-between;
width:90%;
margin-left:10px;
margin-top:25px;

`;
export const TitleHome = styled.Text`
 
 font-size:16px;
 text-align:center;
 color: #979797;
 padding:10px;
 
`;
export const TextSearch = styled.Text`
 
 font-size:12px;
 text-align:center;
 color: #fff;
 padding:7px;
 
`;
export const AvatarUserHome = styled.Image`

 height:42px;
 width:42px;
 border-radius:50px;
 padding:10px;
 
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