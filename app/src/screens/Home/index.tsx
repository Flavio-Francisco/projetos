import { TouchableOpacity,ActivityIndicator } from "react-native";
import {
    AvatarUserHome,
    TextModal,
    ButtomModal,
    Conteiner,
    ConteinerList,
    ConteinerList2,
    ConteinerSearch,
    HeaderHome,
    Search,
    SearchButtom,
    SearchButtomList,
    SearchButtomList2,
    TextSearch,
    TitleHome, InputTask, TextTask, InputDescription, ButtomIcon, ConteinerIcon, ConteinerIconleft, ButtomIconLeft, ConteinerModal
} from "./style";
import { Feather, Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext, useRef, useState, useEffect } from "react";
import BottomSheet from '@gorhom/bottom-sheet';
import { Formik } from 'formik';
import * as Yup from "yup";

import Card2 from "../../components/Card2/Card2";
import Card from "../../components/Card/Card";
import { AuthContextTask, TaskProps } from "../../context/Task";
import { AuthContext, AuthUserData } from "../../context/Auth";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { api } from "../../api/api";
import { TextErro } from "../login/style";
import SpinnerTask from './../../components/Spinner/index';

interface MyFormValues {
    task: string;
    
  }


export default function Home() {
    const [modalVisible, setModalVisible] = useState(0);
    const [list, setList] = useState<TaskProps[]>([]);
    const [listComp, setListComp] = useState<TaskProps[]>([]);
    const [newTask,setNewTask]= useState('')
    const [loading, setLoading] = useState<boolean>(true);
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = ['1px', '90%'];
 
    
    const { user } = useContext(AuthContext)

    const Task =  Object.entries(list).map(([key, value]) => ({
        ...value,
        id: parseInt(key)
      }));

      const TaskComp =  Object.entries(listComp).map(([key, value]) => ({
        ...value,
        id: parseInt(key)
      }));
    async function query(){
        api.post(`/show/${user.id}`)
      
        .then (response=>{
             
                setList(response.data)
                console.log(list);
                
        })

    }
    async function queryComp(){
        await  api.post(`/showCompleted/${user.id}`)
      
        .then (response=>{
          
                setListComp(response.data)
                    
        })
    }
    async function createTask() {
     
            api.post(`/task/${user.id}`,{
                name:newTask,
                completed:false,
                user_id:user.id
            }) 

    }
     useEffect(() => {
        setTimeout(() => {  
            setLoading(false);
          }, 2000);
        
      queryComp();
       query();
      
    }, [])

   

    return (
        <Conteiner>

            <HeaderHome>
                <TouchableOpacity>
                    <Ionicons name='md-menu-outline' size={22} color={'#979797'} />
                </TouchableOpacity>
                <TitleHome> Index</TitleHome>
                <AvatarUserHome
                    source={{
                        uri: 'https://avatars.githubusercontent.com/u/111377254?v=4'
                    }}
                />
            </HeaderHome>

            <ConteinerSearch>
                <SearchButtom ><Feather name="search" size={30} color="#AFAFAF" /></SearchButtom>
                <Search />
            </ConteinerSearch>
            <SearchButtomList>
                <TextSearch>Today </TextSearch>
                <AntDesign name="down" size={12} color="#ffffff" />
            </SearchButtomList>
            <ConteinerList>{loading?( <ActivityIndicator size={30} color={'#ffffff'}/>):
                
               
                <FlatList
                    data={Task}
                    keyExtractor={item=>item.name }
                    renderItem={(item) => <Card task={item.item.name} data={"Today At 16:45"} numbericom={1} compreted={false} id={item.item.id} />}
                />
            }
            </ConteinerList>
          
            <SearchButtomList2>
                <TextSearch>Completd</TextSearch>
                <AntDesign name="down" size={12} color="#ffffff" />
            </SearchButtomList2>
            <ConteinerList2>
                {loading?( <ActivityIndicator size={30} color={'#ffffff'}/>):
                <FlatList
                    data={TaskComp}
                    keyExtractor={item => item.name}
                    renderItem={(item) => <Card2 task={item.item.name} data={"Today At 16:45"} numbericom={1} />}
                />
              }
            </ConteinerList2>
            <ButtomModal
                onPress={() => setModalVisible(1)}
           
            >
                <TextModal>Add Task</TextModal>
            </ButtomModal>
         
            <BottomSheet

                ref={bottomSheetRef}
                index={modalVisible}
                snapPoints={snapPoints}
                
                handleIndicatorStyle={{
                    backgroundColor: '#363636',
                }}
                backgroundStyle={{
                    backgroundColor: '#363636',
                }}
            >
                 
    
              
               
                <ConteinerModal >

                    <TextTask>Add Task</TextTask>
                    <InputTask
                    value={newTask}
                    onChangeText={setNewTask}
                    
                    />
                     
                    <InputDescription />
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
                           onPressIn={()=> createTask()}
                            onPress={() => setModalVisible(0)}
                           
                        >
                            <Ionicons name="ios-send-outline" size={24} color="#8687E7" />
                        </ButtomIcon>
                    </ConteinerIcon>

                </ConteinerModal>
       
           
              
         </BottomSheet>
        </Conteiner>
    )
}