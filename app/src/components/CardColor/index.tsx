import React from "react";
import { ButtomIconAdd, Conteiner } from "./style";
import { CategoryProps } from "../../context/Category";



interface ColorProps {

    id: string,
    color: string,
    onPress: (color: string) => void,
}

export default function CardColor(props: ColorProps) {

    return (
        <Conteiner>
            <ButtomIconAdd
                style={{
                    backgroundColor: props.color
                }}

                onPress={() => props.onPress(props.color)}
            />
        </Conteiner>
    )
}