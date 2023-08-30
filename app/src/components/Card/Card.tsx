import  React, { useContext, useEffect }  from 'react';
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

import { api } from '../../api/api';
import { AuthContext } from '../../context/Auth';
import { AuthContextTask, TaskProps } from '../../context/Task';
    
interface PropsList{
    id:number;
    task:string;
    data:string;
    numbericom:number;
    compreted:boolean
    
}


export default function Card(props:PropsList){
   
    const [isChecked, setChecked] = useState(false);
    const { user } = useContext(AuthContext)
    const { queryComp } = useContext(AuthContextTask)


   function handleSubimit() {
  
       
   } 
   async function updateTask() {
    if (isChecked ===true) {
         api.patch(`/showAtera/${props.task}`,{
        
            name: props.task,
            completed: isChecked,
            
        }).then(()=>{
            queryComp()        
        })
        console.log(props.task)
    
    }
   }
   
   
useEffect(()=>{
    updateTask()
   
},[])

    return(
        <Conteiner>
           
         <RadioButton
            value={"first"}
            status={ isChecked === true ? 'checked' : 'unchecked' }
            color='#fff'
            uncheckedColor='#fff'
            onPress={() =>{
                updateTask()
                setChecked(!props.compreted)   
                 
            }}
         />

        <ConteinerView>
            <ConteinerTask >
                 < TasksTextG>{props.task}</TasksTextG>
            </ConteinerTask>
                <ConteinerData>
                  <TextIcon>{props.data}</TextIcon>
                 <ViewButtomIcon>
                   <TasksButtom 
                    onPress={handleSubimit      
                    }
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