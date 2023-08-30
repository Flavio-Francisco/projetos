import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

export const Icon = styled(Feather)`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 20px;
  z-index: 99;
  color:  #979797;

`;

export const Button = styled.TouchableOpacity`
  z-index: 99;
`;