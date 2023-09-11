import React, { useContext } from "react";
import { FlatList } from "react-native";
import CardColor from "../../components/CardColor";
import { AuthContextCategory, CategoryProps } from "../../context/Category";
import { Conteiner, 
    Label,
     Title,
     TextCategory,
     ButtomIconAdd,
     TextButton,
     ConteinerButton,
     ButtomCancel,
     TextCreate,
     ButtomCreate,
     TextCancel } from "./style";



export function CreateCategory(){

const DATA = [
{
   id:'1',
   color:'#C9CC41',
},
{
    id:'2',
    color:'#66CC41',
},   
{
    id:'3',
    color:'#41CCA7',
},   
{
    id:'4',
    color:'#4181CC',
},   
{
    id:'5',
    color:'#41A2CC',
},   
{
    id:'6',
    color:'#CC8441',
},   
{
    id:'7',
    color:'#9741CC',
},   
{
    id:'8',
    color:'#CC4173',
},   

];
    function handleCategory(category: CategoryProps){
        
        
    }

  const { addCategory } = useContext(AuthContextCategory);

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
            <FlatList
                data={DATA}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={(item) => <CardColor id={""} color={item.item.color}onPress={handleCategory} />}
               
              />
                <ConteinerButton >
                   <ButtomCancel><TextCancel>Cancel</TextCancel></ButtomCancel>
                    <ButtomCreate><TextCreate>Create Category</TextCreate></ButtomCreate>
                </ConteinerButton>
        </Conteiner>
    )
}