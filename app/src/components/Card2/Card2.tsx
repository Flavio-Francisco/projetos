import { RadioButton } from 'react-native-paper';
import { useContext, useState } from 'react';
import React from 'react';

import {  Conteiner,
     ConteinerData,
     ConteinerTask,
     ConteinerView,
     TasksTextG,
     TextIcon, 
 } from "./style";
import { api } from '../../api/api';
    
interface PropsList{
    task:string;
   
   
}
export default function Card2(props:PropsList){
    const [isChecked, setChecked] = useState(false);
    const [radio, setRadio] = useState(true);
 
     
    return(
        <Conteiner>
           
        <ConteinerView>
            <ConteinerTask >
                 < TasksTextG>{props.task}</TasksTextG>
            </ConteinerTask>
            </ConteinerView>
        </Conteiner>
    )
}