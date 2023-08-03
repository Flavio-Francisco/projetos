import Icon from 'react-native-vector-icons/FontAwesome'; 
import { MaterialCommunityIcons,Fontisto,Feather,Ionicons } from '@expo/vector-icons';
import { ButtomIcon, Container, Title,ContainerTitle, ContainerFull, Header,AvatarUser, ButtomAdd, TextButton } from "./style";
import { TouchableOpacity,Text} from 'react-native';




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
            ><MaterialCommunityIcons name={'dumbbell'} size={30} color={'#00A32F'} /></ButtomIcon>
            <ButtomIcon
             style={{backgroundColor:'#80FFD9',}}
            ><MaterialCommunityIcons name={'gamepad-up'} size={35} color={'#00A32F'} /></ButtomIcon>
            <ButtomIcon
             style={{backgroundColor:'#80FFFF'}}
            ><Icon name={'graduation-cap'} size={30} color={'#0055A3'} /></ButtomIcon>
            <ButtomIcon
             style={{backgroundColor:'#FF80EB',}}
            ><Fontisto name={'headphone'} size={30} color={'#A30089'} /></ButtomIcon>
            <ButtomIcon
             style={{backgroundColor:'#FC80FF',}}
        
            ><Feather name={'heart'} size={30} color={'#A30089'} /></ButtomIcon>
              <ButtomIcon
             style={{backgroundColor:'#80FFA3',}}
            ><MaterialCommunityIcons name={'movie-open'} size={22} color={'#00A3A3'} /></ButtomIcon>
              <ButtomIcon
             style={{backgroundColor:'#80D1FF',}}
            ><Ionicons name={'md-home-outline'} size={30} color={'#0069A3'} /></ButtomIcon>
              <ButtomIcon
             style={{backgroundColor:'#FFCC80',}}
            ><Icon name={'google'} size={30} color={'#A36200'} /></ButtomIcon>
              <ButtomIcon
             style={{backgroundColor:'#80FFD1',}}
            ><Ionicons name={'md-add'} size={45} color={'#00A369'} /></ButtomIcon>
        </Container>
        <ButtomAdd><TextButton>AddCategory</TextButton></ButtomAdd>
    </ContainerFull>
    )
}