import { styled } from "styled-components/native";


export const Conteiner = styled.View`
     flex: 1; 
     align-items:center;
     background-color:  #fff;
`;
export const ConteinerIcon = styled.View`
     flex-direction:row;  
     justify-content:space-between;
     align-items:center;
     width:90%;
     margin-top:45px;
     margin-left:15px;
   
`;
export const ConteinerIconleft = styled.View`
     flex-direction:row;  
     justify-content:space-around;
     width:40%;
    
   
`;
export const TextTask = styled.Text`
      font-size:24px;
      margin:15px;
      color:#fff;
`;
export const InputTask = styled.TextInput.attrs({
    placeholder:'Do math homework',
    placeholderTextColor:'#fff',
})`
    width:90%px;
    height:43px;
    font-size:18px;
    margin:15px;
    padding: 10px;
    border: 1px solid #979797;
    border-radius:5px;
 `;
 export const InputDescription = styled.TextInput.attrs({
    placeholder:'Description',
    placeholderTextColor:'#fff',
})`
    width:325px;
    height:43px;
    font-size:18px;
    margin-left:10px;
    padding: 10px;
    border-radius:5px;
 `;
 export const ButtomIcon = styled.TouchableOpacity`
   margin-left:5px;
   
 `;
  export const ButtomIconLeft = styled.TouchableOpacity`
 
  

`;