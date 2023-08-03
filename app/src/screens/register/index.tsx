

import { Title,Text, Conteiner, Label, BottomLogin, TextButton} from "./style";

export default function Register(){
return(
    <Conteiner>
        <Title>
            <Text>Register</Text>
        </Title>
        <Label 
        placeholder="Digite seu email"

        />
        <Label
          placeholder="Digite seu usuário"  
        />
        <Label
        placeholder="Digite sua senha"
        />
        <Label
        placeholder="Comfime sua senha"
        />
        <BottomLogin><TextButton>Entrar</TextButton></BottomLogin>

    </Conteiner>
    
)

}