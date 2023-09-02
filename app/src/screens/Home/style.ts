
import styled from "styled-components/native";



export const  Conteiner =  styled.View`
  height:100%;
  justify-content:center;
  background-color:#000;

`;

export const  ConteinerList =  styled.View`
  height:200px;
  justify-content:center;
  text-align: center;
  margin-bottom:10px;


`;
export const  ConteinerListNull =  styled.View`
  height:200px;
  justify-content:center;
  text-align: center;
  margin-bottom:10px;


`;
export const  ConteinerListNull2 =  styled.View`
  height:25%;
  justify-content:center;
  text-align: center;
  margin-bottom:-25px;


`;
export const  ConteinerList2 =  styled.View`
 
  justify-content:center;
  text-align: center;
  margin-bottom:-25px;
  height:25%;
`;
export const  ConteinerSearchInput =  styled.View`
 
  justify-content:center;
  text-align: center;
  margin-bottom:-25px;
  height:25%;
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
 width:26%;
 flex-direction:row;
 align-items:center;
 justify-content:center;
 margin-left:15px;
 background-color:#979797;
 border-radius:5px;

`; 
export const ButtomModal = styled.TouchableOpacity`
width:21%;
height:45px; 
margin-left:73%;
margin-bottom:25px;
margin-top:30px;
background-color:#979797;
border-radius:5px;
align-items:center;
justify-content:center;
`;
export const TextModal = styled.Text`
 
 font-size:16px;
 text-align:center;
 color: #fff;

 
`;
export const  HeaderHome =  styled.View`
flex-direction:row;
align-items:center;
justify-content:space-between;
width:90%;
margin-left:10px;
margin-top:55px;

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
// Modal

export const ConteinerModal = styled.View`
     flex: 1; 
     background-color:  #373737;
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
    placeholder:'new task',
    placeholderTextColor:'#979797',
  
})`
    width:90%;
    height:43px;
    font-size:18px;
    margin:15px;
    padding: 10px;
    border: 1px solid #979797;
    border-radius:5px;
    color: #979797;
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