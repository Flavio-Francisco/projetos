
import Card from "../../Card.tsx/Card";
import { Conteiner, List } from "./style";






export default function Home(){

    return(
    <Conteiner>
    <List
    data={['1','2','3']}
    keyExtractor={item=>item}
    renderItem={()=><Card task={"Do Math HomeWork"} data={"07/08/2023"} numbericom={1}/>}
    />
    </Conteiner>
    )
}