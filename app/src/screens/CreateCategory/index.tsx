import React, { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import CardColor from "../../components/CardColor";

import {
    Conteiner,
    Label,
    Title,
    TextCategory,
    ButtomIconAdd,
    TextButton,
    ConteinerButton,
    ButtomCancel,
    TextCreate,
    ButtomCreate,
    TextCancel
} from "./style";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { api } from "../../api/api";
import { AuthContextTask } from "../../context/Task";

type RootStackParamList = {
    Task: {
        id: string;
        name: string;
    };
};
type PerfilTeacherParams = RouteProp<RootStackParamList, 'Task'>;


export function CreateCategory() {
    const { navigate } = useNavigation();
    const [selectName, setSelectName] = useState('')
    const [selectColor, setSelecColor] = useState('')
    const { task, taskComplet, queryComp, taskQuery, createTask, loading, loading2 } = useContext(AuthContextTask);
    const route = useRoute<PerfilTeacherParams>();
    const { id } = route.params;
    const DATA = [
        {
            id: '1',
            color: '#C9CC41',
        },
        {
            id: '2',
            color: '#66CC41',
        },
        {
            id: '3',
            color: '#41CCA7',
        },
        {
            id: '4',
            color: '#4181CC',
        },
        {
            id: '5',
            color: '#41A2CC',
        },
        {
            id: '6',
            color: '#CC8441',
        },
        {
            id: '7',
            color: '#9741CC',
        },
        {
            id: '8',
            color: '#CC4173',
        },

    ];


    function handleColor(color: string) {
        setSelecColor(color);
        console.log('====================================');
        console.log(color);
        console.log('====================================');
    }

    function handleCategory() {
        async function updateTask() {
            await api.patch(`/category/${id}`, {

                category: selectName,
                color: selectColor
            }).then(() => {
                taskQuery();
                queryComp()
            })
            setSelectName('')
            setSelecColor('')
            navigate('Home')
        }
        updateTask()
        console.log('====================================');
        console.log(id);
        console.log(selectName);
        console.log(selectColor);
        console.log('====================================');

    }
    useEffect(() => {

    }, [selectColor])
    function handleCancel() {

        setSelecColor('')
        setSelectName('')
        navigate('Home')
    }


    return (

        <Conteiner>

            <Title>Create new category</Title>
            <TextCategory>Category name:</TextCategory>
            <Label
                value={selectName}
                onChangeText={setSelectName}
            />
            <TextCategory>Category icon:</TextCategory>
            <ButtomIconAdd>
                <TextButton>Choose icon fron library</TextButton>
            </ButtomIconAdd>
            <TextCategory>Category color:</TextCategory>
            <FlatList
                data={DATA}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={(item) => <CardColor id={""} color={item.item.color} onPress={handleColor} />}

            />
            <ConteinerButton>
                <ButtomCancel
                    onPress={handleCancel}
                >
                    <TextCancel>Cancel</TextCancel>
                </ButtomCancel>
                <ButtomCreate
                    onPress={handleCategory}
                >
                    <TextCreate>Create Category</TextCreate>
                </ButtomCreate>
            </ConteinerButton>
        </Conteiner>
    )
}