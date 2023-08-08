
import Card from "../../Card.tsx/Card";
import { Conteiner, ConteinerSearch, List, Search, SearchButtom } from "./style";
import { Feather } from '@expo/vector-icons';





export default function Home(){

    return(
    <Conteiner>
        <ConteinerSearch>
            <SearchButtom ><Feather name="search" size={30} color="#AFAFAF" /></SearchButtom>
          <Search/>
        </ConteinerSearch>
       
        <List
        data={['1','2','3']}
        keyExtractor={item=>item}
        renderItem={()=><Card task={"Do Math HomeWork"} data={"Today At 16:45"} numbericom={1}/>}
        />
    </Conteiner>
    )
}