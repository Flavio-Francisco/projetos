
import styled from "styled-components/native";




export const  Conteiner =  styled.View`
  flex:1;
  background-color:#000;
  padding-left:15px;


`;
export const  ConteinerModal =  styled.View`
  flex:1;
  background-color:#000;
  align-items:center;


`;
export const  Label = styled.TextInput.attrs({

    placeholder:'Category name',
    placeholderTextColor:'#AFAFAF',
    
})`

  width:90%;
  padding: 10px;
  font-size: 16px;
  border:1px solid #fff;
  border-radius: 5px;
  background-color:#535353;
  margin-top:15px;
 
  `;

export const Title = styled.Text`
font-size: 20px;
color: #ffffff;
font-weight: bold; 
margin-top:70px;


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
export const TextCreate = styled.Text`
font-size: 16px;
color: #ffffff;
`;
export const TextCancel = styled.Text`
font-size: 16px;
color: #8687E7;
`;
export const  ButtomIconAdd = styled.TouchableOpacity`
 width:154px;
 height:37px;
 padding:10px;
 align-items:center;
 margin-top:25px;
 border-radius:5px;
 background-color:#ffffff61;
 `;
export const  ConteinerButton =  styled.View`
 width:90%;
 height:55px;
 padding:3px;
 align-items:center;
 flex-direction:row;
 justify-content:space-around;
 margin-bottom:25px;
 margin-left:15px;
 

`;

export const  ButtomCancel = styled.TouchableOpacity`
 width:154px;
 height:48px;
 align-items:center;
 justify-content:center;
 background-color:#000;
 border-radius:5px;
 `;
 export const  ButtomCreate = styled.TouchableOpacity`
 width:154px;
 height:48px;
 align-items:center;
 justify-content:center;
 background-color:#8687E7;
 border-radius:5px;
 `;