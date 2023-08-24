import { ReactNode, createContext, useState } from "react";
import { api } from "../api/api";

export interface AuthUserData{
    
        id: number;
        name:string;
        email:string;
        password:string;
    
}


export interface AuthContextDataProps {
    user: AuthUserData;
    singnIn:()=>void;
    singnOut:()=>void;
  }

  interface AuthContextProviderProps {
    children: ReactNode;
    
  }
  

  export const AuthContext = createContext({} as AuthContextDataProps);


  export function  AuthContextProvider({ children }: AuthContextProviderProps){
    const [user, setUser] = useState<AuthUserData>({} as AuthUserData);
  
    async function singnIn(){
        await api.get('/get')
      
         .then (response=>{
            setUser(response.data)
         })
  }


       function singnOut(){
       return setUser({
           email: '',
           name: "",
           id:0,
           password:'',
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