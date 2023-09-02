import { TouchableOpacity, ActivityIndicator, View } from "react-native";
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
    TitleHome, InputTask, TextTask, InputDescription, ButtomIcon, ConteinerIcon, ConteinerIconleft, ButtomIconLeft, ConteinerModal, ConteinerListNull, ConteinerListNull2
} from "./style";
import { Feather, Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext, useState, useEffect } from "react";



import Card2 from "../../components/Card2/Card2";
import Card from "../../components/Card/Card";
import { AuthContextTask, TaskProps } from "../../context/Task";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { BottomSheetComponent } from "../../components/BuutomSheet";
import { api } from "../../api/api";






export default function Home() {
    const [modalVisible, setModalVisible] = useState(false);
    const [newTask, setNewTask] = useState('')
    const [refreshing, setRefreshing] = useState(true)
    const [listVisible, setListVisible] = useState(true)
    const [listVisible2, setListVisible2] = useState(true)


    const { task, taskComplet, queryComp, taskQuery, createTask, loading, loading2 } = useContext(AuthContextTask);

    console.log(task, taskComplet)

    // const Task = Object.entries(task).map(([key, value]) => ({
    //     ...value,
    //     id: parseInt(key)
    // }));

    // const TaskComp = Object.entries(taskComplet).map(([key, value]) => ({
    //     ...value,
    //     id: parseInt(key)
    // }));


    useEffect(() => {
        queryComp()
        taskQuery()
    }, [queryComp, taskQuery])


    async function updateTask(name: string,) {
        await api.patch(`/showAtera/${name}`, {
            name: task,
            completed: true,
        }).then(() => {
            taskQuery();
            queryComp()
        })
    }

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
                <SearchButtom >
                    <Feather name="search" size={30} color="#AFAFAF" />
                </SearchButtom>
                <Search />
            </ConteinerSearch>
            <SearchButtomList
                onPress={() => {
                    setListVisible(!listVisible)
                    taskQuery()
                }}
            >
                {listVisible == true ?
                    <><TextSearch>Today </TextSearch><AntDesign name="down" size={12} color="#ffffff" /></>
                    :
                    <><TextSearch>Today </TextSearch><AntDesign name="up" size={12} color="#ffffff" /></>
                }
            </SearchButtomList>
            {listVisible == true ?
                <ConteinerList>
                    {loading ? (<ActivityIndicator size={30} color={'#ffffff'} />) :
                        <FlatList
                            data={task}
                            keyExtractor={item => item.id}
                            renderItem={(item) => <Card task={item.item.name} data={"Today At 16:45"} onpress={updateTask} numbericom={1} compreted={false} id={0}  />}
                        />

                    }
                </ConteinerList> : <ConteinerListNull></ConteinerListNull>
            }


            <SearchButtomList2
                onPress={() => setListVisible2(!listVisible2)}
            >
                {listVisible2 == true ?
                    <><TextSearch>Completed </TextSearch><AntDesign name="down" size={12} color="#ffffff" /></>
                    :
                    <><TextSearch>Completed </TextSearch><AntDesign name="up" size={12} color="#ffffff" /></>
                }
            </SearchButtomList2>
            {listVisible2 == true ?
                <ConteinerList2>
                    {loading2 ? (<ActivityIndicator size={30} color={'#ffffff'} />) :

                        <FlatList
                            data={taskComplet}
                            keyExtractor={item => item.id}
                            renderItem={(item) => <Card2 task={item.item.name}  />}
                        />

                    }
                </ConteinerList2> : <ConteinerListNull2></ConteinerListNull2>
            }
            <ButtomModal
                onPress={() => setModalVisible(!modalVisible)}
            >
                <TextModal>Add Task</TextModal>
            </ButtomModal>

            <BottomSheetComponent
                isOpen={modalVisible}
                toggle={() => setModalVisible(false)}
                snapPoints={['90%'] }

            >

                <ConteinerModal >

                    <TextTask>Add Task</TextTask>
                    <InputTask
                        value={newTask}
                        onChangeText={setNewTask}
                        placeholderTextColor={'#979797'}

                    />

                    <InputDescription

                    />
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
                            onPressIn={() => {

                                createTask(newTask)
                                taskQuery()
                              
                            }}
                            onPress={() => setModalVisible(!modalVisible)}

                        >
                            <Ionicons name="ios-send-outline" size={24} color="#8687E7" />
                        </ButtomIcon>
                    </ConteinerIcon>

                </ConteinerModal>

            </BottomSheetComponent>

        </Conteiner>
    )
}