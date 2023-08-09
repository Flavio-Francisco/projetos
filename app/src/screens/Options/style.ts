import styled from 'styled-components/native';

export const ContainerFull = styled.View`
  flex:1;
  justify-content: center;
  align-items:center;
  background-color:#000;
  margin-top:-20%;

`;
export const  Header =  styled.View`
  width:90%;
  height: 74px; 
  margin-left:30px;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  background-color:#000;
`;
export const ViewModal = styled.View`
  height:100%;
  background-color:#000;
 
 
`;
export const HorizontalLine = styled.View`
  width: 90%;
  height: 1px;
  background-color: #979797;
`;

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space;
  margin-left:30px;
  background-color:#000;
  
`;

export const ButtomIcon = styled.TouchableOpacity`
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  margin-block: 15px;
  border-radius: 10px;
  margin: 15px;
  
  
`;

export const ContainerTitle = styled.View`

 justify-content:center;
 align-items:center;
 height:50px;
 width:90%;
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
export const TextIcon = styled.Text`
 
 font-size:12px;
 text-align:center;
 color: #979797;


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
  border-radius: 5px;

`;
