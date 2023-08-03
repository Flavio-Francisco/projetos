import styled from 'styled-components/native';



export const ContainerFull = styled.View`
  flex:1;
  justify-content: center;
  align-items:center;
  background-color:#000;


`;
export const  Header =  styled.View`
  width:90%;
  height: 74px; 
  margin-top:-10px;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  background-color:#000;
 
 
`;

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space;
  padding-inline: 20px;
  margin: 30px;
  margin-bottom:0px;
  margin-top:0px;
  background-color:#000;
  
  border-top: 3px solid '#979797';
  

`;

export const ButtomIcon = styled.TouchableOpacity`
  width: 80px;
  height: 74px;
  justify-content: center;
  align-items: center;
  margin-block: 15px;
  border-radius: 10px;
  margin: 15px;
  
  
`;

export const ContainerTitle = styled.View`

 justify-content:center;
 align-items:center;
 height:45px;
 width:90%;
 border-bottom:3px solid '#979797';
 background-color:#000;

`;

export const Title = styled.Text`
 
 font-size:16px;
 text-align:center;
 color: #979797;
 padding:10px;
 

`;
export const TextButton = styled.Text`
 
 font-size:16px;
 text-align:center;
 color: #fff;


`;
export const AvatarUser = styled.Image`
 height:60px;
 width:60px;
 border-radius:50px;
 padding:10px;
 

`;
export const ButtomAdd = styled.TouchableOpacity`
  width:80%;
  padding:10px;
  background-color: #8687E7;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-radius: 5px;

`;