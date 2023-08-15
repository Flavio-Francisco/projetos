
import { ButtomLogin, ConteinerLogin, Label,TextButton,TextLogin,TextLabel,ButtomIcons, TextSocial, ViewHorizontal, HorizontalLine, TextHorizontal } from "./style";
import { Foundation,Fontisto  } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import { Formik } from 'formik' ;   
import * as Yup from "yup";





export default function Login(){
    const navigation = useNavigation();

    // validação
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(70, 'Too Long!')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email')
          .required('Required'),
      });



    return(
        <ConteinerLogin>
          
            <TextLogin>Login</TextLogin>
            <Formik
            initialValues={{user: '',password:''}}
            onSubmit={values=>console.log(values)

            }
            >
                {({ handleChange, handleBlur, handleSubmit, values,errors}) => (
              <>
            <TextLabel>Usename</TextLabel>
            <Label
            onChangeText={handleChange('user')}
            onBlur={handleBlur('user')}
            value={values.user}

            placeholder="Digite seu usário"
            placeholderTextColor='#979797'
        
            />
             <TextLabel>Password</TextLabel>
            <Label
             onChangeText={handleChange('password')}
             onBlur={handleBlur('password')}
             value={values.password}
             placeholder="Digite sua senha"
             placeholderTextColor='#979797'
             secureTextEntry={true}
            />
            <ButtomLogin
              onPress={()=>handleSubmit()}
            >
                <TextButton>Login</TextButton> 
            </ButtomLogin>
               
            
             </>
              )}
            </Formik>
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