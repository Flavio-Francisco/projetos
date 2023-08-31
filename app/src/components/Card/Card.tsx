import React, { useContext, useEffect } from 'react';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import {
    Conteiner,
    ConteinerData,
    ConteinerTask,
    ConteinerView,
    TasksButtom,
    TasksTextG,
    TasksTextP,
    TextIcon,
    ViewButtomIcon
} from "./style";

import { api } from '../../api/api';
import { AuthContext } from '../../context/Auth';
import { AuthContextTask } from '../../context/Task';

interface PropsList {
    id: number;
    task: string;
    data: string;
    numbericom: number;
    compreted: boolean;
    onpress: (name: string) => void;

}


export default function Card(props: PropsList) {

    const [isChecked, setChecked] = useState(false);

    console.log(props)

    return (
        <Conteiner>
            <RadioButton
                value={"first"}
                status={isChecked === true ? 'checked' : 'unchecked'}
                color='#fff'
                uncheckedColor='#fff'
                onPress={() => {
                    props.onpress(props.task)
                    setChecked(!isChecked)
                }}
            />

            <ConteinerView>
                <ConteinerTask >
                    <TasksTextG>{props.task}</TasksTextG>
                </ConteinerTask>
                <ConteinerData>
                    <TextIcon>{props.data}</TextIcon>
                    <ViewButtomIcon>
                        <TasksButtom
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