
import { TouchableOpacity, Modal, Alert} from "react-native";
import { AvatarUserHome, Conteiner, ConteinerList, ConteinerList2, ConteinerSearch, HeaderHome, List, Search, SearchButtom,SearchButtomList,SearchButtomList2,TextSearch,TitleHome } from "./style";
import { Feather,Ionicons ,AntDesign} from '@expo/vector-icons';
import { useState } from "react";


import Card2 from "../../components/Card2/Card2";
import Card from "../../components/Card/Card";
import { AddTask } from "../../components/AddTask";


export default function Home(){
    const [modalVisible, setModalVisible] = useState(false);
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
        
    </Conteiner>
    )
}