import React from "react";
import { ReactNode, SetStateAction, createContext, useState } from "react";
import { api } from "../api/api";
import { useNavigation } from "@react-navigation/native";

export interface AuthUserData{
  token:string
    user:{
        id: number;
        name:string;
        email:string;
        password:string;
      }
    
}



export interface AuthContextDataProps {
    user: AuthUserData;
    singnIn:(data:AuthUserData)=>Promise<void>;
    singnOut:()=>void;
  }

  interface AuthContextProviderProps {
    children: ReactNode;
    
  }
  

  export const AuthContext = createContext({} as AuthContextDataProps);


  export function  AuthContextProvider({ children }: AuthContextProviderProps){
    const [user, setUser] = useState<AuthUserData>({} as AuthUserData);
   
  
    async function singnIn(data:AuthUserData){
if (data) {
  setUser(data)    
  
}
    
        
  }
       function singnOut(){
       return setUser({
        token:'',
         user:{
          email: '',
          name: "",
          id:0,
          password:'',
         }
       });
}
   
    return(
        <AuthContext.Provider
        value={{
              singnOut,
               user,
               singnIn
        }}
        >

            {children}
        </AuthContext.Provider>
    )

  }