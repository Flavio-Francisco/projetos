import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone que deseja usar
import Ionicons from '@expo/vector-icons/Ionicons'
import { ButtomIcon, Container, Title,ContainerTitle, ContainerFull, Header,AvatarUser, ButtomAdd, TextButton } from "./style";
import { TouchableOpacity} from 'react-native';



export default function HomeMemu(){
    return(
    <ContainerFull >

        <Header>
          <TouchableOpacity>
            <Ionicons name='md-menu-outline' size={22} color={'#979797'} />
          </TouchableOpacity>
          <Title> Home Page</Title>
          <AvatarUser
          source={{ uri:'https://avatars.githubusercontent.com/u/111377254?v=4'}}
          />
        </Header>
        <ContainerTitle>
        <Title>Choose Category</Title>
        </ContainerTitle>
         
        <Container>
            
            <ButtomIcon
            style={{backgroundColor:'#CCFF80',}}
            >
            <Ionicons name='browsers' size={22} color={'#21A300'} />
            </ButtomIcon>
            <ButtomIcon
             style={{backgroundColor:'#FF9680',}}
        
            ><Icon name='suitcase' size={22} color={'#21A300'} /></ButtomIcon>
            <ButtomIcon
             style={{backgroundColor:'#80FFFF',}}
            ><Icon name={'bar-bell'} size={22} color={'#00A32F'} /></ButtomIcon>
            <ButtomIcon
             style={{backgroundColor:'#80FFD9',}}
            ><Icon name={'google'} size={22} color={'#00A32F'} /></ButtomIcon>
            <ButtomIcon
             style={{backgroundColor:'#0055A3',}}
            ><Icon name={'google'} size={22} color={'#00A32F'} /></ButtomIcon>
            <ButtomIcon
             style={{backgroundColor:'#FF80EB',}}
            ><Icon name={'google'} size={22} color={'#A30089'} /></ButtomIcon>
            <ButtomIcon
             style={{backgroundColor:'#FC80FF',}}
        
            ><Icon name={'google'} size={22} color={'#A30089'} /></ButtomIcon>
              <ButtomIcon
             style={{backgroundColor:'#80FFA3',}}
            ><Icon name={'google'} size={22} color={'#00A3A3'} /></ButtomIcon>
              <ButtomIcon
             style={{backgroundColor:'#80D1FF',}}
            ><Icon name={'google'} size={22} color={'#0069A3'} /></ButtomIcon>
              <ButtomIcon
             style={{backgroundColor:'#FFCC80',}}
            ><Icon name={'google'} size={22} color={'#A36200'} /></ButtomIcon>
              <ButtomIcon
             style={{backgroundColor:'#80FFD1',}}
            ><Icon name={'google'} size={22} color={'#00A369'} /></ButtomIcon>
        </Container>
        <ButtomAdd><TextButton>AddCategory</TextButton></ButtomAdd>
    </ContainerFull>
    )
}