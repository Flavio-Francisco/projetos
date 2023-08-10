import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import {  Conteiner,
     ConteinerData,
     ConteinerTask,
     ConteinerView,
     TasksButtom,
     TasksTextG,
     TasksTextP,
     TextIcon, 
     ViewButtomIcon} from "./style";
    
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