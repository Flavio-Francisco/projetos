import { ButtomLogin, ConteinerLogin, Label,TextButton,TextLogin,TextLabel,ButtomIcons } from "./style";
import { AntDesign,Foundation } from '@expo/vector-icons'; 





export default function Login(){
    return(
        <ConteinerLogin>
            <TextLogin>Login</TextLogin>
            
            <TextLabel>Usename</TextLabel>
            <Label
            placeholder="Digite seu usário"
            placeholderTextColor='#8687E7'
            />
             <TextLabel>Password</TextLabel>
            <Label
             placeholder="Digite sua senha"
             placeholderTextColor='#8687E7'
            />
            <ButtomLogin><TextButton>Login</TextButton></ButtomLogin>
            <ButtomIcons><AntDesign name="google"size={22}color={'#34A853'}/></ButtomIcons>
            <ButtomIcons><Foundation name="social-apple"  size={22} color={'#FFFFFF'}/></ButtomIcons>
        </ConteinerLogin>
    )
}