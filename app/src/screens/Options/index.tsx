import Icon from 'react-native-vector-icons/FontAwesome'; 
import { MaterialCommunityIcons,Fontisto,Feather,Ionicons } from '@expo/vector-icons';
import { ButtomIcon,TextIcon,HorizontalLine, Container, Title,ContainerTitle, ContainerFull, Header,AvatarUser, ButtomAdd, TextButton, ViewModal } from "./style";
import { Alert, Modal, TouchableOpacity, View} from 'react-native';
import { useState,useContext } from 'react';




interface PropsModal{
  modal : boolean,
}


export default function Options(props:PropsModal){
  const [modalVisible, setModalVisible] = useState(false);
 
    return(
      <ViewModal>
       
       <Modal
        animationType="slide"
        visible={props.modal}
       >
       <ContainerFull>
    
        <Header>
          <TouchableOpacity
          onPress={()=>setModalVisible(!modalVisible)}
          >
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
         <HorizontalLine/>
        <Container>
            
            <View>
              <ButtomIcon
                style={{backgroundColor:'#CCFF80',}}
                >
              <Ionicons name='browsers' size={22} color={'#21A300'} />
              </ButtomIcon>
              <TextIcon>Grocery</TextIcon>
            </View>

            <View>
              <ButtomIcon
                style={{backgroundColor:'#FF9680',}}
                ><Icon name='suitcase' size={22} color={'#21A300'} />
              </ButtomIcon>
              <TextIcon>Work</TextIcon>
            </View>

             <View>
               <ButtomIcon
                style={{backgroundColor:'#80FFFF',}}
                ><MaterialCommunityIcons name={'dumbbell'} size={30} color={'#00A32F'} />
              </ButtomIcon>
              <TextIcon>Sport</TextIcon>
             </View>

            <View>
              <ButtomIcon
                style={{backgroundColor:'#80FFD9',}}
                ><MaterialCommunityIcons name={'gamepad-up'} size={35} color={'#00A32F'} />
              </ButtomIcon>
              <TextIcon>Design</TextIcon>
            </View>

            <View>
              <ButtomIcon
                style={{backgroundColor:'#80FFFF'}}
                ><Icon name={'graduation-cap'} size={30} color={'#0055A3'} />
              </ButtomIcon>
              <TextIcon>Universitu</TextIcon>
            </View>

            <View>
              <ButtomIcon
                style={{backgroundColor:'#FF80EB',}}
                ><Fontisto name={'headphone'} size={30} color={'#A30089'} />
              </ButtomIcon>
              <TextIcon>Social</TextIcon>
            </View>

            <View>
              <ButtomIcon
                style={{backgroundColor:'#FC80FF',}}
                ><Feather name={'heart'} size={30} color={'#A30089'} />
              </ButtomIcon>
              <TextIcon>Music</TextIcon>
            </View>

            <View>
              <ButtomIcon
                style={{backgroundColor:'#80FFA3',}}
                ><MaterialCommunityIcons name={'heart'} size={30} color={'#00A3A3'} />
              </ButtomIcon>
              <TextIcon>Health</TextIcon>
            </View>

            <View>
              <ButtomIcon
                style={{backgroundColor:'#80D1FF',}}
                ><MaterialCommunityIcons name={'movie'} size={30} color={'#0069A3'} />
              </ButtomIcon>
              <TextIcon>Movie</TextIcon>
            </View>

             <View>
               <ButtomIcon
                style={{backgroundColor:'#FFCC80',}}
                ><Icon name={'home'} size={35} color={'#A36200'} />
               </ButtomIcon>
               <TextIcon>Home</TextIcon>
             </View>

            <View>
              <ButtomIcon
                style={{backgroundColor:'#80FFD1',}}
                ><Ionicons name={'md-add'} size={45} color={'#00A369'} />
              </ButtomIcon>
              <TextIcon>Create New</TextIcon>
            </View>
        </Container>
        <ButtomAdd><TextButton>AddCategory</TextButton></ButtomAdd>
       
    </ContainerFull>
    </Modal>
    </ViewModal>
    )
}