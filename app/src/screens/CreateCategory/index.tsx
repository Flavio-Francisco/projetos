import CardColor from "../../components/CardColor";
import { Conteiner, Label, Title,TextCategory,ButtomIconAdd,TextButton, List } from "./style";

type ColorProps={
    id:string;
    color:string;
}
export function CreateCategory(){

const TESTE:ColorProps[]= [
{
   id:'1',
   color:'#C9CC41'
},
{
    id:'2',
    color:'#66CC41'
},   
{
    id:'3',
    color:'#41CCA7'
},   
{
    id:'4',
    color:'#4181CC'
},   
{
    id:'5',
    color:'#41A2CC'
},   
{
    id:'6',
    color:'#CC8441'
},   
{
    id:'7',
    color:'#9741CC'
},   
{
    id:'8',
    color:'#CC4173'
},   

]

    return(
        <Conteiner>
            <Title>Create new category</Title>
            <TextCategory>Category name:</TextCategory>
            <Label/>
            <TextCategory>Category icon:</TextCategory>
            <ButtomIconAdd>
                <TextButton>Choose icon fron library</TextButton>
            </ButtomIconAdd>
            <TextCategory>Category color:</TextCategory>   
            <List
                data={TESTE}
               renderItem={({item})=> <CardColor id={item.} color={""} />}
            />

        </Conteiner>
    )
}