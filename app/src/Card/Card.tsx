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
export default function Card(props:PropsList){
    const [isChecked, setChecked] = useState(false);
    const [modal, setModal] = useState(true);
   
     
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
                 <ViewButtomIcon>
                   <TasksButtom 
            
                    onPress={()=>setModal(!modal)}
                   >
                        <Feather name="home" size={18} color="#A30000" />
                        <TextIcon>Home</TextIcon>
                  </TasksButtom>
                    < TasksTextP>
                        <Feather name="flag" size={18} color="#ffffff" />{props.numbericom}
                    </TasksTextP>
                 </ViewButtomIcon>
                </ConteinerData>
            </ConteinerView>
        </Conteiner>
    )
}