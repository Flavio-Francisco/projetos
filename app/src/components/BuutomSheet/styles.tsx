import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

export const Icon = styled(Feather)`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 13px;
  z-index: 99;
  color: 'red';
`;

export const Button = styled.TouchableOpacity`
  z-index: 99;
`;