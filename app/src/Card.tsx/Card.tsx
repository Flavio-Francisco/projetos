import Checkbox from 'expo-checkbox';
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
import { Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';



interface PropsList{
    task:string;
    data:string;
    numbericom:number;
}
export default function Card(props:PropsList){
    const [isChecked, setChecked] = useState(false);
    return(
        <Conteiner>
          < Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#000' : undefined}
          />
          
            < ConteinerView>
                <ConteinerTask >
                    < TasksTextG>{props.task}</TasksTextG>
                </ConteinerTask>
                <ConteinerData>
                  <TextIcon>{props.data}</TextIcon>
                 <ViewButtomIcon>
                  <TasksButtom >
                    <Feather name="home" size={18} color="#fff" />
                    <TextIcon>Home</TextIcon>
                  </TasksButtom>
                    < TasksTextP>
                        <Feather name="flag" size={18} color="black" />{props.numbericom}
                    </TasksTextP>
                 </ViewButtomIcon>
                 
                </ConteinerData>
            </ ConteinerView>
        </Conteiner>
    )
}