
import { Ionicons , MaterialCommunityIcons,Feather} from '@expo/vector-icons'; 
import { InputTask,TextTask,InputDescription,ButtomIcon,ConteinerIcon,ConteinerIconleft,ButtomIconLeft, ConteinerModal  } from './style';
import { useState } from 'react';




export function AddTask(){
    
    const [modalVisible, setModalVisible] = useState(0);
    return(
       
           <ConteinerModal >
            
                <TextTask>Add Task</TextTask>
                <InputTask/>
                <InputDescription/>
                <ConteinerIcon>
                <ConteinerIconleft >
                    <ButtomIconLeft>
                    <MaterialCommunityIcons name="timer-outline" size={24} color="#fff" />
                    </ButtomIconLeft>
                    <ButtomIconLeft>
                    <Feather name="tag" size={24} color="#fff" />
                    </ButtomIconLeft>
                    <ButtomIconLeft>
                    <Feather name="flag" size={24} color="#fff" />
                    </ButtomIconLeft>
                </ConteinerIconleft>
                <ButtomIcon
                onPress={()=>setModalVisible(1)}
                >
                    <Ionicons name="ios-send-outline" size={24} color="#8687E7" />
                </ButtomIcon>
                </ConteinerIcon>
           
         </ConteinerModal>
    
    )
}