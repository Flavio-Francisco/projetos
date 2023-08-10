
import { ButtomLogin, ConteinerLogin, Label,TextButton,TextLogin,TextLabel,ButtomIcons, TextSocial, ViewHorizontal, HorizontalLine, TextHorizontal } from "./style";
import { Foundation,Fontisto  } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";





export default function Login(){
    const navigation = useNavigation();
    function handleSubmit() {
        navigation.navigate('HomeMemu')
    }

    return(
        <ConteinerLogin>
          
            <TextLogin>Login</TextLogin>
            
            <TextLabel>Usename</TextLabel>
            <Label
            placeholder="Digite seu usário"
            placeholderTextColor='#979797'
            />
             <TextLabel>Password</TextLabel>
            <Label
             placeholder="Digite sua senha"
             placeholderTextColor='#979797'
             secureTextEntry={true}
            />
            <ButtomLogin
            onPress={handleSubmit}
            >
                <TextButton>Login</TextButton>
            </ButtomLogin>

            <ViewHorizontal>
           <HorizontalLine/><TextHorizontal>or</TextHorizontal><HorizontalLine/>
          </ViewHorizontal>

            <ButtomIcons>
                <Fontisto name="google"size={22} color={'#fff'}/>
                <TextSocial>Login with Google</TextSocial> 
            </ButtomIcons>

            <ButtomIcons>
                <Foundation name="social-apple"  size={22} color={'#fff'}/>
                <TextSocial>Login with Appe</TextSocial> 
            </ButtomIcons>
        </ConteinerLogin>
    )
}