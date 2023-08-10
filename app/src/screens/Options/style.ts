import styled from 'styled-components/native';

export const ContainerFull = styled.View`
  flex:1;
  height: 100%;
  justify-content: center;
  align-items:center;
  background-color:#000;
 
`;
export const ContaineModal = styled.View`
  flex:1;
  background-color:#000;

  

`;
export const  Header =  styled.View`
  width:90%;
  height: 80px; 
  margin-left:10px;
  margin-bottom:30px;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;

  
`;

export const HorizontalLine = styled.View`
  width: 90%;
  height: 1px;
  background-color: #979797;
  margin-left:15px;
 
`;

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items:center;
  width: 90%;
  justify-content: space;
  background-color:#363636;
  border-radius:5px
  
`;

export const ButtomIcon = styled.TouchableOpacity`
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 10px;
  margin-left: 37px;
  
  
  
`;

export const ContainerTitle = styled.View`

 justify-content:center;
 align-items:center;
 height:50px;
 width:90%;
 margin-left:20px;


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
export const TextIcon = styled.Text`
 
 font-size:12px;
 text-align:center;
 color: #979797;
 margin-left: 20px;

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
  margin-top: 50px;
  margin-left: 10%;
  border-radius: 5px;

`;
