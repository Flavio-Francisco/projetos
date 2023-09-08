

import { View } from "react-native";
import { Title, Text, Conteiner, Label, TextButton, ButtomIcons, TextSocial, ButtomRegister, HorizontalLine, TextHorizontal, ViewHorizontal, TextLink, ViewHorizontalText } from "./style";
import { Foundation, Fontisto } from '@expo/vector-icons';
import React from "react";


export default function Register() {
    return (
        <Conteiner>
            <Title>
                <Text>Register</Text>
            </Title>

            <Label
                placeholder="Enter your Username"
                placeholderTextColor='#fff'
            />
            <Label
                placeholder="Enter your Password"
                secureTextEntry={true}
                placeholderTextColor='#fff'
            />
            <Label
                placeholder="Enter your Password"
                secureTextEntry={true}
                placeholderTextColor='#fff'
            />
            <ButtomRegister>
                <TextButton>Register</TextButton>
            </ButtomRegister>
            <ViewHorizontal>
                <HorizontalLine /><TextHorizontal>or</TextHorizontal><HorizontalLine />
            </ViewHorizontal>
            <ButtomIcons>
                <Fontisto name="google" size={22} color={'#fff'} />
                <TextSocial>Login with Google</TextSocial>
            </ButtomIcons>

            <ButtomIcons>
                <Foundation name="social-apple" size={22} color={'#fff'} />
                <TextSocial>Login with Appe</TextSocial>
            </ButtomIcons>
            <ViewHorizontalText>
                <TextLink>Already heve an accunt?Login</TextLink>
            </ViewHorizontalText>

        </Conteiner>

    )

}