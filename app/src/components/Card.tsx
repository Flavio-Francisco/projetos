
import { ButtomRoute, Conteiner, Tasks, TasksDate} from "./style"

export interface PropsList{
    id:number,
    tasks:string,
    date:string,
    buttom:boolean;
}


export default function Card(props:PropsList){
    return(
        <Conteiner>
          <Tasks>{props.tasks}</Tasks>
          <TasksDate>{props.date}</TasksDate>
          <ButtomRoute/>
        </Conteiner>
    )
}