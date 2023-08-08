
import { TouchableOpacity } from "react-native";
import Card from "../../Card.tsx/Card";
import { AvatarUserHome, Conteiner, ConteinerList, ConteinerList2, ConteinerSearch, HeaderHome, List, Search, SearchButtom,SearchButtomList,SearchButtomList2,TextSearch,TitleHome } from "./style";
import { Feather,Ionicons ,AntDesign} from '@expo/vector-icons';





export default function Home(){

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
            <TextSearch>Today</TextSearch>
            <AntDesign name="down" size={12} color="#979797" />
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
            <AntDesign name="down" size={12} color="#979797" />
        </SearchButtomList2>
        <ConteinerList2>
            <List
            data={['1']}
            keyExtractor={item=>item}
            renderItem={()=><Card task={"Buy Gracery"} data={"Today At 16:45"} numbericom={1}/>}
            />
        </ConteinerList2>
    
    </Conteiner>
    )
}