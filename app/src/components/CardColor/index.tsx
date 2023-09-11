import React from "react";
import { ButtomIconAdd, Conteiner } from "./style";
import { CategoryProps } from "../../context/Category";



interface ColorProps{
   
    id:string,
    color:string,
    onPress:(category: CategoryProps)=>void,
}

export default function CardColor(props:ColorProps){
const category: CategoryProps ={
    name: "",
    icon: ""
};
    

    return(
        <Conteiner>
           <ButtomIconAdd
           style={{
            backgroundColor:props.color
           }}

           onPress={()=>props.onPress( category)}
           />
        </Conteiner>
    )
}