import Checkbox from 'expo-checkbox';
import { Feather } from '@expo/vector-icons';
import { Conteiner,
     ConteinerData,
     ConteinerTask,
     TasksButtom,
     TasksTextG,
     TasksTextP,
     TextIcon } from "./style";




interface PropsList{
    task:string;
    data:string;
    numbericom:number;
}
export default function Card(props:PropsList){
    return(
        <Conteiner>
            <Checkbox
                color="#eee"
             
              />
            <ConteinerTask >
                < TasksTextG>{props.task}</TasksTextG>
                <TasksButtom />
                <TextIcon>{props.data}</TextIcon>
            </ConteinerTask>
            <ConteinerData>
            < TasksTextP><Feather name="flag" size={18} color="black" />{props.numbericom}</TasksTextP>
            </ConteinerData>
        </Conteiner>
    )
}