import React from 'react';
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
    ViewButtomIcon,
    RadioButtonView,
    TasksButtomVazio,
    TextIconVazio
} from "./style";


interface PropsList {
    id: string;
    task: string;
    data: string;
    numbericom: number;
    compreted: boolean;
    category: string;
    color: string;
    onpress: (name: string) => void;
    onPress: (id: string) => void;

}


export default function Card(props: PropsList) {

    const [isChecked, setChecked] = useState(false);

    console.log(props)

    return (
        <Conteiner>
            <RadioButtonView>
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
            </RadioButtonView>
            <ConteinerView>
                <ConteinerTask >
                    <TasksTextG>{props.task}</TasksTextG>
                </ConteinerTask>
                <ConteinerData>
                    <TextIcon>{props.data}</TextIcon>
                    <ViewButtomIcon>
                    { props.category ?  <TasksButtom
                            style={{ backgroundColor: props.color }}
                            onPress={() => props.onPress(props.id)}
                        >
                            
                            <TextIcon>{props.category}</TextIcon>
                        </TasksButtom>:
                        <TasksButtomVazio
                        style={{ backgroundColor:'#5F9EA0'}}
                        onPress={() => props.onPress(props.id)}
                        >
                                <TextIconVazio> Add Category</TextIconVazio>
                        </TasksButtomVazio>
                        
                        }
                        < TasksTextP>
                            <Feather name="flag" size={18} color="#ffffff" />{props.numbericom}
                        </TasksTextP>
                    </ViewButtomIcon>
                </ConteinerData>
            </ConteinerView>
        </Conteiner>
    )
}