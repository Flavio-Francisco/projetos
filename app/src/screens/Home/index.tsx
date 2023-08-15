
import { TouchableOpacity, Modal, Alert} from "react-native";
import { AvatarUserHome,
    TextModal ,
    ButtomModal,
    Conteiner,
    ConteinerList,
    ConteinerList2, 
    ConteinerSearch,
    HeaderHome,
    List,Search,
    SearchButtom,
    SearchButtomList,
    SearchButtomList2,
    TextSearch,
    TitleHome,InputTask,TextTask,InputDescription,ButtomIcon,ConteinerIcon,ConteinerIconleft,ButtomIconLeft, ConteinerModal } from "./style";
import { Feather,Ionicons ,AntDesign,MaterialCommunityIcons} from '@expo/vector-icons';
import { useRef, useState } from "react";
import BottomSheet from '@gorhom/bottom-sheet';

import Card2 from "../../components/Card2/Card2";
import Card from "../../components/Card/Card";



export default function Home(){
    const [modalVisible, setModalVisible] = useState(0);
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints =  ['1%', '50%'];

  

    return(
    <Conteiner>
   
       <HeaderHome>
       <TouchableOpacity>
            <Ionicons name='md-menu-outline' size={22} color={'#979797'} />
          </TouchableOpacity>
       <TitleHome> Index</TitleHome>
       <AvatarUserHome
       source={{
        uri:'https://avatars.githubusercontent.com/u/111377254?v=4'
       }}
       />
       </HeaderHome>
      
        <ConteinerSearch>
            <SearchButtom ><Feather name="search" size={30} color="#AFAFAF" /></SearchButtom>
          <Search/>
        </ConteinerSearch>
        <SearchButtomList>
            <TextSearch>Today </TextSearch>
            <AntDesign name="down" size={12} color="#ffffff" />
        </SearchButtomList>
       <ConteinerList>
        <List
            data={['1','2','3']}
            keyExtractor={item=>item}
            renderItem={()=><Card task={"Do Math HomeWork"} data={"Today At 16:45"} numbericom={1}/>}
            />
       </ConteinerList>
         <SearchButtomList2>
            <TextSearch>Completd</TextSearch>
            <AntDesign name="down" size={12} color="#ffffff" />
        </SearchButtomList2>
        <ConteinerList2>
            <List
            data={['1']}
            keyExtractor={item=>item}
            renderItem={()=><Card2 task={"Buy Gracery"} data={"Today At 16:45"} numbericom={1}/>}
            />
        </ConteinerList2>
        <ButtomModal
        onPress={()=>setModalVisible(1)}
        >
            <TextModal>Add Task</TextModal>
        </ButtomModal>
        <BottomSheet
                
                ref={bottomSheetRef}
                index={modalVisible}
                snapPoints={snapPoints}
                handleIndicatorStyle={{
                    backgroundColor:'#363636',
                }}
                backgroundStyle={{
                    backgroundColor:'#363636',
                }}
                >
                      <ConteinerModal >
            
                            <TextTask>Add Task</TextTask>
                          <InputTask/>
                            <InputDescription/>
                            <ConteinerIcon>
                            <ConteinerIconleft >
                                <ButtomIconLeft>
                                <MaterialCommunityIcons name="timer-outline" size={24} color="#fff" />
                                </ButtomIconLeft>
                                <ButtomIconLeft>
                                <Feather name="tag" size={24} color="#fff" />
                                </ButtomIconLeft>
                                <ButtomIconLeft>
                                <Feather name="flag" size={24} color="#fff" />
                                </ButtomIconLeft>
                            </ConteinerIconleft>
                            <ButtomIcon
                            onPress={()=>setModalVisible(0)}
                            >
                                <Ionicons name="ios-send-outline" size={24} color="#8687E7" />
                            </ButtomIcon>
                            </ConteinerIcon>
       
            </ConteinerModal>

                </BottomSheet>
        
    </Conteiner>
    )
}