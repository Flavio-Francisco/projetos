import { RadioButton } from 'react-native-paper';
import { useContext, useState } from 'react';
import React from 'react';

import {  Conteiner,
     ConteinerData,
     ConteinerTask,
     ConteinerView,
     TasksButtom,
     TasksTextG,
     TasksTextP,
     TextIcon, 
     ViewButtomIcon} from "./style";
import { api } from '../../api/api';
    
interface PropsList{
    task:string;
    data:string;
    numbericom:number;
   
}
export default function Card2(props:PropsList){
    const [isChecked, setChecked] = useState(false);
    const [radio, setRadio] = useState(true);
 
     
    return(
        <Conteiner>
           
         <RadioButton
            value={"first"}
            status={ isChecked === true ? 'checked' : 'unchecked' }
            color='#fff'
            uncheckedColor='#fff'
            onPress={() => setChecked(!isChecked)}
         />

        <ConteinerView>
            <ConteinerTask >
                 < TasksTextG>{props.task}</TasksTextG>
            </ConteinerTask>
                <ConteinerData>
                  <TextIcon>{props.data}</TextIcon>
                </ConteinerData>
            </ConteinerView>
        </Conteiner>
    )
}