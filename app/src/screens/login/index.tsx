
import { TextErro, ButtomLogin, ConteinerLogin, Label, TextButton, TextLogin, TextLabel, ButtomIcons, TextSocial, ViewHorizontal, HorizontalLine, TextHorizontal } from "./style";
import { Foundation, Fontisto } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Formik } from 'formik';
import * as Yup from "yup";
import { api } from "../../api/api";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth";
import React from "react";





interface MyFormValues {
  user: string;
  password: string;
}
interface UserProps {
  id:number;
  name: string;
  email:string;
  password: string;

}




const validationSchema = Yup.object().shape({
  user: Yup.string()
    .label('user')
    .required('user is required'),
  password: Yup.string()
    .label('password')
    .required('senha obrigatoria').min(4, 'digite mais quatro digitos')
});

export default function Login() {
  const [validation, setValidation] = useState<UserProps>();

 
  const {singnIn} = useContext(AuthContext)
  
  const FormValues: MyFormValues = { user: '', password: '' };
  

  return (
    <ConteinerLogin>

      <TextLogin>Login</TextLogin>
      <Formik
        initialValues={FormValues}

        onSubmit={values => {
        console.log(values);
        
            api.post('/auth', {
              name: values.user,
              password:values.password
             })
              .then(respose => {
                  singnIn(respose.data)
                  console.log(respose.data)
                
              })
              .catch(erro=>{
                console.error(erro)
              })
          
  
            
           
        }

        }
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <TextLabel>Usename</TextLabel>
            <Label
              onChangeText={handleChange('user')}
              onBlur={handleBlur('user')}
              value={values.user}
              placeholder="Digite seu usário"
              placeholderTextColor='#979797'

            />
            {errors.user ? (<TextErro>user Invalid</TextErro>) : (<></>)}
            <TextLabel>Password</TextLabel>
            <Label
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Digite sua senha"
              placeholderTextColor='#979797'
              secureTextEntry={true}
            />
            {errors.password ? (<TextErro>{errors.password}</TextErro>) : (<></>)}
            <ButtomLogin
              onPress={() => handleSubmit()}
             
            >
              <TextButton>Login</TextButton>
            </ButtomLogin>


          </>
        )}
      </Formik>
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
    </ConteinerLogin>
  )
}