import BottomSheet, {
    BottomSheetModalProvider
  } from '@gorhom/bottom-sheet';
import {  useMemo, useRef } from 'react';
import { Ionicons , MaterialCommunityIcons,Feather} from '@expo/vector-icons'; 
import { Conteiner,InputTask,TextTask,InputDescription,ButtomIcon,ConteinerIcon,ConteinerIconleft,ButtomIconLeft  } from './style';


export function AddTask(){
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['25%', '50%'], []);

  // COLOCAR ESSE CODIGO NA TELA DE HOME!!
    return(
        <BottomSheetModalProvider>
           <Conteiner >
            <BottomSheet
                
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                backgroundStyle={{
                    backgroundColor:'#363636',
                }}
                >
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
                <ButtomIcon>
                    <Ionicons name="ios-send-outline" size={24} color="#8687E7" />
                </ButtomIcon>
                </ConteinerIcon>
            </BottomSheet>
         </Conteiner>
        </BottomSheetModalProvider>
    )
}